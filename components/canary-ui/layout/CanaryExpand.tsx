import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryExpandProps {
  isExpanded: boolean;
  onToggle: () => void;
  header: ReactNode;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

export default function CanaryExpand({
  isExpanded,
  onToggle,
  header,
  children,
  isDisabled = false,
  className,
}: CanaryExpandProps) {
  return (
    <div
      className={clsx(
        isDisabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <div
        className="flex items-center justify-between cursor-pointer py-3 px-2"
        style={{ borderBottom: `1px solid ${colors.colorBlack6}` }}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className="flex-1">{header}</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease-in-out",
            flexShrink: 0,
          }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke={colors.colorBlack3}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isExpanded && <div className="py-3 px-2">{children}</div>}
    </div>
  );
}
