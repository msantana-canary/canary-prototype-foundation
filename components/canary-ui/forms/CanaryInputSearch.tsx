import { forwardRef, InputHTMLAttributes } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputSearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    BaseFormProps {}

const CanaryInputSearch = forwardRef<HTMLInputElement, CanaryInputSearchProps>(
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
    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] pl-[48px] pr-4 py-3",
      [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] pl-[40px] pr-2 py-3",
      [InputSize.NORMAL]: "h-[40px] text-[14px] leading-[1.5] pl-[40px] pr-2",
      [InputSize.COMPACT]: "h-[32px] text-[14px] leading-[1.5] pl-[36px] pr-2",
    };

    const inputClasses = clsx(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
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
          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
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
            readOnly={isReadonly}
            required={isRequired}
            className={inputClasses}
            {...inputProps}
          />
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

CanaryInputSearch.displayName = "CanaryInputSearch";

export default CanaryInputSearch;
