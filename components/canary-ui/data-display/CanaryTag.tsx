import { ReactNode } from "react";
import { colors } from "../design-tokens";
import { TagColor, TagVariant, TagSize, CustomTagColor } from "./types";
import clsx from "clsx";

export interface CanaryTagProps {
  label: string;
  color?: TagColor;
  variant?: TagVariant;
  size?: TagSize;
  customColor?: CustomTagColor;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export default function CanaryTag({
  label,
  color = TagColor.SUCCESS,
  variant = TagVariant.OUTLINE,
  size = TagSize.MEDIUM,
  customColor,
  leadingIcon,
  trailingIcon,
  uppercase = true,
  className = "",
}: CanaryTagProps) {
  // Get color values based on variant and color
  const getColors = (): {
    backgroundColor: string;
    borderColor?: string;
    textColor: string;
  } => {
    if (customColor?.backgroundColor) {
      return {
        backgroundColor: customColor.backgroundColor,
        borderColor: customColor.borderColor,
        textColor: customColor.fontColor || colors.black1,
      };
    }

    if (variant === TagVariant.FILLED) {
      // Filled variant: solid background, white text, no border
      switch (color) {
        case TagColor.SUCCESS:
          return {
            backgroundColor: colors.success, // #008040
            textColor: colors.white,
          };
        case TagColor.WARNING:
          return {
            backgroundColor: colors.warning, // #FAB541
            textColor: colors.white,
          };
        case TagColor.INFO:
          return {
            backgroundColor: colors.blueDark1, // #2858C4
            textColor: colors.white,
          };
        case TagColor.DEFAULT:
          return {
            backgroundColor: colors.black6, // #E5E5E5
            textColor: colors.black1, // #000000
          };
        case TagColor.ERROR:
          return {
            backgroundColor: colors.error, // #E40046
            textColor: colors.white,
          };
        default:
          return {
            backgroundColor: colors.success,
            textColor: colors.white,
          };
      }
    } else {
      // Outline variant: light background, colored border and text
      switch (color) {
        case TagColor.SUCCESS:
          return {
            backgroundColor: colors.lightGreen5, // #CCE6D9
            borderColor: colors.success, // #008040
            textColor: colors.success, // #008040
          };
        case TagColor.WARNING:
          return {
            backgroundColor: colors.wheat5, // #FFF8EC
            borderColor: colors.wheat3, // #FCDAA0
            textColor: colors.warning, // #FAB541
          };
        case TagColor.INFO:
          return {
            backgroundColor: colors.blueDark5, // #EAEEF9
            borderColor: colors.blueDark3, // #93ABE1
            textColor: colors.blueDark1, // #2858C4
          };
        case TagColor.DEFAULT:
          return {
            backgroundColor: colors.black6, // #E5E5E5
            borderColor: colors.black4, // #999999
            textColor: colors.black1, // #000000
          };
        case TagColor.ERROR:
          return {
            backgroundColor: colors.red5, // #FCE6ED
            borderColor: colors.red3, // #F59FBA
            textColor: colors.error, // #E40046
          };
        default:
          return {
            backgroundColor: colors.lightGreen5,
            borderColor: colors.success,
            textColor: colors.success,
          };
      }
    }
  };

  const { backgroundColor, borderColor, textColor } = getColors();
  const iconColor = customColor?.iconColor ?? textColor;

  // Size-specific styles
  const sizeClasses =
    size === TagSize.COMPACT
      ? "text-[10px] leading-[16px] px-[4px] py-[2px]"
      : "text-[12px] leading-[18px] px-[4px] py-[2px]";

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center gap-1",
        "rounded-[2px]",
        "font-medium",
        "w-max",
        uppercase && "uppercase",
        variant === TagVariant.OUTLINE && "border border-solid",
        sizeClasses,
        className
      )}
      style={{
        backgroundColor,
        borderColor: variant === TagVariant.OUTLINE ? borderColor : undefined,
        color: textColor,
      }}
    >
      {leadingIcon && (
        <div className="w-3 h-3 flex items-center justify-center" style={{ color: iconColor }}>
          {leadingIcon}
        </div>
      )}
      <span>{label}</span>
      {trailingIcon && (
        <div className="w-3 h-3 flex items-center justify-center" style={{ color: iconColor }}>
          {trailingIcon}
        </div>
      )}
    </div>
  );
}
