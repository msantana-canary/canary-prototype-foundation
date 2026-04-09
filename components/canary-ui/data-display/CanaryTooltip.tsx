import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import { TooltipPosition } from "./types";
import clsx from "clsx";

export interface CanaryTooltipProps {
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
  className?: string;
}

const positionClasses: Record<string, string> = {
  [TooltipPosition.TOP]: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  [TooltipPosition.BOTTOM]: "top-full mt-2 left-1/2 -translate-x-1/2",
  [TooltipPosition.LEFT]: "right-full mr-2 top-1/2 -translate-y-1/2",
  [TooltipPosition.RIGHT]: "left-full ml-2 top-1/2 -translate-y-1/2",
  [TooltipPosition.AUTO]: "bottom-full mb-2 left-1/2 -translate-x-1/2",
};

export default function CanaryTooltip({
  content,
  position = TooltipPosition.AUTO,
  children,
  className,
}: CanaryTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={clsx("relative inline-flex", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={clsx(
          "absolute z-50 px-2 py-1 rounded shadow whitespace-nowrap pointer-events-none",
          positionClasses[position]
        )}
        style={{
          backgroundColor: colors.colorBlack1,
          color: colors.colorWhite,
          fontSize: "12px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 150ms ease-in-out",
        }}
      >
        {content}
      </div>
    </div>
  );
}
