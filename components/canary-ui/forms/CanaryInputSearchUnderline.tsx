"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputSearchUnderlineProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    Omit<BaseFormProps, "size"> {
  size?: InputSize;
}

const CanaryInputSearchUnderline = forwardRef<HTMLInputElement, CanaryInputSearchUnderlineProps>(
  (
    {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      className = "",
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      inputProps.onChange?.(e);
    };

    // Determine if label should be shown above input
    const showLabelAbove = isFocused || hasValue;

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
    };

    return (
      <div className={clsx("w-full", className)}>
        {/* Input Field with floating label */}
        <div className="relative pt-4">
          {/* Floating Label */}
          {label && (
            <label
              className={clsx(
                "absolute left-8 font-['Roboto',sans-serif] font-normal pointer-events-none",
                "transition-all duration-200 ease-out",
                "text-black",
                // Position and scale based on focus/filled state
                showLabelAbove
                  ? "top-0 left-0 text-[12px] leading-[1.5]"
                  : clsx(
                      "opacity-50",
                      size === InputSize.TABLET && "top-[28px] text-[24px]",
                      size === InputSize.LARGE && "top-[22px] text-[18px]",
                      size === InputSize.NORMAL && "top-[18px] text-[14px]",
                      size === InputSize.COMPACT && "top-[14px] text-[14px]"
                    )
              )}
            >
              {label}
              {isRequired && <span className="text-[#E40046] ml-1">*</span>}
            </label>
          )}

          {/* Input Field with bottom border and search icon */}
          <div className="relative flex items-center">
            {/* Search Icon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="#000000"
                />
              </svg>
            </div>

            <input
              ref={ref}
              type="search"
              disabled={isDisabled}
              required={isRequired}
              value={value}
              defaultValue={defaultValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...inputProps}
              placeholder={showLabelAbove ? inputProps.placeholder : ""}
              className={clsx(
                "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
                "border-0 border-b border-solid",
                "transition-[border-color,background-color,padding] duration-200",
                "outline-none bg-transparent",
                "pl-8", // Space for search icon
                sizeClasses[size],
                // Padding - 8px horizontal when focused or error (plus icon space)
                (isFocused || error) ? "pr-2 py-2" : "pr-0 py-0",
                // Border styles
                isDisabled
                  ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed"
                  : error
                  ? isFocused
                    ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]"
                    : "border-b-2 border-[#E40046] bg-white"
                  : isFocused
                  ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]"
                  : "border-b border-black bg-white",
                isDisabled && "opacity-50"
              )}
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block">
            <p className="text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal">
              {error}
            </p>
          </div>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputSearchUnderline.displayName = "CanaryInputSearchUnderline";

export default CanaryInputSearchUnderline;
