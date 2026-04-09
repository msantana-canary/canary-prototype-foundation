import { ReactNode, useEffect, useRef, useState } from "react";
import { colors, shadows, zIndex } from "../design-tokens";
import clsx from "clsx";

export interface CanaryOverflowMenuProps {
  items: Array<{
    id: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    isDanger?: boolean;
    isDivider?: boolean;
  }>;
  placement?: "bottom-start" | "bottom-end";
  trigger?: ReactNode;
  className?: string;
}

export default function CanaryOverflowMenu({
  items,
  placement = "bottom-end",
  trigger,
  className = "",
}: CanaryOverflowMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: CanaryOverflowMenuProps["items"][number]) => {
    if (item.isDivider) return;
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={clsx("relative inline-block", className)}>
      {/* Trigger */}
      {trigger ? (
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button
          type="button"
          onClick={handleToggle}
          className="p-1 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="More options"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="4" r="1.5" fill={colors.colorBlack2} />
            <circle cx="10" cy="10" r="1.5" fill={colors.colorBlack2} />
            <circle cx="10" cy="16" r="1.5" fill={colors.colorBlack2} />
          </svg>
        </button>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div
          className={clsx(
            "absolute py-1 rounded-lg min-w-[180px]",
            placement === "bottom-end" ? "right-0" : "left-0"
          )}
          style={{
            backgroundColor: colors.colorWhite,
            boxShadow: shadows.lg,
            border: `1px solid ${colors.colorBlack6}`,
            zIndex: zIndex.popover,
          }}
        >
          {items.map((item) => {
            if (item.isDivider) {
              return (
                <div
                  key={item.id}
                  className="my-1"
                  style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
                />
              );
            }

            return (
              <div
                key={item.id}
                className="px-4 py-2 text-sm cursor-pointer flex items-center gap-2"
                style={{
                  color: item.isDanger ? colors.danger : colors.colorBlack2,
                }}
                onClick={() => handleItemClick(item)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    colors.colorBlack7;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
