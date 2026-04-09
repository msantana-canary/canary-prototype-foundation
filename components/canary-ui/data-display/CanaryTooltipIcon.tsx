import { ReactNode } from "react";
import { colors } from "../design-tokens";
import { TooltipPosition, TooltipIconColor } from "./types";
import CanaryTooltip from "./CanaryTooltip";
import clsx from "clsx";

export interface CanaryTooltipIconProps {
  content: ReactNode;
  position?: TooltipPosition;
  color?: TooltipIconColor;
  size?: number;
  className?: string;
}

const iconColorMap: Record<string, string> = {
  [TooltipIconColor.PRIMARY]: colors.colorBlueDark1,
  [TooltipIconColor.SECONDARY]: colors.colorBlack4,
  [TooltipIconColor.DANGER]: colors.danger,
};

export default function CanaryTooltipIcon({
  content,
  position = TooltipPosition.AUTO,
  color = TooltipIconColor.PRIMARY,
  size = 16,
  className,
}: CanaryTooltipIconProps) {
  const iconColor = iconColorMap[color];

  return (
    <CanaryTooltip content={content} position={position}>
      <span className={clsx("inline-flex items-center justify-center", className)}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="7" stroke={iconColor} strokeWidth="1.5" fill="none" />
          <text
            x="8"
            y="12"
            textAnchor="middle"
            fontSize="10"
            fontWeight="600"
            fontFamily="serif"
            fill={iconColor}
          >
            i
          </text>
        </svg>
      </span>
    </CanaryTooltip>
  );
}
