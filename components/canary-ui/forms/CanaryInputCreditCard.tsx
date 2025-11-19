"use client";

import { forwardRef, InputHTMLAttributes, useState, useCallback } from "react";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";
import { usePaymentInputs } from "react-payment-inputs";
import Icon from "@mdi/react";
import { mdiCreditCard, mdiCreditCardOutline } from "@mdi/js";

export interface CanaryInputCreditCardProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange">,
    BaseFormProps {
  onCardChange?: (cardNumber: string, cardType: string) => void;
}

const CanaryInputCreditCard = forwardRef<HTMLInputElement, CanaryInputCreditCardProps>(
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
      onCardChange,
      ...inputProps
    },
    ref
  ) => {
    const [cardNumber, setCardNumber] = useState("");
    const { meta, getCardNumberProps } = usePaymentInputs();

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] pl-[56px] pr-4 py-3",
      [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] pl-[48px] pr-2 py-3",
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
        ? "border-[#E40046] canary-focus-outline-error"
        : "border-[#666666] canary-focus-outline-blue",
      isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
      isReadonly && "bg-[#FAFAFA] cursor-default",
      className
    );

    const handleCardNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCardNumber(value);
      if (onCardChange) {
        onCardChange(value, meta.cardType?.displayName || "unknown");
      }
    }, [meta.cardType, onCardChange]);

    // Get card icon based on detected card type
    const getCardIcon = () => {
      const cardType = meta.cardType?.type;

      // For now, use generic credit card icon
      // In a production app, you'd map specific card types to their brand icons
      return (
        <Icon
          path={cardNumber ? mdiCreditCard : mdiCreditCardOutline}
          size={1}
          color="#000000"
        />
      );
    };

    const cardNumberProps = getCardNumberProps({
      onChange: handleCardNumberChange,
    });

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
            {getCardIcon()}
          </div>

          <input
            ref={ref}
            {...cardNumberProps}
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

        {meta.cardType && (
          <p className="text-[10px] text-[#999999] mt-1">
            Detected: {meta.cardType.displayName}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputCreditCard.displayName = "CanaryInputCreditCard";

export default CanaryInputCreditCard;
