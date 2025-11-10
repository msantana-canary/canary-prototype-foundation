"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";

export interface CanaryInputUnderlineProps
  extends Omit<BaseFormProps, "size">,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
}

const CanaryInputUnderline = forwardRef<
  HTMLInputElement,
  CanaryInputUnderlineProps
>(
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
    const [hasValue, setHasValue] = useState(
      !!(value || defaultValue)
    );

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
                "absolute left-0 font-['Roboto',sans-serif] font-normal pointer-events-none",
                "transition-all duration-200 ease-out",
                "text-black",
                // Position and scale based on focus/filled state
                showLabelAbove
                  ? "top-0 text-[12px] leading-[1.5]"
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

          {/* Input Field with bottom border */}
          <div className="relative flex items-center">
            <input
              ref={ref}
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
                sizeClasses[size],
                // Padding - 8px horizontal when focused or error
                (isFocused || error) ? "px-2 py-2" : "px-0 py-0",
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
                isDisabled && "opacity-50",
                // Add padding-right for error icon
                error && "pr-10"
              )}
            />
            {/* Error icon */}
            {error && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <Icon path={mdiAlertCircleOutline} size="24px" color="#E40046" />
              </div>
            )}
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-[#fce6ed] px-2 py-[2px] rounded inline-block">
            <p className="text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal">
              {error}
            </p>
          </div>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputUnderline.displayName = "CanaryInputUnderline";

export default CanaryInputUnderline;
