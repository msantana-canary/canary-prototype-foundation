"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    BaseFormProps {}

const CanaryInputPassword = forwardRef<HTMLInputElement, CanaryInputPasswordProps>(
  (
    {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      [InputSize.NORMAL]: "h-[40px] text-[14px] leading-[1.5] px-2",
      [InputSize.COMPACT]: "h-[32px] text-[14px] leading-[1.5] px-2",
    };

    const inputClasses = clsx(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif] pr-10",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
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
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            disabled={isDisabled}
            readOnly={isReadonly}
            required={isRequired}
            className={inputClasses}
            {...inputProps}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center cursor-pointer"
            disabled={isDisabled || isReadonly}
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                  fill="#000000"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
                  fill="#000000"
                />
              </svg>
            )}
          </button>
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

CanaryInputPassword.displayName = "CanaryInputPassword";

export default CanaryInputPassword;
