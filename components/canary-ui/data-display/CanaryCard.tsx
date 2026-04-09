import { ReactNode } from "react";
import { colors, shadows } from "../design-tokens";
import { CardPadding, CardBoxShadow, CardInnerSpacing } from "./types";
import clsx from "clsx";

export interface CanaryCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  headerActions?: ReactNode;
  footer?: ReactNode;
  padding?: "none" | "small" | "medium" | "large";
  cardPadding?: CardPadding;
  boxShadow?: CardBoxShadow;
  innerSpacing?: CardInnerSpacing;
  hasShadow?: boolean;
  hasBorder?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CanaryCard({
  children,
  title,
  subtitle,
  headerActions,
  footer,
  padding = "medium",
  cardPadding,
  boxShadow,
  innerSpacing,
  hasShadow = false,
  hasBorder = true,
  className = "",
  onClick,
}: CanaryCardProps) {
  // CardPadding enum overrides legacy string padding
  const paddingClasses = {
    none: "",
    small: "p-3",
    medium: "p-6",
    large: "p-8",
  };

  const cardPaddingClasses: Record<CardPadding, string> = {
    [CardPadding.DEFAULT]: "p-6",
    [CardPadding.COMPACT]: "p-3",
    [CardPadding.NONE]: "",
  };

  const resolvedPaddingClass = cardPadding
    ? cardPaddingClasses[cardPadding]
    : paddingClasses[padding];

  // CardBoxShadow enum overrides legacy hasShadow boolean
  const boxShadowValues: Record<CardBoxShadow, string | undefined> = {
    [CardBoxShadow.SMALL]: shadows.sm,
    [CardBoxShadow.MEDIUM]: shadows.default,
    [CardBoxShadow.LARGE]: shadows.xl,
    [CardBoxShadow.NONE]: undefined,
  };

  const resolvedShadow = boxShadow
    ? boxShadowValues[boxShadow]
    : hasShadow ? shadows.xl : undefined;

  // CardInnerSpacing controls gap between header/body/footer
  const innerSpacingClasses: Record<CardInnerSpacing, string> = {
    [CardInnerSpacing.NONE]: "gap-0",
    [CardInnerSpacing.TINY]: "gap-1",
    [CardInnerSpacing.SMALL]: "gap-2",
    [CardInnerSpacing.DEFAULT]: "gap-0",
  };

  return (
    <div
      className={clsx(
        "rounded-lg bg-white",
        hasBorder && "border",
        innerSpacing && innerSpacingClasses[innerSpacing],
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
      style={{
        borderColor: hasBorder ? colors.colorBlack6 : undefined,
        boxShadow: resolvedShadow,
      }}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className={clsx("border-b flex items-start justify-between", resolvedPaddingClass)} style={{ borderColor: colors.colorBlack6 }}>
          <div>
            {title && (
              <h3 className="text-[18px] font-semibold" style={{ color: colors.colorBlack1 }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-[14px] mt-1" style={{ color: colors.colorBlack3 }}>
                {subtitle}
              </p>
            )}
          </div>
          {headerActions && <div className="flex items-center gap-2 shrink-0">{headerActions}</div>}
        </div>
      )}

      <div className={resolvedPaddingClass}>{children}</div>

      {footer && (
        <div
          className={clsx("border-t", resolvedPaddingClass)}
          style={{ borderColor: colors.colorBlack6 }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
