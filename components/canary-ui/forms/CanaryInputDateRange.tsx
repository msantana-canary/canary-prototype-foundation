"use client";

import { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import CanaryCalendar from "./CanaryCalendar";
import clsx from "clsx";

export interface CanaryInputDateRangeProps extends Omit<BaseFormProps, "size"> {
  size?: InputSize;
  startDate?: string; // Format: MM/DD/YYYY
  endDate?: string; // Format: MM/DD/YYYY
  onChange?: (startDate: string, endDate: string) => void;
}

function parseDateStr(str: string | undefined): { m: string; d: string; y: string } {
  if (!str) return { m: "", d: "", y: "" };
  const parts = str.split("/");
  if (parts.length === 3) return { m: parts[0], d: parts[1], y: parts[2] };
  return { m: "", d: "", y: "" };
}

function toDate(m: string, d: string, y: string): Date | null {
  const mi = parseInt(m), di = parseInt(d), yi = parseInt(y);
  if (mi && di && yi && yi > 1900) return new Date(yi, mi - 1, di);
  return null;
}

function fromDate(date: Date): { m: string; d: string; y: string } {
  return {
    m: String(date.getMonth() + 1).padStart(2, "0"),
    d: String(date.getDate()).padStart(2, "0"),
    y: String(date.getFullYear()),
  };
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
    const initStart = parseDateStr(initialStartDate);
    const initEnd = parseDateStr(initialEndDate);

    const [startMonth, setStartMonth] = useState(initStart.m);
    const [startDay, setStartDay] = useState(initStart.d);
    const [startYear, setStartYear] = useState(initStart.y);
    const [endMonth, setEndMonth] = useState(initEnd.m);
    const [endDay, setEndDay] = useState(initEnd.d);
    const [endYear, setEndYear] = useState(initEnd.y);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const startMonthRef = useRef<HTMLInputElement>(null);
    const startDayRef = useRef<HTMLInputElement>(null);
    const startYearRef = useRef<HTMLInputElement>(null);
    const endMonthRef = useRef<HTMLInputElement>(null);
    const endDayRef = useRef<HTMLInputElement>(null);
    const endYearRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (initialStartDate) {
        const p = parseDateStr(initialStartDate);
        setStartMonth(p.m); setStartDay(p.d); setStartYear(p.y);
      }
      if (initialEndDate) {
        const p = parseDateStr(initialEndDate);
        setEndMonth(p.m); setEndDay(p.d); setEndYear(p.y);
      }
    }, [initialStartDate, initialEndDate]);

    useEffect(() => {
      if (!isCalendarOpen) return;
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsCalendarOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isCalendarOpen]);

    const notifyChange = (sm: string, sd: string, sy: string, em: string, ed: string, ey: string) => {
      const start = sm && sd && sy ? `${sm}/${sd}/${sy}` : "";
      const end = em && ed && ey ? `${em}/${ed}/${ey}` : "";
      onChange?.(start, end);
    };

    const getCalendarValue = useCallback(() => {
      const start = toDate(startMonth, startDay, startYear);
      const end = toDate(endMonth, endDay, endYear);
      return { start, end };
    }, [startMonth, startDay, startYear, endMonth, endDay, endYear]);

    const handleCalendarSelect = useCallback(
      (selection: { start: Date | null; end: Date | null }) => {
        if (selection.start) {
          const s = fromDate(selection.start);
          setStartMonth(s.m); setStartDay(s.d); setStartYear(s.y);

          if (selection.end) {
            const e = fromDate(selection.end);
            setEndMonth(e.m); setEndDay(e.d); setEndYear(e.y);
            onChange?.(`${s.m}/${s.d}/${s.y}`, `${e.m}/${e.d}/${e.y}`);
            setIsCalendarOpen(false);
          } else {
            setEndMonth(""); setEndDay(""); setEndYear("");
            onChange?.(`${s.m}/${s.d}/${s.y}`, "");
          }
        }
      },
      [onChange]
    );

    // Section handlers (same pattern as before, condensed)
    const handleSectionChange = (
      val: string,
      maxVal: number,
      maxLen: number,
      setter: (v: string) => void,
      nextRef: React.RefObject<HTMLInputElement | null> | null,
      ...notifyArgs: string[]
    ) => {
      const clean = val.replace(/\D/g, "").slice(0, maxLen);
      if (maxLen === 2 && clean.length === 1 && parseInt(clean) > (maxVal === 12 ? 1 : 3)) {
        const padded = "0" + clean;
        setter(padded);
        nextRef?.current?.focus();
        return padded;
      }
      if (maxLen === 2 && clean.length === 2 && parseInt(clean) > maxVal) return null;
      setter(clean);
      if (clean.length === maxLen) nextRef?.current?.focus();
      return clean;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: string) => {
      if (e.key === "Backspace" && (e.target as HTMLInputElement).value === "") {
        if (field === "startDay") startMonthRef.current?.focus();
        else if (field === "startYear") startDayRef.current?.focus();
        else if (field === "endMonth") startYearRef.current?.focus();
        else if (field === "endDay") endMonthRef.current?.focus();
        else if (field === "endYear") endDayRef.current?.focus();
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

    const inputCls = clsx("w-8 bg-transparent outline-none border-none text-center placeholder:text-gray-400", isDisabled && "cursor-not-allowed");
    const yearCls = clsx("w-12 bg-transparent outline-none border-none text-center placeholder:text-gray-400", isDisabled && "cursor-not-allowed");

    return (
      <div className={clsx("w-full", className)} ref={containerRef}>
        {label && (
          <label className={clsx(
            "block text-black font-['Roboto',sans-serif] font-normal",
            size === InputSize.TABLET && "text-[20px] leading-[150%] mb-2",
            size === InputSize.LARGE && "text-[14px] leading-[21px] mb-1",
            (size === InputSize.NORMAL || size === InputSize.COMPACT) && "text-[12px] leading-[18px] mb-1"
          )}>
            {label}
            {isRequired && <span className="ml-1" style={{ color: colors.error }}>*</span>}
          </label>
        )}

        <div className="relative">
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
              isDisabled ? "bg-[#E5E5E5] cursor-not-allowed" : "bg-white"
            )}
          >
            {/* Start Date */}
            <div className="flex items-center gap-0.5 shrink-0">
              <input ref={startMonthRef} type="text" inputMode="numeric" value={startMonth} onChange={(e) => { const v = handleSectionChange(e.target.value, 12, 2, setStartMonth, startDayRef); if (v) notifyChange(v, startDay, startYear, endMonth, endDay, endYear); }} onKeyDown={(e) => handleKeyDown(e, "startMonth")} placeholder="MM" disabled={isDisabled} className={inputCls} aria-label="Start Month" />
              <span className="text-gray-500 select-none">/</span>
              <input ref={startDayRef} type="text" inputMode="numeric" value={startDay} onChange={(e) => { const v = handleSectionChange(e.target.value, 31, 2, setStartDay, startYearRef); if (v) notifyChange(startMonth, v, startYear, endMonth, endDay, endYear); }} onKeyDown={(e) => handleKeyDown(e, "startDay")} placeholder="DD" disabled={isDisabled} className={inputCls} aria-label="Start Day" />
              <span className="text-gray-500 select-none">/</span>
              <input ref={startYearRef} type="text" inputMode="numeric" value={startYear} onChange={(e) => { const v = handleSectionChange(e.target.value, 9999, 4, setStartYear, endMonthRef); if (v) notifyChange(startMonth, startDay, v, endMonth, endDay, endYear); }} onKeyDown={(e) => handleKeyDown(e, "startYear")} placeholder="YYYY" disabled={isDisabled} className={yearCls} aria-label="Start Year" />
            </div>

            <span className="text-gray-500 select-none shrink-0 mx-1">—</span>

            {/* End Date */}
            <div className="flex items-center gap-0.5 shrink-0">
              <input ref={endMonthRef} type="text" inputMode="numeric" value={endMonth} onChange={(e) => { const v = handleSectionChange(e.target.value, 12, 2, setEndMonth, endDayRef); if (v) notifyChange(startMonth, startDay, startYear, v, endDay, endYear); }} onKeyDown={(e) => handleKeyDown(e, "endMonth")} placeholder="MM" disabled={isDisabled} className={inputCls} aria-label="End Month" />
              <span className="text-gray-500 select-none">/</span>
              <input ref={endDayRef} type="text" inputMode="numeric" value={endDay} onChange={(e) => { const v = handleSectionChange(e.target.value, 31, 2, setEndDay, endYearRef); if (v) notifyChange(startMonth, startDay, startYear, endMonth, v, endYear); }} onKeyDown={(e) => handleKeyDown(e, "endDay")} placeholder="DD" disabled={isDisabled} className={inputCls} aria-label="End Day" />
              <span className="text-gray-500 select-none">/</span>
              <input ref={endYearRef} type="text" inputMode="numeric" value={endYear} onChange={(e) => { const v = handleSectionChange(e.target.value, 9999, 4, setEndYear, null); if (v) notifyChange(startMonth, startDay, startYear, endMonth, endDay, v); }} onKeyDown={(e) => handleKeyDown(e, "endYear")} placeholder="YYYY" disabled={isDisabled} className={yearCls} aria-label="End Year" />
            </div>

            {/* Calendar Icon */}
            <div
              className={clsx("ml-auto flex items-center shrink-0", !isDisabled && "cursor-pointer")}
              onClick={() => !isDisabled && setIsCalendarOpen(!isCalendarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={iconSizes[size]} fill={isDisabled ? colors.colorBlack3 : colors.colorBlack1}>
                <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" />
              </svg>
            </div>

            {error && (
              <div className="flex items-center ml-2 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill={colors.error} />
                </svg>
              </div>
            )}
          </div>

          {/* Calendar Popup */}
          {isCalendarOpen && (
            <div className="absolute left-0 top-full mt-1 z-50">
              <CanaryCalendar
                value={getCalendarValue()}
                onChange={handleCalendarSelect}
                selectionMode="range"
                onClear={() => {
                  setStartMonth(""); setStartDay(""); setStartYear("");
                  setEndMonth(""); setEndDay(""); setEndYear("");
                  onChange?.("", "");
                  setIsCalendarOpen(false);
                }}
              />
            </div>
          )}
        </div>

        {error && (
          <div className="mt-1 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.colorRed5 }}>
            <p className="text-[12px] leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.error }}>{error}</p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] mt-1 leading-[1.5] font-['Roboto',sans-serif] font-normal" style={{ color: colors.colorBlack3 }}>{helperText}</p>
        )}
      </div>
    );
  }
);

CanaryInputDateRange.displayName = "CanaryInputDateRange";

export default CanaryInputDateRange;
