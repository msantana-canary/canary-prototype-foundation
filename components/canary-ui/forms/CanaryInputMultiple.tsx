import { useState, useRef, KeyboardEvent, forwardRef, useImperativeHandle } from "react";
import { colors } from "../design-tokens";
import { InputSize, InputType } from "./types";
import CanaryChip, { ChipType } from "../data-display/CanaryChip";
import clsx from "clsx";

type ChipSize = "large" | "normal" | "compact";

const CHIP_SIZE_MAP: Record<InputSize, ChipSize> = {
  [InputSize.TABLET]: "normal",
  [InputSize.LARGE]: "normal",
  [InputSize.NORMAL]: "compact",
  [InputSize.COMPACT]: "compact",
};

const INPUT_SIZE_CLASSES: Record<InputSize, string> = {
  [InputSize.TABLET]: "h-[64px] text-[24px] leading-[1.5] px-4",
  [InputSize.LARGE]: "h-[48px] text-[18px] leading-[1.5] px-2",
  [InputSize.NORMAL]: "h-[40px] text-[14px] leading-[1.5] px-2",
  [InputSize.COMPACT]: "h-[32px] text-[14px] leading-[1.5] px-2",
};

const LABEL_CLASSES: Record<InputSize, string> = {
  [InputSize.TABLET]: "text-[20px] leading-[150%] mb-2",
  [InputSize.LARGE]: "text-[14px] leading-[21px] mb-1",
  [InputSize.NORMAL]: "text-[12px] leading-[18px] mb-1",
  [InputSize.COMPACT]: "text-[12px] leading-[18px] mb-1",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface CanaryInputMultipleProps {
  values?: string[];
  onChange?: (values: string[]) => void;
  label?: string;
  placeholder?: string;
  size?: InputSize;
  inputType?: InputType;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
}

export interface CanaryInputMultipleRef {
  focus: () => void;
}

const CanaryInputMultiple = forwardRef<CanaryInputMultipleRef, CanaryInputMultipleProps>(
  (
    {
      values = [],
      onChange,
      label,
      placeholder,
      size = InputSize.NORMAL,
      inputType = InputType.TEXT,
      isDisabled = false,
      isRequired = false,
      error: externalError,
      helperText,
      className = "",
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [internalError, setInternalError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

    const error = externalError || internalError;
    const chipSize = CHIP_SIZE_MAP[size];
    const hasValues = values.length > 0;

    const validate = (value: string): string | null => {
      if (!value.trim()) return null;
      if (inputType === InputType.EMAIL && !EMAIL_REGEX.test(value.trim())) {
        return "Invalid email format";
      }
      return null;
    };

    const addValue = (raw: string) => {
      const value = raw.trim();
      if (!value) return;

      const validationError = validate(value);
      if (validationError) {
        setInternalError(validationError);
        return;
      }

      setInternalError("");
      const newValues = [...values, value];
      onChange?.(newValues);
      setInputValue("");
    };

    const removeValue = (index: number) => {
      const newValues = values.filter((_, i) => i !== index);
      onChange?.(newValues);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addValue(inputValue);
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (inputValue.trim()) {
        addValue(inputValue);
      }
      if (isRequired && values.length === 0 && !inputValue.trim()) {
        setInternalError("Required");
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
      setInternalError("");
    };

    return (
      <div className={clsx("w-full", className)}>
        {label && (
          <label className={clsx("block text-black", LABEL_CLASSES[size])}>
            {label}
            {isRequired && <span className="ml-1" style={{ color: colors.error }}>*</span>}
          </label>
        )}

        <div
          className={clsx(
            "w-full rounded border font-['Roboto',sans-serif]",
            "transition-[border-color,background-color] duration-200",
            "focus-within:outline focus-within:outline-2 focus-within:outline-offset-[-1px]",
            isDisabled && "cursor-not-allowed",
          )}
          style={{
            borderColor: error ? colors.error : (isDisabled ? colors.colorBlack1 : colors.colorBlack3),
            backgroundColor: isDisabled ? colors.colorBlack6 : "white",
            outlineColor: error ? colors.error : colors.colorBlueDark1,
          }}
          onClick={() => !isDisabled && inputRef.current?.focus()}
        >
          {/* Chips row */}
          {hasValues && (
            <div className="flex flex-wrap gap-1 px-2 pt-2">
              {values.map((value, index) => (
                <CanaryChip
                  key={`${value}-${index}`}
                  label={value}
                  chipType={ChipType.REMOVABLE}
                  size={chipSize}
                  isRounded={false}
                  isDisabled={isDisabled}
                  onRemove={() => removeValue(index)}
                />
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="relative">
            <input
              ref={inputRef}
              type={inputType}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setInternalError("");
              }}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isDisabled}
              placeholder={placeholder}
              className={clsx(
                "w-full border-0 outline-none bg-transparent font-['Roboto',sans-serif]",
                "placeholder:text-gray-500 placeholder:opacity-100",
                isDisabled && "cursor-not-allowed",
                INPUT_SIZE_CLASSES[size],
              )}
              style={{ color: colors.colorBlack1 }}
            />

            {error && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill={colors.error}
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="mt-1 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.colorRed5 }}>
            <p className="text-[12px] leading-[1.5]" style={{ color: colors.error }}>
              {error}
            </p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] mt-1 leading-[1.5]" style={{ color: colors.colorBlack3 }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputMultiple.displayName = "CanaryInputMultiple";

export default CanaryInputMultiple;
