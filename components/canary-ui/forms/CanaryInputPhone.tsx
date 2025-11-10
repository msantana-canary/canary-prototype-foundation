"use client";

import { forwardRef } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import PhoneInput, { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export interface CanaryInputPhoneProps extends Omit<BaseFormProps, "size"> {
  value?: string;
  onChange?: (value: string | undefined) => void;
  defaultCountry?: Country;
  size?: InputSize;
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
      defaultCountry = "US",
      className = "",
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
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

        <div className={clsx("canary-phone-input-wrapper", className)}>
          <PhoneInput
            ref={ref as any}
            value={value}
            onChange={onChange}
            defaultCountry={defaultCountry}
            disabled={isDisabled}
            className={clsx(
              "w-full rounded border font-['Roboto',sans-serif]",
              "transition-[border-color,background-color] duration-200",
              sizeClasses[size],
              error
                ? "border-[#E40046] focus-within:outline focus-within:outline-2 focus-within:outline-[#E40046] focus-within:outline-offset-[-1px]"
                : "border-[#666666] focus-within:outline focus-within:outline-2 focus-within:outline-[#2858c4] focus-within:outline-offset-[-1px]",
              isDisabled && "bg-[#E5E5E5] cursor-not-allowed"
            )}
            numberInputProps={{
              className: clsx(
                "flex-1 border-0 outline-none bg-transparent",
                "text-[14px] leading-[1.5] px-2",
                "text-[#666666]"
              ),
            }}
            countrySelectProps={{
              className: "border-r border-[#E0E0E0] px-2 flex items-center gap-1",
            }}
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

        <style jsx global>{`
          .canary-phone-input-wrapper .PhoneInput {
            display: flex;
            align-items: center;
            background: white;
          }

          .canary-phone-input-wrapper .PhoneInputCountry {
            padding: 0 8px;
            border-right: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .canary-phone-input-wrapper .PhoneInputCountryIcon {
            width: 24px;
            height: 24px;
            overflow: hidden;
          }

          .canary-phone-input-wrapper .PhoneInputCountryIcon--border {
            box-shadow: none;
          }

          .canary-phone-input-wrapper .PhoneInputCountrySelectArrow {
            width: 24px;
            height: 24px;
            border: none;
            opacity: 1;
          }

          .canary-phone-input-wrapper .PhoneInputInput {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            line-height: 1.5;
            padding: 0 8px;
            color: #666666;
          }

          .canary-phone-input-wrapper .PhoneInputInput:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
);

CanaryInputPhone.displayName = "CanaryInputPhone";

export default CanaryInputPhone;
