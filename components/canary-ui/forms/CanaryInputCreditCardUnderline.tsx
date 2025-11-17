"use client";

import { forwardRef, InputHTMLAttributes, useState, useCallback } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import { usePaymentInputs } from "react-payment-inputs";
import Icon from "@mdi/react";
import { mdiCreditCard, mdiCreditCardOutline } from "@mdi/js";

export interface CanaryInputCreditCardUnderlineProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">,
    Omit<BaseFormProps, "size"> {
  size?: InputSize;
  onCardChange?: (cardNumber: string, cardType: string) => void;
}

const CanaryInputCreditCardUnderline = forwardRef<HTMLInputElement, CanaryInputCreditCardUnderlineProps>(
  (
    {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      className = "",
      onCardChange,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const [cardNumber, setCardNumber] = useState("");
    const { meta, getCardNumberProps } = usePaymentInputs();
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!(value || defaultValue || cardNumber));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    const handleCardNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCardNumber(value);
      setHasValue(!!value);
      if (onCardChange) {
        onCardChange(value, meta.cardType?.type || "");
      }
    }, [onCardChange, meta.cardType]);

    // Determine if label should be shown above input
    const showLabelAbove = isFocused || hasValue;

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
    };

    const cardNumberProps = getCardNumberProps({
      ...inputProps,
      onChange: handleCardNumberChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
    });

    return (
      <div className={clsx("w-full", className)}>
        {/* Label - shown when focused or filled */}
        {label && showLabelAbove && (
          <label
            className={clsx(
              "block text-black font-['Roboto',sans-serif] font-normal mb-1",
              "transition-all duration-200 ease-out",
              size === InputSize.TABLET && "text-[20px] leading-[150%]",
              size === InputSize.LARGE && "text-[14px] leading-[21px]",
              (size === InputSize.NORMAL || size === InputSize.COMPACT) && "text-[12px] leading-[1.5]"
            )}
          >
            {label}
            {isRequired && <span className="ml-1" style={{ color: colors.error }}>*</span>}
          </label>
        )}

        {/* Input Field with bottom border and credit card icon */}
        <div className="relative">
          <div className="relative flex items-center">
            {/* Credit Card Icon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center w-6 h-6">
              <Icon
                path={meta.cardType?.type ? mdiCreditCard : mdiCreditCardOutline}
                size="24px"
                color={colors.colorBlack1}
              />
            </div>

            <input
              ref={ref}
              type="text"
              disabled={isDisabled}
              required={isRequired}
              {...cardNumberProps}
              placeholder={!showLabelAbove ? (label as string) : ""}
              className={clsx(
                "w-full font-['Roboto',sans-serif] font-normal leading-[1.5]",
                "border-0 border-b border-solid",
                "transition-[border-color,background-color,padding] duration-200",
                "outline-none",
                "pl-8", // Space for card icon
                sizeClasses[size],
                // Padding - 8px horizontal when focused (plus icon space)
                isFocused ? "pr-2 py-2" : "pr-0 py-0",
                // Border styles
                isDisabled
                  ? "border-b border-black bg-[rgba(0,0,0,0.1)] cursor-not-allowed"
                  : error
                  ? isFocused
                    ? "border-b-2 border-[#E40046] bg-[rgba(228,0,70,0.05)]"
                    : "border-b-2 border-[#E40046] bg-white"
                  : isFocused
                  ? "border-b-2 border-[#2858c4] bg-[rgba(40,88,196,0.05)]"
                  : "border-b border-black bg-white",
                isDisabled && "opacity-50"
              )}
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-1 bg-[#fce6ed] px-2 py-[2px] rounded inline-block">
            <p className="text-[12px] text-[#E40046] leading-[1.5] font-['Roboto',sans-serif] font-normal">
              {error}
            </p>
          </div>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-[12px] text-[#666666] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputCreditCardUnderline.displayName = "CanaryInputCreditCardUnderline";

export default CanaryInputCreditCardUnderline;
