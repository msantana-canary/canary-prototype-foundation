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
      [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] px-4 py-3",
      [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] px-2 py-3",
      [InputSize.NORMAL]: "h-[40px] text-[14px] leading-[1.5] px-2",
      [InputSize.COMPACT]: "h-[32px] text-[14px] leading-[1.5] px-2",
    };

    const inputClasses = clsx(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Position and z-index to ensure placeholder is visible
      "relative z-10",
      // Transitions - matches original Canary (border-color 200ms, background-color 200ms)
      "transition-[border-color,background-color] duration-200",
      // Placeholder styling
      "placeholder:text-gray-500 placeholder:opacity-100",
      // Size
      sizeClasses[size],
      // Border and focus states
      "focus:outline focus:outline-2 focus:outline-offset-[-1px]",
      isDisabled && "cursor-not-allowed",
      isReadonly && "cursor-default",
      // Left addon padding
      leftAddon && "pl-10",
      // Right addon padding
      rightAddon && "pr-10",
      className
    );

    const inputStyles = {
      borderColor: error ? colors.error : (isDisabled ? colors.black1 : colors.black3),
      backgroundColor: isDisabled ? colors.black6 : (isReadonly ? colors.black8 : 'white'),
      color: colors.black1, // Ensure text is visible
      ...(!error && {
        '--tw-ring-color': colors.blueDark1,
      }),
      ...(error && {
        '--tw-ring-color': colors.error,
      }),
    } as React.CSSProperties;

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
            {isRequired && <span className="ml-1" style={{ color: colors.error }}>*</span>}
          </label>
        )}

        <div className="relative">
          {leftAddon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20">
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
            style={inputStyles}
            {...inputProps}
          />

          {error && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill={colors.error}
                />
              </svg>
            </div>
          )}

          {rightAddon && !error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-20">
              {rightAddon}
            </div>
          )}
        </div>

        {error && (
          <div className="mt-1 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.red5 }}>
            <p className="text-[12px] leading-[1.5]" style={{ color: colors.error }}>
              {error}
            </p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] mt-1 leading-[1.5]" style={{ color: colors.black3 }}>{helperText}</p>
        )}
      </div>
    );
  }
);

CanaryInput.displayName = "CanaryInput";

export default CanaryInput;
