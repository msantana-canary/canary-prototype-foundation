"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputDateProps extends Omit<BaseFormProps, "size"> {
  size?: InputSize;
  value?: string; // Format: MM/DD/YYYY
  onChange?: (date: string) => void;
}

const CanaryInputDate = forwardRef<HTMLDivElement, CanaryInputDateProps>(
  (
    {
      label,
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

    // Notify parent of changes
    const notifyChange = (m: string, d: string, y: string) => {
      if (m && d && y) {
        onChange?.(`${m}/${d}/${y}`);
      }
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);

      // Validate first digit (can't be > 1)
      if (val.length === 1 && parseInt(val) > 1) {
        setMonth("0" + val);
        notifyChange("0" + val, day, year);
        dayRef.current?.focus();
        return;
      }

      // Validate full month (01-12)
      if (val.length === 2 && parseInt(val) > 12) {
        return; // Don't update if invalid
      }

      setMonth(val);
      notifyChange(val, day, year);

      // Auto-advance when 2 digits entered
      if (val.length === 2) {
        dayRef.current?.focus();
      }
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);

      // Validate first digit (can't be > 3)
      if (val.length === 1 && parseInt(val) > 3) {
        setDay("0" + val);
        notifyChange(month, "0" + val, year);
        yearRef.current?.focus();
        return;
      }

      // Validate full day (01-31)
      if (val.length === 2 && parseInt(val) > 31) {
        return;
      }

      setDay(val);
      notifyChange(month, val, year);

      // Auto-advance when 2 digits entered
      if (val.length === 2) {
        yearRef.current?.focus();
      }
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
          // Move to previous field on backspace if empty
          if (field === "day") {
            monthRef.current?.focus();
          } else if (field === "year") {
            dayRef.current?.focus();
          }
        }
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
        {label && (
          <label
            className={clsx(
              "block text-black font-['Roboto',sans-serif] font-normal",
              size === InputSize.TABLET && "text-[20px] leading-[150%] mb-2",
              size === InputSize.LARGE && "text-[14px] leading-[21px] mb-1",
              (size === InputSize.NORMAL || size === InputSize.COMPACT) && "text-[12px] leading-[18px] mb-1"
            )}
          >
            {label}
            {isRequired && <span className="ml-1" style={{ color: colors.error }}>*</span>}
          </label>
        )}

        <div
          ref={ref}
          className={clsx(
            "relative flex items-center gap-0.5 rounded border font-['Roboto',sans-serif] font-normal leading-[1.5]",
            "transition-[border-color,background-color] duration-200",
            sizeClasses[size],
            size === InputSize.TABLET && "px-4 py-3",
            size === InputSize.LARGE && "px-2 py-3",
            (size === InputSize.NORMAL || size === InputSize.COMPACT) && "px-2",
            error
              ? "border-[#E40046] focus-within:outline focus-within:outline-2 focus-within:outline-[#E40046] focus-within:outline-offset-[-1px]"
              : "border-[#666666] focus-within:outline focus-within:outline-2 focus-within:outline-[#2858c4] focus-within:outline-offset-[-1px]",
            isDisabled && "bg-[#E5E5E5] cursor-not-allowed",
            !isDisabled && "bg-white"
          )}
        >
          {/* Month Input */}
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
          />

          {/* Separator */}
          <span className="text-gray-500 select-none">/</span>

          {/* Day Input */}
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
          />

          {/* Separator */}
          <span className="text-gray-500 select-none">/</span>

          {/* Year Input */}
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
          />

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

          {/* Error Icon */}
          {error && (
            <div className="flex items-center ml-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill={colors.error}
                />
              </svg>
            </div>
          )}
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

CanaryInputDate.displayName = "CanaryInputDate";

export default CanaryInputDate;
