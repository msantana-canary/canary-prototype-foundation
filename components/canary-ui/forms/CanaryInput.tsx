import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputType, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    BaseFormProps {
  type?: InputType;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

const CanaryInput = forwardRef<HTMLInputElement, CanaryInputProps>(
  (
    {
      label,
      type = InputType.TEXT,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.LARGE,
      leftAddon,
      rightAddon,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.LARGE]: "h-12 text-[18px] px-4",
      [InputSize.NORMAL]: "h-10 text-[16px] px-4",
    };

    const inputClasses = clsx(
      // Base styles
      "w-full rounded transition-all duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none",
      "text-[#2d2d2d]", // black1 color
      // Size
      sizeClasses[size],
      // States
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      // Left addon padding
      leftAddon && "pl-10",
      // Right addon padding
      rightAddon && "pr-10",
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-[14px] font-medium text-[#2d2d2d] mb-2">
            {label}
            {isRequired && <span className="text-[#e40046] ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftAddon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {leftAddon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            disabled={isDisabled}
            readOnly={isReadonly}
            required={isRequired}
            className={inputClasses}
            style={{
              boxShadow: `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`,
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = `inset 0 0 0 2px ${error ? colors.danger : colors.blueDark1}`;
              inputProps.onFocus?.(e);
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = `inset 0 0 0 1px ${error ? colors.danger : colors.black3}`;
              inputProps.onBlur?.(e);
            }}
            {...inputProps}
          />

          {rightAddon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {rightAddon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-[12px] mt-1" style={{ color: colors.danger }}>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-[12px] text-[#707070] mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

CanaryInput.displayName = "CanaryInput";

export default CanaryInput;
