"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputDateUnderlineProps extends Omit<BaseFormProps, "size"> {
  size?: InputSize;
  value?: string; // Format: MM/DD/YYYY
  onChange?: (date: string) => void;
}

const CanaryInputDateUnderline = forwardRef<HTMLDivElement, CanaryInputDateUnderlineProps>(
  (
    {
      label = "Date",
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      className = "",
      value,
      onChange,
    },
    ref
  ) => {
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const monthRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    // Parse initial value
    useEffect(() => {
      if (value) {
        const parts = value.split("/");
        if (parts.length === 3) {
          setMonth(parts[0]);
          setDay(parts[1]);
          setYear(parts[2]);
        }
      }
    }, [value]);

    // Determine if label should be shown above
    const hasValue = !!(month || day || year);
    const showLabelAbove = isFocused || hasValue;

    // Notify parent of changes
    const notifyChange = (m: string, d: string, y: string) => {
      if (m && d && y) {
        onChange?.(`${m}/${d}/${y}`);
      }
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setMonth("0" + val);
        notifyChange("0" + val, day, year);
        dayRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setMonth(val);
      notifyChange(val, day, year);
      if (val.length === 2) dayRef.current?.focus();
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setDay("0" + val);
        notifyChange(month, "0" + val, year);
        yearRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setDay(val);
      notifyChange(month, val, year);
      if (val.length === 2) yearRef.current?.focus();
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setYear(val);
      notifyChange(month, day, val);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: "month" | "day" | "year") => {
      if (e.key === "Backspace") {
        const target = e.target as HTMLInputElement;
        if (target.value === "") {
          if (field === "day") monthRef.current?.focus();
          else if (field === "year") dayRef.current?.focus();
        }
      }
    };

    const handleFocus = () => {
      setIsFocused(true);
      // Focus first empty field or month
      if (!month) monthRef.current?.focus();
      else if (!day) dayRef.current?.focus();
      else if (!year) yearRef.current?.focus();
      else monthRef.current?.focus();
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      // Only blur if focus is leaving the entire component
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        setIsFocused(false);
      }
    };

    const sizeClasses = {
      [InputSize.TABLET]: "h-[64px] text-[24px]",
      [InputSize.LARGE]: "h-[48px] text-[18px]",
      [InputSize.NORMAL]: "h-[40px] text-[14px]",
      [InputSize.COMPACT]: "h-[32px] text-[14px]",
    };

    const iconSizes = {
      [InputSize.TABLET]: "w-8 h-8",
      [InputSize.LARGE]: "w-6 h-6",
      [InputSize.NORMAL]: "w-6 h-6",
      [InputSize.COMPACT]: "w-5 h-5",
    };

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

        {/* Input Field with bottom border */}
        <div
          ref={ref}
          className={clsx(
            "relative flex items-center gap-0.5",
            "border-0 border-b border-solid",
            "transition-[border-color,background-color,padding] duration-200",
            "font-['Roboto',sans-serif] font-normal leading-[1.5]",
            sizeClasses[size],
            // Padding
            isFocused ? "px-2 py-2" : "px-0 py-0",
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
            isDisabled && "opacity-50"
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
        >
          {/* Show placeholder when not focused and empty */}
          {!showLabelAbove && (
            <div className="absolute left-0 text-gray-500 pointer-events-none">
              {label}
            </div>
          )}

          {/* Date inputs - only visible when focused or has value */}
          {showLabelAbove && (
            <>
              <input
                ref={monthRef}
                type="text"
                inputMode="numeric"
                value={month}
                onChange={handleMonthChange}
                onKeyDown={(e) => handleKeyDown(e, "month")}
                placeholder="MM"
                disabled={isDisabled}
                className={clsx(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                )}
                aria-label="Month"
                tabIndex={-1}
              />
              <span className="text-gray-400 select-none text-sm">/</span>
              <input
                ref={dayRef}
                type="text"
                inputMode="numeric"
                value={day}
                onChange={handleDayChange}
                onKeyDown={(e) => handleKeyDown(e, "day")}
                placeholder="DD"
                disabled={isDisabled}
                className={clsx(
                  "w-8 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                )}
                aria-label="Day"
                tabIndex={-1}
              />
              <span className="text-gray-400 select-none text-sm">/</span>
              <input
                ref={yearRef}
                type="text"
                inputMode="numeric"
                value={year}
                onChange={handleYearChange}
                onKeyDown={(e) => handleKeyDown(e, "year")}
                placeholder="YYYY"
                disabled={isDisabled}
                className={clsx(
                  "w-12 bg-transparent outline-none border-none text-center",
                  "placeholder:text-gray-400",
                  isDisabled && "cursor-not-allowed"
                )}
                aria-label="Year"
                tabIndex={-1}
              />
            </>
          )}

          {/* Calendar Icon */}
          <div className="ml-auto flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={iconSizes[size]}
              fill={isDisabled ? colors.black3 : colors.black1}
            >
              <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" />
            </svg>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-1 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.red5 }}>
            <p className="text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.error }}>
              {error}
            </p>
          </div>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.black3 }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputDateUnderline.displayName = "CanaryInputDateUnderline";

export default CanaryInputDateUnderline;
