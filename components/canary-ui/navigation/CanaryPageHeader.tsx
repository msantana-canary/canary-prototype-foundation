import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryPageHeaderProps {
  /** Page title displayed on the left */
  title: string;
  /** Action buttons/content displayed on the right */
  actions?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export default function CanaryPageHeader({
  title,
  actions,
  className,
}: CanaryPageHeaderProps) {
  return (
    <div
      className={clsx(
        "w-full bg-white border-b flex items-center justify-between shrink-0",
        className
      )}
      style={{
        borderColor: colors.colorBlack6,
        padding: "16px 24px",
      }}
    >
      <div className="flex items-center" style={{ gap: "16px" }}>
        <h2
          className="font-medium whitespace-nowrap"
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            color: colors.colorBlack1,
          }}
        >
          {title}
        </h2>
      </div>

      {actions && (
        <div className="flex items-center" style={{ gap: "8px" }}>
          {actions}
        </div>
      )}
    </div>
  );
}
