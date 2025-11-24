import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion, AnimatePresence } from "framer-motion";

export interface CanaryListProps {
  // Content
  children?: ReactNode;
  items?: any[]; // For controlled draggable lists

  // Drag and drop
  isDraggable?: boolean;
  onReorder?: (items: any[]) => void;

  // Styling
  className?: string;
  hasOuterBorder?: boolean;

  // States
  isLoading?: boolean;
  loadingContent?: ReactNode;
  isEmpty?: boolean;
  emptyContent?: ReactNode;
  hasError?: boolean;
  errorContent?: ReactNode;
}

// Wrapper for each sortable item
interface SortableItemProps {
  id: string;
  children: ReactNode;
  isDraggable: boolean;
  isLast: boolean;
}

function SortableItem({ id, children, isDraggable, isLast }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: !isDraggable });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    borderBottom: isLast ? 'none' : `1px solid ${colors.colorBlack6}`,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      {...attributes}
      {...(isDraggable ? listeners : {})}
    >
      {children}
    </motion.div>
  );
}

const CanaryList = ({
  children,
  items,
  isDraggable = false,
  onReorder,
  className = "",
  hasOuterBorder = false,
  isLoading = false,
  loadingContent,
  isEmpty = false,
  emptyContent,
  hasError = false,
  errorContent,
}: CanaryListProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [internalItems, setInternalItems] = useState<any[]>(items || []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const currentItems = items || internalItems;
      const oldIndex = currentItems.findIndex((item) => item.id === active.id);
      const newIndex = currentItems.findIndex((item) => item.id === over.id);

      const reorderedItems = arrayMove(currentItems, oldIndex, newIndex);

      if (onReorder) {
        onReorder(reorderedItems);
      } else {
        setInternalItems(reorderedItems);
      }
    }

    setActiveId(null);
  };

  // State rendering
  if (isLoading) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        )}
        style={{
          borderColor: hasOuterBorder ? colors.colorBlack6 : undefined,
          backgroundColor: colors.colorWhite,
        }}
      >
        {loadingContent || (
          <div className="text-sm" style={{ color: colors.colorBlack3 }}>
            Loading...
          </div>
        )}
      </div>
    );
  }

  if (hasError) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        )}
        style={{
          borderColor: hasOuterBorder ? colors.colorBlack6 : undefined,
          backgroundColor: colors.colorWhite,
        }}
      >
        {errorContent || (
          <div className="text-sm" style={{ color: colors.colorRed1 }}>
            Error loading list
          </div>
        )}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div
        className={clsx(
          "flex items-center justify-center p-8",
          hasOuterBorder && "border rounded-lg",
          className
        )}
        style={{
          borderColor: hasOuterBorder ? colors.colorBlack6 : undefined,
          backgroundColor: colors.colorWhite,
        }}
      >
        {emptyContent || (
          <div className="text-sm" style={{ color: colors.colorBlack3 }}>
            No items to display
          </div>
        )}
      </div>
    );
  }

  // Convert children to array for draggable mode
  const childArray = Array.isArray(children) ? children : [children];
  const currentItems = items || internalItems;
  const itemIds = currentItems.map((item) => item.id || item);

  // Render draggable list
  if (isDraggable && items) {
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
          <ul
            className={clsx(
              "p-0 m-0",
              hasOuterBorder && "border rounded-lg overflow-hidden",
              className
            )}
            style={{
              borderColor: hasOuterBorder ? colors.colorBlack6 : undefined,
              backgroundColor: colors.colorWhite,
            }}
          >
            <AnimatePresence>
              {currentItems.map((item, index) => (
                <SortableItem
                  key={item.id || index}
                  id={item.id || index.toString()}
                  isDraggable={isDraggable}
                  isLast={index === currentItems.length - 1}
                >
                  {childArray[index]}
                </SortableItem>
              ))}
            </AnimatePresence>
          </ul>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div
              style={{
                opacity: 0.5,
                backgroundColor: colors.colorBlack8,
              }}
            >
              {childArray[currentItems.findIndex((item) => item.id === activeId)]}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    );
  }

  // Render regular list
  return (
    <ul
      className={clsx(
        "p-0 m-0",
        hasOuterBorder && "border rounded-lg overflow-hidden",
        className
      )}
      style={{
        borderColor: hasOuterBorder ? colors.colorBlack6 : undefined,
        backgroundColor: colors.colorWhite,
      }}
    >
      <AnimatePresence>
        {childArray.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              borderBottom: index === childArray.length - 1 ? 'none' : `1px solid ${colors.colorBlack6}`,
            }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
};

CanaryList.displayName = "CanaryList";

export default CanaryList;
