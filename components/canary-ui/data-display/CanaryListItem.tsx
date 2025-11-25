import { ReactNode, forwardRef } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiDrag } from "@mdi/js";

export interface CanaryListItemProps {
  // Maximum flexibility - pass any custom structure
  children?: ReactNode;

  // Convenience props for common patterns
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;

  // Behavior props
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  isClickable?: boolean;
  isDraggable?: boolean;

  // Styling props
  className?: string;
  padding?: "normal" | "compact";
  alignment?: "start" | "center";
  isSelected?: boolean;
  backgroundColor?: string;
  hoverColor?: string;
  selectedBackgroundColor?: string;
  selectedTitleColor?: string;
  selectedSubtitleColor?: string;
  selectedDescriptionColor?: string;
  allowTextWrap?: boolean;

}

const CanaryListItem = forwardRef<HTMLLIElement, CanaryListItemProps>(
  (
    {
      children,
      title,
      subtitle,
      description,
      icon,
      leftContent,
      rightContent,
      onClick,
      href,
      target = "_self",
      isClickable = true,
      isDraggable = false,
      className = "",
      padding = "normal",
      alignment = "center",
      isSelected = false,
      backgroundColor,
      hoverColor,
      selectedBackgroundColor,
      selectedTitleColor,
      selectedSubtitleColor,
      selectedDescriptionColor,
      allowTextWrap = false,
    },
    ref
  ) => {
    const paddingClasses = {
      normal: "px-4 py-4",
      compact: "px-4 py-2",
    };

    const alignmentClasses = {
      center: "items-center",
      start: "items-start",
    };

    // Determine background color
    const bgColor = isSelected
      ? selectedBackgroundColor || colors.colorBlueDark1
      : backgroundColor || "transparent";

    // Determine text colors
    const titleColor = isSelected
      ? selectedTitleColor || colors.colorWhite
      : colors.colorBlack1;

    const subtitleColor = isSelected
      ? selectedSubtitleColor || colors.colorWhite
      : colors.colorBlack3;

    const descriptionColor = isSelected
      ? selectedDescriptionColor || "#93ABE1"
      : "#707070";

    // Build the content - either use children or build from props
    const content = children || (
      <>
        {isDraggable && (
          <div className="flex items-center cursor-grab dragHandle">
            <Icon path={mdiDrag} size={0.8} color={colors.colorBlack1} />
          </div>
        )}

        {icon && <div className="flex items-center">{icon}</div>}

        {leftContent && <div className="flex items-center flex-shrink-0">{leftContent}</div>}

        <div className="flex flex-col flex-1 min-w-0 gap-0.5">
          {title && (
            <div
              className={clsx(
                "text-sm font-medium",
                !allowTextWrap && "truncate"
              )}
              style={{ color: titleColor }}
            >
              {title}
            </div>
          )}
          {subtitle && (
            <div
              className={clsx("text-xs", !allowTextWrap && "truncate")}
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </div>
          )}
          {description && (
            <div
              className={clsx("text-xs", !allowTextWrap && "truncate")}
              style={{ color: descriptionColor }}
            >
              {description}
            </div>
          )}
        </div>

        {rightContent && (
          <div className="flex items-center flex-shrink-0">{rightContent}</div>
        )}
      </>
    );

    // Determine wrapper component (a vs div)
    const WrapperComponent = href && isClickable ? "a" : "div";

    return (
      <li
        ref={ref}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        className={clsx("list-none canary-list-item", className)}
      >
        <WrapperComponent
          href={href}
          target={href ? target : undefined}
          className={clsx(
            "flex flex-row w-full gap-4",
            paddingClasses[padding],
            alignmentClasses[alignment],
            isClickable && "cursor-pointer",
            isSelected && "hover:opacity-90"
          )}
          style={{
            backgroundColor: bgColor,
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (isClickable && !isSelected) {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                hoverColor || colors.colorBlack8;
            }
          }}
          onMouseLeave={(e) => {
            if (isClickable && !isSelected) {
              (e.currentTarget as HTMLElement).style.backgroundColor = bgColor;
            }
          }}
          onClick={onClick}
          {...(WrapperComponent === "a"
            ? {}
            : { role: isClickable ? "button" : undefined })}
        >
          {content}
        </WrapperComponent>
      </li>
    );
  }
);

CanaryListItem.displayName = "CanaryListItem";

export default CanaryListItem;
