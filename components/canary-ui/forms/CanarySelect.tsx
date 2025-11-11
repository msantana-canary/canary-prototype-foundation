import { forwardRef, SelectHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanarySelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface CanarySelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    BaseFormProps {
  options: CanarySelectOption[];
  placeholder?: string;
}

const CanarySelect = forwardRef<HTMLSelectElement, CanarySelectProps>(
  (
    {
      label,
      options,
      placeholder,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.LARGE,
      className = "",
      ...selectProps
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      [InputSize.NORMAL]: "h-[40px] text-[14px] leading-[1.5] px-2",
      [InputSize.COMPACT]: "h-[32px] text-[14px] leading-[1.5] px-2",
    };

    const selectClasses = clsx(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary (border-color 200ms, background-color 200ms)
      "transition-[border-color,background-color] duration-200",
      "outline-none appearance-none bg-white",
      "pr-10", // Space for dropdown arrow
      // Size
      sizeClasses[size],
      // Border and focus states
      error
        ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]"
        : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label
            className={clsx(
              "block text-black",
              size === InputSize.TABLET && "text-[20px] leading-[150%] mb-2",
              size === InputSize.LARGE && "text-[14px] leading-[21px] mb-1",
              (size === InputSize.NORMAL || size === InputSize.COMPACT) && "text-[12px] leading-[18px] mb-1"
            )}
          >
            {label}
            {isRequired && <span className="text-[#e40046] ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            disabled={isDisabled || isReadonly}
            required={isRequired}
            className={selectClasses}
            {...selectProps}
          >
            {(placeholder || label) && (
              <option value="" disabled>
                {placeholder || label}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown arrow - unfold_more icon from Figma */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83ZM12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                fill="#000000"
              />
            </svg>
          </div>
        </div>

        {error && (
          <div className="mt-1 inline-block bg-[#fce6ed] px-2 py-[2px] rounded">
            <p className="text-[12px] text-[#E40046] leading-[1.5]">
              {error}
            </p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] text-[#666666] mt-1 leading-[1.5]">{helperText}</p>
        )}
      </div>
    );
  }
);

CanarySelect.displayName = "CanarySelect";

export default CanarySelect;
