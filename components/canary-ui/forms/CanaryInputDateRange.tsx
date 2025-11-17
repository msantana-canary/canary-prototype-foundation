"use client";

import { forwardRef, useState, useRef, useEffect } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputDateRangeProps extends Omit<BaseFormProps, "size"> {
  size?: InputSize;
  startDate?: string; // Format: MM/DD/YYYY
  endDate?: string; // Format: MM/DD/YYYY
  onChange?: (startDate: string, endDate: string) => void;
}

const CanaryInputDateRange = forwardRef<HTMLDivElement, CanaryInputDateRangeProps>(
  (
    {
      label,
      isDisabled = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.NORMAL,
      className = "",
      startDate: initialStartDate,
      endDate: initialEndDate,
      onChange,
    },
    ref
  ) => {
    // Start date state
    const [startMonth, setStartMonth] = useState("");
    const [startDay, setStartDay] = useState("");
    const [startYear, setStartYear] = useState("");

    // End date state
    const [endMonth, setEndMonth] = useState("");
    const [endDay, setEndDay] = useState("");
    const [endYear, setEndYear] = useState("");

    // Refs for start date
    const startMonthRef = useRef<HTMLInputElement>(null);
    const startDayRef = useRef<HTMLInputElement>(null);
    const startYearRef = useRef<HTMLInputElement>(null);

    // Refs for end date
    const endMonthRef = useRef<HTMLInputElement>(null);
    const endDayRef = useRef<HTMLInputElement>(null);
    const endYearRef = useRef<HTMLInputElement>(null);

    // Parse initial values
    useEffect(() => {
      if (initialStartDate) {
        const parts = initialStartDate.split("/");
        if (parts.length === 3) {
          setStartMonth(parts[0]);
          setStartDay(parts[1]);
          setStartYear(parts[2]);
        }
      }
      if (initialEndDate) {
        const parts = initialEndDate.split("/");
        if (parts.length === 3) {
          setEndMonth(parts[0]);
          setEndDay(parts[1]);
          setEndYear(parts[2]);
        }
      }
    }, [initialStartDate, initialEndDate]);

    // Notify parent of changes
    const notifyChange = (sm: string, sd: string, sy: string, em: string, ed: string, ey: string) => {
      const start = sm && sd && sy ? `${sm}/${sd}/${sy}` : "";
      const end = em && ed && ey ? `${em}/${ed}/${ey}` : "";
      onChange?.(start, end);
    };

    // Start date handlers
    const handleStartMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setStartMonth("0" + val);
        notifyChange("0" + val, startDay, startYear, endMonth, endDay, endYear);
        startDayRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setStartMonth(val);
      notifyChange(val, startDay, startYear, endMonth, endDay, endYear);
      if (val.length === 2) startDayRef.current?.focus();
    };

    const handleStartDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setStartDay("0" + val);
        notifyChange(startMonth, "0" + val, startYear, endMonth, endDay, endYear);
        startYearRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setStartDay(val);
      notifyChange(startMonth, val, startYear, endMonth, endDay, endYear);
      if (val.length === 2) startYearRef.current?.focus();
    };

    const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setStartYear(val);
      notifyChange(startMonth, startDay, val, endMonth, endDay, endYear);
      if (val.length === 4) endMonthRef.current?.focus();
    };

    // End date handlers
    const handleEndMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 1) {
        setEndMonth("0" + val);
        notifyChange(startMonth, startDay, startYear, "0" + val, endDay, endYear);
        endDayRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 12) return;
      setEndMonth(val);
      notifyChange(startMonth, startDay, startYear, val, endDay, endYear);
      if (val.length === 2) endDayRef.current?.focus();
    };

    const handleEndDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (val.length === 1 && parseInt(val) > 3) {
        setEndDay("0" + val);
        notifyChange(startMonth, startDay, startYear, endMonth, "0" + val, endYear);
        endYearRef.current?.focus();
        return;
      }
      if (val.length === 2 && parseInt(val) > 31) return;
      setEndDay(val);
      notifyChange(startMonth, startDay, startYear, endMonth, val, endYear);
      if (val.length === 2) endYearRef.current?.focus();
    };

    const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, "").slice(0, 4);
      setEndYear(val);
      notifyChange(startMonth, startDay, startYear, endMonth, endDay, val);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: string) => {
      if (e.key === "Backspace") {
        const target = e.target as HTMLInputElement;
        if (target.value === "") {
          if (field === "startDay") startMonthRef.current?.focus();
          else if (field === "startYear") startDayRef.current?.focus();
          else if (field === "endMonth") startYearRef.current?.focus();
          else if (field === "endDay") endMonthRef.current?.focus();
          else if (field === "endYear") endDayRef.current?.focus();
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
            "relative flex items-center gap-2 rounded border font-['Roboto',sans-serif] font-normal leading-[1.5]",
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
          {/* Start Date */}
          <div className="flex items-center gap-0.5 shrink-0">
            <input
              ref={startMonthRef}
              type="text"
              inputMode="numeric"
              value={startMonth}
              onChange={handleStartMonthChange}
              onKeyDown={(e) => handleKeyDown(e, "startMonth")}
              placeholder="MM"
              disabled={isDisabled}
              className={clsx(
                "w-8 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="Start Month"
            />
            <span className="text-gray-500 select-none">/</span>
            <input
              ref={startDayRef}
              type="text"
              inputMode="numeric"
              value={startDay}
              onChange={handleStartDayChange}
              onKeyDown={(e) => handleKeyDown(e, "startDay")}
              placeholder="DD"
              disabled={isDisabled}
              className={clsx(
                "w-8 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="Start Day"
            />
            <span className="text-gray-500 select-none">/</span>
            <input
              ref={startYearRef}
              type="text"
              inputMode="numeric"
              value={startYear}
              onChange={handleStartYearChange}
              onKeyDown={(e) => handleKeyDown(e, "startYear")}
              placeholder="YYYY"
              disabled={isDisabled}
              className={clsx(
                "w-12 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="Start Year"
            />
          </div>

          {/* Separator */}
          <span className="text-gray-500 select-none shrink-0 mx-1">—</span>

          {/* End Date */}
          <div className="flex items-center gap-0.5 shrink-0">
            <input
              ref={endMonthRef}
              type="text"
              inputMode="numeric"
              value={endMonth}
              onChange={handleEndMonthChange}
              onKeyDown={(e) => handleKeyDown(e, "endMonth")}
              placeholder="MM"
              disabled={isDisabled}
              className={clsx(
                "w-8 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="End Month"
            />
            <span className="text-gray-500 select-none">/</span>
            <input
              ref={endDayRef}
              type="text"
              inputMode="numeric"
              value={endDay}
              onChange={handleEndDayChange}
              onKeyDown={(e) => handleKeyDown(e, "endDay")}
              placeholder="DD"
              disabled={isDisabled}
              className={clsx(
                "w-8 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="End Day"
            />
            <span className="text-gray-500 select-none">/</span>
            <input
              ref={endYearRef}
              type="text"
              inputMode="numeric"
              value={endYear}
              onChange={handleEndYearChange}
              onKeyDown={(e) => handleKeyDown(e, "endYear")}
              placeholder="YYYY"
              disabled={isDisabled}
              className={clsx(
                "w-12 bg-transparent outline-none border-none text-center",
                "placeholder:text-gray-400",
                isDisabled && "cursor-not-allowed"
              )}
              aria-label="End Year"
            />
          </div>

          {/* Calendar Icon */}
          <div className="ml-auto flex items-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={iconSizes[size]}
              fill={isDisabled ? colors.colorBlack3 : colors.colorBlack1}
            >
              <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" />
            </svg>
          </div>

          {/* Error Icon */}
          {error && (
            <div className="flex items-center ml-2 shrink-0">
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
          <div className="mt-1 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.colorRed5 }}>
            <p className="text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.error }}>
              {error}
            </p>
          </div>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p className="text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.colorBlack3 }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryInputDateRange.displayName = "CanaryInputDateRange";

export default CanaryInputDateRange;
