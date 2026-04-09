import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryCounterProps {
  value: number;
  onChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  isDisabled?: boolean;
  className?: string;
}

export default function CanaryCounter({
  value,
  onChange,
  minValue = 0,
  maxValue = 99,
  isDisabled = false,
  className,
}: CanaryCounterProps) {
  const isMinDisabled = isDisabled || value <= minValue;
  const isMaxDisabled = isDisabled || value >= maxValue;

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2",
        isDisabled && "opacity-50",
        className
      )}
    >
      {/* Minus button */}
      <button
        type="button"
        disabled={isMinDisabled}
        onClick={() => onChange(Math.max(minValue, value - 1))}
        className={clsx(
          "flex items-center justify-center rounded-full",
          isMinDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-50"
        )}
        style={{
          width: 32,
          height: 32,
          border: `1px solid ${colors.colorBlack6}`,
          backgroundColor: colors.colorWhite,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8H12" stroke={colors.colorBlack2} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Number display */}
      <span
        className="text-center text-sm font-medium"
        style={{ minWidth: 40, color: colors.colorBlack2 }}
      >
        {value}
      </span>

      {/* Plus button */}
      <button
        type="button"
        disabled={isMaxDisabled}
        onClick={() => onChange(Math.min(maxValue, value + 1))}
        className={clsx(
          "flex items-center justify-center rounded-full",
          isMaxDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-50"
        )}
        style={{
          width: 32,
          height: 32,
          border: `1px solid ${colors.colorBlack6}`,
          backgroundColor: colors.colorWhite,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4V12M4 8H12" stroke={colors.colorBlack2} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
