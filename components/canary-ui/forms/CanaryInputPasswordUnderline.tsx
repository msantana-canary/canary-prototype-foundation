"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputPasswordUnderlineProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    Omit<BaseFormProps, "size"> {
  size?: InputSize;
}

const CanaryInputPasswordUnderline = forwardRef<HTMLInputElement, CanaryInputPasswordUnderlineProps>(
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
    const [showPassword, setShowPassword] = useState(false);
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
        {/* Label - shown when focused or filled */}
        {label && showLabelAbove && (
          <label
            className={clsx(
              "block text-black font-['Roboto',sans-serif] font-normal mb-1",
              "transition-all duration-200 ease-out",
              size === InputSize.TABLET && "text-[20px] leading-[150%]",
              size === InputSize.LARGE && "text-[14px] leading-[21px]",
              (size === InputSize.NORMAL || size === InputSize.COMPACT) && "text-[12px] leading-[1.5]"
            )}
          >
            {label}
            {isRequired && <span className="text-[#E40046] ml-1">*</span>}
          </label>
        )}

        {/* Input Field with bottom border */}
        <div className="relative">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type={showPassword ? "text" : "password"}
              disabled={isDisabled}
              required={isRequired}
              value={value}
              defaultValue={defaultValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...inputProps}
              placeholder={!showLabelAbove ? (label as string) : ""}
              className={clsx(
                "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
                "border-0 border-b border-solid",
                "transition-[border-color,background-color,padding] duration-200",
                "outline-none",
                "pr-10", // Space for show/hide button
                sizeClasses[size],
                // Padding - 8px horizontal when focused
                isFocused ? "px-2 py-2" : "px-0 py-0",
                // Border styles
                isDisabled
                  ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed"
                  : error
                  ? isFocused
                    ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]"
                    : "border-b-2 border-[#E40046] bg-white"
                  : isFocused
                  ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)] px-2"
                  : "border-b border-black bg-white",
                isDisabled && "canary-opacity-50"
              )}
            />

            {/* Show/Hide Password Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer"
              disabled={isDisabled}
              tabIndex={-1}
            >
              {showPassword ? (
                // Password is visible, show eye-off outline icon (visibility_off)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M2 5.27 3.28 4 20 20.72 18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3 3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12 9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                  />
                </svg>
              ) : (
                // Password is hidden, show eye outline icon (visibility)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M12 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.82 9.82 0 0 0 17.64 0 9.82 9.82 0 0 0-17.64 0"
                  />
                </svg>
              )}
            </button>
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

CanaryInputPasswordUnderline.displayName = "CanaryInputPasswordUnderline";

export default CanaryInputPasswordUnderline;
