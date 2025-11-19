"use client";

import { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export interface CanaryInputPhoneProps extends Omit<BaseFormProps, "size"> {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
  size?: InputSize;
  placeholder?: string;
}

const CanaryInputPhone = forwardRef<HTMLInputElement, CanaryInputPhoneProps>(
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

    useImperativeHandle(ref, () => inputRef.current!);

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
    };

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
          onChange(inputRef.current.value);
        }
      };

      inputRef.current.addEventListener("blur", handleChange);
      inputRef.current.addEventListener("change", handleChange);
      inputRef.current.addEventListener("keyup", handleChange);

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("blur", handleChange);
          inputRef.current.removeEventListener("change", handleChange);
          inputRef.current.removeEventListener("keyup", handleChange);
        }
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, [defaultCountry, onChange]);

    // Update value when prop changes
    useEffect(() => {
      if (inputRef.current && value !== undefined && inputRef.current.value !== value) {
        inputRef.current.value = value;
      }
    }, [value]);

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
            {isRequired && <span className="text-[#E40046] ml-1">*</span>}
          </label>
        )}

        <div className={clsx("canary-phone-input-wrapper", className)}>
          <input
            ref={inputRef}
            type="tel"
            disabled={isDisabled}
            required={isRequired}
            placeholder={placeholder}
            className={clsx(
              "w-full rounded border font-['Roboto',sans-serif]",
              "transition-[border-color,background-color] duration-200",
              sizeClasses[size],
              error
                ? "border-[#E40046] focus:outline focus:outline-2 focus:outline-[#E40046] focus:outline-offset-[-1px]"
                : "border-[#666666] focus:outline focus:outline-2 focus:outline-[#2858c4] focus:outline-offset-[-1px]",
              isDisabled && "bg-[#E5E5E5] cursor-not-allowed"
            )}
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

        <style dangerouslySetInnerHTML={{ __html: `
          .canary-phone-input-wrapper .iti {
            width: 100%;
          }

          .canary-phone-input-wrapper .iti__tel-input {
            width: 100%;
          }

          .canary-phone-input-wrapper .iti__selected-country {
            padding: 0;
          }

          .canary-phone-input-wrapper .iti__country-container {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            padding-left: 8px;
            padding-right: 8px;
          }

          .canary-phone-input-wrapper .iti__tel-input {
            padding-left: 52px !important;
          }

          .canary-phone-input-wrapper .iti__selected-country-primary {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .canary-phone-input-wrapper .iti__flag {
            margin: 0;
          }

          .canary-phone-input-wrapper .iti__arrow {
            margin-left: 4px;
          }
        ` }} />
      </div>
    );
  }
);

CanaryInputPhone.displayName = "CanaryInputPhone";

export default CanaryInputPhone;
