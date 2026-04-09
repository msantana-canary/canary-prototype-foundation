import { colors } from "../design-tokens";
import clsx from "clsx";
import { DividerDirection } from "./types";

export interface CanaryDividerProps {
  direction?: DividerDirection;
  text?: string;
  className?: string;
}

export default function CanaryDivider({
  direction = DividerDirection.HORIZONTAL,
  text,
  className = "",
}: CanaryDividerProps) {
  if (direction === DividerDirection.VERTICAL) {
    return (
      <div
        className={clsx("self-stretch", className)}
        style={{
          borderLeft: `1px solid ${colors.colorBlack6}`,
        }}
      />
    );
  }

  if (text) {
    return (
      <div
        className={clsx("flex items-center w-full", className)}
      >
        <div
          className="flex-1"
          style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
        />
        <span
          className="px-3 text-[12px]"
          style={{ color: colors.colorBlack4 }}
        >
          {text}
        </span>
        <div
          className="flex-1"
          style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx("w-full", className)}
      style={{
        borderTop: `1px solid ${colors.colorBlack6}`,
      }}
    />
  );
}
