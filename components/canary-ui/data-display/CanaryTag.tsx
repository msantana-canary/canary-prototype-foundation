import { ReactNode } from "react";
import { colors } from "../design-tokens";
import { TagColor, TagSize, CustomTagColor } from "./types";
import clsx from "clsx";

export interface CanaryTagProps {
  label: string;
  color?: TagColor;
  size?: TagSize;
  customColor?: CustomTagColor;
  icon?: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export default function CanaryTag({
  label,
  color = TagColor.SUCCESS,
  size = TagSize.MEDIUM,
  customColor,
  icon,
  uppercase = true,
  className = "",
}: CanaryTagProps) {
  // Get background color based on tag color
  const getBackgroundColor = (): string => {
    if (customColor?.backgroundColor) return customColor.backgroundColor;

    switch (color) {
      case TagColor.PRIMARY:
        return colors.blueCanary5; // #e8f4ff
      case TagColor.SUCCESS:
        return colors.lightGreen5; // #cce6d9
      case TagColor.WARNING:
        return colors.wheat5; // #fff8ec
      case TagColor.DANGER:
        return colors.pink5; // #fef0f3
      case TagColor.GRAY:
        return colors.black7; // #f0f0f0
      case TagColor.BLACK:
        return colors.black1; // #000000
      default:
        return colors.lightGreen5;
    }
  };

  // Get font color based on tag color
  const getFontColor = (): string => {
    if (customColor?.fontColor) return customColor.fontColor;

    switch (color) {
      case TagColor.PRIMARY:
        return colors.blueCanary1; // #1c91fa
      case TagColor.SUCCESS:
        return colors.success; // #008040
      case TagColor.WARNING:
        return colors.warning; // #fab541
      case TagColor.DANGER:
        return colors.danger; // #e40046
      case TagColor.GRAY:
        return colors.black4; // #999999
      case TagColor.BLACK:
        return colors.black4; // #999999
      default:
        return colors.success;
    }
  };

  const backgroundColor = getBackgroundColor();
  const fontColor = getFontColor();
  const iconColor = customColor?.iconColor ?? fontColor;

  // Size-specific styles
  const sizeClasses = size === TagSize.SMALL
    ? "text-[10px] px-1 h-[18px]"
    : "text-[12px] px-2 py-[3px]";

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center gap-1.5",
        "rounded-[2px]",
        "font-bold",
        "leading-[18px]",
        "w-max",
        uppercase && "uppercase",
        sizeClasses,
        className
      )}
      style={{
        backgroundColor,
        color: fontColor,
      }}
    >
      {icon && <div style={{ color: iconColor }}>{icon}</div>}
      <span>{label}</span>
    </div>
  );
}
