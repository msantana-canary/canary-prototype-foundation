import { forwardRef, TextareaHTMLAttributes } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    BaseFormProps {
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const CanaryTextArea = forwardRef<HTMLTextAreaElement, CanaryTextAreaProps>(
  (
    {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      resize = "both",
      className = "",
      rows = 4,
      ...textareaProps
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.TABLET]: "text-[24px] leading-[1.5] px-4 py-3",
      [InputSize.LARGE]: "text-[18px] leading-[1.5] px-3 py-3",
      [InputSize.NORMAL]: "text-[14px] leading-[1.5] px-3 py-3",
      [InputSize.COMPACT]: "text-[14px] leading-[1.5] px-2 py-2",
    };

    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    const textareaClasses = clsx(
      // Base styles
      "w-full rounded border font-['Roboto',sans-serif]",
      // Transitions - matches original Canary
      "transition-[border-color,background-color] duration-200",
      "outline-none min-h-[80px]",
      // Size
      sizeClasses[size],
      // Resize
      resizeClasses[resize],
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

        <textarea
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadonly}
          required={isRequired}
          rows={rows}
          className={textareaClasses}
          {...textareaProps}
        />

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

CanaryTextArea.displayName = "CanaryTextArea";

export default CanaryTextArea;
