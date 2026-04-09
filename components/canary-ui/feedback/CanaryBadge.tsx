import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import { BadgeType, BadgeSize } from "./types";

export interface CanaryBadgeProps {
  type?: BadgeType;
  size?: BadgeSize;
  label?: string;
  children?: ReactNode;
  className?: string;
}

export default function CanaryBadge({
  type = BadgeType.INFO,
  size = BadgeSize.NORMAL,
  label,
  children,
  className = "",
}: CanaryBadgeProps) {
  const typeColors = {
    [BadgeType.URGENT]: {
      bg: colors.colorPink5,
      text: colors.danger,
    },
    [BadgeType.INFO]: {
      bg: colors.colorBlueDark5,
      text: colors.colorBlueDark1,
    },
    [BadgeType.WARNING]: {
      bg: colors.colorWheat5,
      text: colors.warning,
    },
  };

  const sizeStyles = {
    [BadgeSize.NORMAL]: {
      height: "20px",
      fontSize: "10px",
    },
    [BadgeSize.LARGE]: {
      height: "24px",
      fontSize: "12px",
    },
  };

  const colorScheme = typeColors[type];
  const sizeScheme = sizeStyles[size];

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-2 font-medium",
        className
      )}
      style={{
        backgroundColor: colorScheme.bg,
        color: colorScheme.text,
        height: sizeScheme.height,
        fontSize: sizeScheme.fontSize,
        lineHeight: sizeScheme.height,
      }}
    >
      {label || children}
    </span>
  );
}
