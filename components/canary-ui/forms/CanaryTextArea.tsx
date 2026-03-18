import { forwardRef, TextareaHTMLAttributes, useRef, useEffect, useCallback } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    BaseFormProps {
  resize?: "none" | "vertical" | "horizontal" | "both";
  autoExpand?: boolean;
}

// Min heights matching CanaryInput sizes (for autoExpand)
const AUTO_EXPAND_MIN_HEIGHT: Record<InputSize, number> = {
  [InputSize.TABLET]: 64,
  [InputSize.LARGE]: 48,
  [InputSize.NORMAL]: 40,
  [InputSize.COMPACT]: 32,
};

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
      autoExpand = false,
      className = "",
      rows = 4,
      onChange,
      value,
      defaultValue,
      ...textareaProps
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
        }
      },
      [ref]
    );

    const adjustHeight = useCallback(() => {
      const textarea = internalRef.current;
      if (!textarea || !autoExpand) return;

      const minHeight = AUTO_EXPAND_MIN_HEIGHT[size];
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
    }, [autoExpand, size]);

    // Adjust on mount (for pre-filled content) and when value changes
    useEffect(() => {
      adjustHeight();
    }, [adjustHeight, value, defaultValue]);

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
      "outline-none",
      autoExpand ? "resize-none overflow-hidden" : resizeClasses[resize],
      !autoExpand && "min-h-[80px]",
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

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      adjustHeight();
    };

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
          ref={setRefs}
          disabled={isDisabled}
          readOnly={isReadonly}
          required={isRequired}
          rows={autoExpand ? 1 : rows}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          className={textareaClasses}
          style={autoExpand ? { minHeight: AUTO_EXPAND_MIN_HEIGHT[size] } : undefined}
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
