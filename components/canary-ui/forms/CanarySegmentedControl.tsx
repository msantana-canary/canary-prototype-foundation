import { colors } from "../design-tokens";
import clsx from "clsx";

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface CanarySegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function CanarySegmentedControl({
  options,
  value,
  onChange,
  className = "",
}: CanarySegmentedControlProps) {
  return (
    <div
      className={clsx(
        "inline-flex rounded-full p-1",
        "font-['Roboto',sans-serif]",
        className
      )}
      style={{
        backgroundColor: colors.black7,
      }}
    >
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={clsx(
              "px-4 py-2 text-[14px] font-medium rounded-full transition-all duration-200",
              isSelected
                ? ""
                : "hover:opacity-70"
            )}
            style={{
              backgroundColor: isSelected ? colors.blueDark1 : "transparent",
              color: isSelected ? colors.white : colors.black3,
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
