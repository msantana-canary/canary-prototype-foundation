import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export enum ChipType {
  SELECTABLE = "selectable",
  REMOVABLE = "removable",
}

export type ChipSize = "large" | "normal" | "compact";

export interface CanaryChipProps {
  label: string;
  chipType?: ChipType;
  onClick?: () => void;
  onRemove?: () => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: ChipSize;
  isDisabled?: boolean;
  isSelected?: boolean;
  isActive?: boolean;
  isRounded?: boolean;
  className?: string;
}

const SIZE_CONFIG = {
  large: { height: 48, fontSize: 16, lineHeight: "24px", iconSize: 24, padding: 16 },
  normal: { height: 40, fontSize: 14, lineHeight: "22px", iconSize: 20, padding: 16 },
  compact: { height: 32, fontSize: 12, lineHeight: "18px", iconSize: 20, padding: 16 },
};

function CloseIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M6.5 6.5L13.5 13.5M13.5 6.5L6.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CanaryChip({
  label,
  chipType = ChipType.SELECTABLE,
  onClick,
  onRemove,
  leadingIcon,
  trailingIcon,
  size = "normal",
  isDisabled = false,
  isSelected = false,
  isActive = false,
  isRounded = true,
  className = "",
}: CanaryChipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const config = SIZE_CONFIG[size];
  const isRemovable = chipType === ChipType.REMOVABLE;

  // Selectable chip styles
  const getSelectableStyles = () => {
    if (isSelected) {
      return {
        backgroundColor: colors.colorBlueDark1,
        borderColor: colors.colorBlueDark1,
        color: isPressed ? colors.colorBlueDark3 : isHovered ? colors.colorBlueDark4 : colors.white,
      };
    }
    return {
      backgroundColor: isPressed
        ? "rgba(40,88,196,0.16)"
        : (isHovered || isActive)
          ? "rgba(40,88,196,0.08)"
          : "transparent",
      borderColor: colors.colorBlueDark1,
      color: colors.colorBlueDark1,
    };
  };

  // Removable chip styles
  const getRemovableStyles = () => ({
    backgroundColor: isPressed
      ? colors.colorBlack4
      : isHovered
        ? colors.colorBlack5
        : colors.colorBlack6,
    borderColor: "transparent",
    color: colors.colorBlack1,
  });

  const styles = isRemovable ? getRemovableStyles() : getSelectableStyles();

  const handleClick = () => {
    if (isDisabled) return;
    onClick?.();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDisabled) return;
    onRemove?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => !isDisabled && setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => !isDisabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={clsx(
        "inline-flex items-center gap-2 border border-solid",
        isRounded ? "rounded-full" : "rounded-[4px]",
        "transition-colors duration-150 select-none",
        isRemovable ? "font-normal" : "font-medium",
        isDisabled ? "opacity-50 cursor-default" : "cursor-pointer",
        className
      )}
      style={{
        height: config.height,
        fontSize: config.fontSize,
        lineHeight: config.lineHeight,
        paddingLeft: config.padding,
        paddingRight: isRemovable && !isDisabled ? config.padding / 2 : config.padding,
        minWidth: 72,
        ...styles,
      }}
    >
      {!isRemovable && leadingIcon && (
        <span
          className="flex items-center justify-center shrink-0"
          style={{ width: config.iconSize, height: config.iconSize }}
        >
          {leadingIcon}
        </span>
      )}
      <span className="flex-1 text-center min-w-0">{label}</span>
      {!isRemovable && trailingIcon && (
        <span className="flex items-center justify-center shrink-0">{trailingIcon}</span>
      )}
      {isRemovable && !isDisabled && (
        <button
          type="button"
          onClick={handleRemove}
          className="flex items-center justify-center shrink-0 cursor-pointer rounded-full p-0 border-0 bg-transparent"
          style={{
            width: config.iconSize,
            height: config.iconSize,
            color: colors.colorBlack3,
          }}
          tabIndex={-1}
          aria-label={`Remove ${label}`}
        >
          <CloseIcon size={config.iconSize} />
        </button>
      )}
    </div>
  );
}
