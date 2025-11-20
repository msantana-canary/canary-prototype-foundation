"use client";

import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Icon from "@mdi/react";
import { mdiAlertCircleOutline } from "@mdi/js";

export interface CanaryInputPhoneUnderlineProps extends Omit<BaseFormProps, "size"> {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
  size?: InputSize;
  placeholder?: string;
}

const CanaryInputPhoneUnderline = forwardRef<HTMLInputElement, CanaryInputPhoneUnderlineProps>(
  (
    {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      value,
      onChange,
      defaultCountry = "us",
      placeholder = "",
      className = "",
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<any>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!value);

    useImperativeHandle(ref, () => inputRef.current!);

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
    };

    // Determine if label should be shown above input
    const showLabelAbove = isFocused || hasValue;

    useEffect(() => {
      if (!inputRef.current || itiRef.current) return;

      // Initialize intl-tel-input
      itiRef.current = intlTelInput(inputRef.current, {
        initialCountry: defaultCountry,
        separateDialCode: false,
        autoPlaceholder: "polite",
        formatOnDisplay: true,
        nationalMode: false,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/js/utils.js",
      });

      // Handle changes
      const handleChange = () => {
        if (onChange && inputRef.current) {
          const val = inputRef.current.value;
          setHasValue(!!val);
          onChange(val);
        }
      };

      const handleFocus = () => {
        setIsFocused(true);
      };

      const handleBlur = () => {
        setIsFocused(false);
        if (inputRef.current) {
          setHasValue(!!inputRef.current.value);
        }
      };

      inputRef.current.addEventListener("focus", handleFocus);
      inputRef.current.addEventListener("blur", handleBlur);
      inputRef.current.addEventListener("change", handleChange);
      inputRef.current.addEventListener("keyup", handleChange);

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("focus", handleFocus);
          inputRef.current.removeEventListener("blur", handleBlur);
          inputRef.current.removeEventListener("change", handleChange);
          inputRef.current.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
        }
      };
    }, [defaultCountry, onChange]);

    // Update value when prop changes
    useEffect(() => {
      if (inputRef.current && value !== undefined && inputRef.current.value !== value) {
        inputRef.current.value = value;
        setHasValue(!!value);
      }
    }, [value]);

    return (
      <div className={clsx("w-full flex flex-col gap-1", className)}>
        {/* Label - shown above when focused or filled */}
        {label && showLabelAbove && (
          <label
            className={clsx(
              "block text-black font-['Roboto',sans-serif] font-normal",
              size === InputSize.TABLET && "text-[20px] leading-[150%]",
              size === InputSize.LARGE && "text-[14px] leading-[21px]",
              (size === InputSize.NORMAL || size === InputSize.COMPACT) &&
                "text-[12px] leading-[1.5]"
            )}
          >
            {label}
            {isRequired && <span className="text-[#E40046] ml-1">*</span>}
          </label>
        )}

        <div className={clsx("canary-phone-input-underline-wrapper relative")}>
          <input
            ref={inputRef}
            type="tel"
            disabled={isDisabled}
            required={isRequired}
            placeholder={showLabelAbove ? placeholder : (label as string) || placeholder}
            className={clsx(
              "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
              "border-0 border-b border-solid",
              "transition-[border-color,background-color,padding] duration-200",
              "outline-none",
              sizeClasses[size],
              // Border and background styles
              isDisabled
                ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed"
                : error
                ? isFocused
                  ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]"
                  : "border-b-2 border-[#E40046] bg-white"
                : isFocused
                ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]"
                : "border-b border-black bg-white",
              // Text opacity
              !showLabelAbove && "canary-opacity-50",
              isDisabled && "canary-opacity-50",
              // Padding for error icon
              error && "pr-10"
            )}
          />
          {/* Error icon */}
          {error && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
              <Icon path={mdiAlertCircleOutline} size="24px" color="#E40046" />
            </div>
          )}
        </div>

        {error && (
          <div className="bg-[#fce6ed] px-2 py-[2px] rounded inline-block">
            <p className="text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal">
              {error}
            </p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] text-[#666666] leading-[1.5] font-['Roboto',sans-serif] font-normal">
            {helperText}
          </p>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .canary-phone-input-underline-wrapper .iti {
            width: 100%;
          }

          .canary-phone-input-underline-wrapper .iti__tel-input {
            width: 100%;
          }

          .canary-phone-input-underline-wrapper .iti__selected-country {
            padding: 0;
          }

          .canary-phone-input-underline-wrapper .iti__country-container {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            padding-left: 0;
            padding-right: 8px;
          }

          .canary-phone-input-underline-wrapper .iti__tel-input {
            padding-left: 52px !important;
          }

          .canary-phone-input-underline-wrapper .iti__selected-country-primary {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .canary-phone-input-underline-wrapper .iti__flag {
            margin: 0;
          }

          .canary-phone-input-underline-wrapper .iti__arrow {
            margin-left: 4px;
          }
        ` }} />
      </div>
    );
  }
);

CanaryInputPhoneUnderline.displayName = "CanaryInputPhoneUnderline";

export default CanaryInputPhoneUnderline;
