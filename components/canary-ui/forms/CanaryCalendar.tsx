import { useState, useCallback, useMemo } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiChevronUp, mdiChevronDown, mdiCheck } from "@mdi/js";
import { CanaryButton } from "../buttons";
import { ButtonType, ButtonSize, ButtonColor, IconPosition } from "../buttons/types";

// ─── Types ───────────────────────────────────────────────────────────

export type CalendarSelectionMode = "date" | "range";

export interface CalendarSelection {
  start: Date | null;
  end: Date | null;
}

export interface CanaryCalendarProps {
  value?: CalendarSelection | null;
  onChange?: (selection: CalendarSelection) => void;
  selectionMode?: CalendarSelectionMode;
  minDate?: Date | null;
  maxDate?: Date | null;
  startOfWeek?: "sunday" | "monday";
  onClear?: () => void;
  showClear?: boolean;
  showQuickButtons?: boolean;
  className?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_LABELS_MON = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const DAY_LABELS_SUN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

function isBetween(date: Date, start: Date, end: Date): boolean {
  const d = date.getTime();
  return d > start.getTime() && d < end.getTime();
}

function isBeforeDay(a: Date, b: Date): boolean {
  return new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime() <
    new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarGrid(year: number, month: number, startOfWeek: "sunday" | "monday"): Date[] {
  const firstDay = new Date(year, month, 1);
  let dayOfWeek = firstDay.getDay(); // 0=Sun, 1=Mon...

  if (startOfWeek === "monday") {
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  }

  const days: Date[] = [];

  // Previous month padding
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  // Current month
  const daysInMonth = getDaysInMonth(year, month);
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  // Next month padding (fill to 42 = 6 rows)
  while (days.length < 42) {
    days.push(new Date(year, month, daysInMonth + (days.length - daysInMonth - dayOfWeek + 1)));
  }

  return days;
}

// ─── Month/Year Picker ───────────────────────────────────────────────

function MonthYearPicker({
  month,
  year,
  onSave,
  onCancel,
}: {
  month: number;
  year: number;
  onSave: (month: number, year: number) => void;
  onCancel: () => void;
}) {
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 5 + i);

  return (
    <div className="absolute inset-0 bg-white rounded-xl z-10 flex flex-col" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
      {/* Header */}
      <div className="px-4 py-3 text-[14px] font-medium" style={{ color: colors.colorBlack1 }}>
        {MONTH_NAMES[selectedMonth]}, {selectedYear}
      </div>
      <div style={{ borderTop: `1px solid ${colors.colorBlack6}` }} />

      {/* Two column list */}
      <div className="flex flex-1 overflow-hidden">
        {/* Months */}
        <div className="flex-1 overflow-y-auto py-1" style={{ borderRight: `1px solid ${colors.colorBlack6}` }}>
          {MONTH_NAMES.map((name, i) => (
            <button
              key={name}
              onClick={() => setSelectedMonth(i)}
              className={clsx(
                "w-full text-left px-4 py-2 text-[14px] font-['Roboto',sans-serif] flex items-center justify-between cursor-pointer",
                "hover:bg-black/5"
              )}
              style={{ color: colors.colorBlack1 }}
            >
              {name}
              {i === selectedMonth && <Icon path={mdiCheck} size={0.75} color={colors.colorBlack2} />}
            </button>
          ))}
        </div>

        {/* Years */}
        <div className="flex-1 overflow-y-auto py-1">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={clsx(
                "w-full text-left px-4 py-2 text-[14px] font-['Roboto',sans-serif] flex items-center justify-between cursor-pointer",
                "hover:bg-black/5"
              )}
              style={{ color: colors.colorBlack1 }}
            >
              {y}
              {y === selectedYear && <Icon path={mdiCheck} size={0.75} color={colors.colorBlack2} />}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 px-4 py-3" style={{ borderTop: `1px solid ${colors.colorBlack6}` }}>
        <CanaryButton
          type={ButtonType.OUTLINED}
          size={ButtonSize.COMPACT}
          onClick={onCancel}
        >
          Cancel
        </CanaryButton>
        <CanaryButton
          type={ButtonType.PRIMARY}
          size={ButtonSize.COMPACT}
          onClick={() => onSave(selectedMonth, selectedYear)}
        >
          Save
        </CanaryButton>
      </div>
    </div>
  );
}

// ─── Main Calendar ───────────────────────────────────────────────────

export default function CanaryCalendar({
  value = null,
  onChange,
  selectionMode = "date",
  minDate = null,
  maxDate = null,
  startOfWeek = "monday",
  onClear,
  showClear = true,
  showQuickButtons = false,
  className = "",
}: CanaryCalendarProps) {
  const [viewMonth, setViewMonth] = useState(() => {
    if (value?.start) return value.start.getMonth();
    return new Date().getMonth();
  });
  const [viewYear, setViewYear] = useState(() => {
    if (value?.start) return value.start.getFullYear();
    return new Date().getFullYear();
  });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);

  const dayLabels = startOfWeek === "monday" ? DAY_LABELS_MON : DAY_LABELS_SUN;
  const days = useMemo(() => getCalendarGrid(viewYear, viewMonth, startOfWeek), [viewYear, viewMonth, startOfWeek]);

  const navigateMonth = useCallback((direction: number) => {
    setViewMonth((m) => {
      const newMonth = m + direction;
      if (newMonth < 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      if (newMonth > 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return newMonth;
    });
  }, []);

  const isDisabledDate = useCallback(
    (date: Date): boolean => {
      if (minDate && isBeforeDay(date, minDate)) return true;
      if (maxDate && isBeforeDay(maxDate, date)) return true;
      return false;
    },
    [minDate, maxDate]
  );

  const handleDayClick = useCallback(
    (date: Date) => {
      if (isDisabledDate(date)) return;

      if (selectionMode === "date") {
        onChange?.({ start: date, end: null });
      } else {
        // Range mode
        if (!value?.start || (value.start && value.end)) {
          // No selection or complete range — start fresh
          onChange?.({ start: date, end: null });
        } else {
          // Have start, need end
          if (isBeforeDay(date, value.start)) {
            onChange?.({ start: date, end: null });
          } else {
            onChange?.({ start: value.start, end: date });
          }
        }
      }
    },
    [selectionMode, value, onChange, isDisabledDate]
  );

  const getDayStyles = useCallback(
    (date: Date) => {
      const isCurrentMonth = date.getMonth() === viewMonth;
      const disabled = isDisabledDate(date);
      const today = isToday(date);
      const isStart = value?.start && isSameDay(date, value.start);
      const isEnd = value?.end && isSameDay(date, value.end);
      const selected = isStart || isEnd;
      const inRange =
        value?.start &&
        value?.end &&
        isBetween(date, value.start, value.end);
      const inHoverRange =
        selectionMode === "range" &&
        value?.start &&
        !value?.end &&
        hoverDate &&
        (isBetween(date, value.start, hoverDate) ||
          isBetween(date, hoverDate, value.start));
      const isHoverStart =
        selectionMode === "range" && value?.start && !value?.end && hoverDate && isSameDay(date, value.start);
      const isHoverEnd =
        selectionMode === "range" && value?.start && !value?.end && hoverDate && isSameDay(date, hoverDate);

      let backgroundColor: string = "transparent";
      let color: string = isCurrentMonth ? colors.colorBlack1 : colors.colorBlack4;
      let border: string = "2px solid transparent";
      let fontWeight: string = "400";
      let borderRadius: string = "6px";

      const isHoveredDay = hoverDate && isSameDay(date, hoverDate);

      if (disabled) {
        color = colors.colorBlack5;
      } else if (selected) {
        backgroundColor = colors.colorBlueDark1;
        color = colors.white;
        fontWeight = "500";
      } else if (inRange || inHoverRange) {
        backgroundColor = colors.colorBlueDark5;
        color = colors.colorBlueDark1;
      } else if (isHoveredDay && isCurrentMonth) {
        backgroundColor = colors.colorBlueDark5;
      }

      // Range border radius: only round the endpoints
      if (selectionMode === "range" && (inRange || inHoverRange || selected)) {
        if (isStart || isHoverStart) {
          borderRadius = "6px 0 0 6px";
        } else if (isEnd || isHoverEnd) {
          borderRadius = "0 6px 6px 0";
        } else {
          borderRadius = "0";
        }
        // Single day range (start === end)
        if (isStart && isEnd) {
          borderRadius = "6px";
        }
      }

      if (today && !selected && !inRange && !inHoverRange) {
        backgroundColor = colors.colorBlueDark1;
        color = colors.white;
        fontWeight = "500";
      }

      return { backgroundColor, color, border, fontWeight, borderRadius, cursor: disabled ? "default" : "pointer" };
    },
    [viewMonth, value, hoverDate, selectionMode, isDisabledDate]
  );

  const handleMonthYearSave = useCallback((month: number, year: number) => {
    setViewMonth(month);
    setViewYear(year);
    setShowMonthYearPicker(false);
  }, []);

  return (
    <div
      className={clsx("relative inline-block rounded-xl p-4 font-['Roboto',sans-serif]", className)}
      style={{
        backgroundColor: colors.white,
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        width: 340,
      }}
    >
      {/* Quick Buttons */}
      {showQuickButtons && (
        <div className="flex items-center gap-2 mb-3">
          <CanaryButton
            type={ButtonType.OUTLINED}
            size={ButtonSize.COMPACT}
            onClick={() => {
              const today = new Date();
              if (selectionMode === "date") {
                onChange?.({ start: today, end: null });
              } else {
                onChange?.({ start: today, end: today });
              }
              setViewMonth(today.getMonth());
              setViewYear(today.getFullYear());
            }}
          >
            Today
          </CanaryButton>
          {selectionMode === "date" && (
            <CanaryButton
              type={ButtonType.OUTLINED}
              size={ButtonSize.COMPACT}
              onClick={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                onChange?.({ start: tomorrow, end: null });
                setViewMonth(tomorrow.getMonth());
                setViewYear(tomorrow.getFullYear());
              }}
            >
              Tomorrow
            </CanaryButton>
          )}
          {selectionMode === "range" && (
            <CanaryButton
              type={ButtonType.OUTLINED}
              size={ButtonSize.COMPACT}
              onClick={() => {
                const today = new Date();
                const next7 = new Date();
                next7.setDate(today.getDate() + 6);
                onChange?.({ start: today, end: next7 });
                setViewMonth(today.getMonth());
                setViewYear(today.getFullYear());
              }}
            >
              Next 7 Days
            </CanaryButton>
          )}
        </div>
      )}

      {/* Month/Year Picker Overlay */}
      {showMonthYearPicker && (
        <MonthYearPicker
          month={viewMonth}
          year={viewYear}
          onSave={handleMonthYearSave}
          onCancel={() => setShowMonthYearPicker(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center mb-3">
        <CanaryButton
          type={ButtonType.TEXT}
          size={ButtonSize.COMPACT}
          onClick={() => setShowMonthYearPicker(true)}
        >
          {MONTH_NAMES[viewMonth]} {viewYear}
        </CanaryButton>
        <div className="flex items-center ml-1 gap-0.5">
          <CanaryButton
            type={ButtonType.ICON_SECONDARY}
            size={ButtonSize.COMPACT}
            icon={<Icon path={mdiChevronUp} size={0.75} />}
            onClick={() => navigateMonth(-1)}
          />
          <CanaryButton
            type={ButtonType.ICON_SECONDARY}
            size={ButtonSize.COMPACT}
            icon={<Icon path={mdiChevronDown} size={0.75} />}
            onClick={() => navigateMonth(1)}
          />
        </div>
      </div>

      {/* Day Labels */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }} className="mb-1">
        {dayLabels.map((label) => (
          <div
            key={label}
            className="text-[11px] font-medium text-center py-1"
            style={{ color: colors.colorBlack3 }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Day Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {days.map((date, i) => {
          const styles = getDayStyles(date);
          return (
            <button
              key={i}
              onClick={() => handleDayClick(date)}
              onMouseEnter={() => setHoverDate(date)}
              onMouseLeave={() => setHoverDate(null)}
              className="flex items-center justify-center text-[14px] border-0 w-full aspect-square transition-colors duration-100"
              style={{
                backgroundColor: styles.backgroundColor,
                color: styles.color,
                border: styles.border,
                fontWeight: styles.fontWeight,
                borderRadius: styles.borderRadius,
                cursor: styles.cursor,
              }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Clear */}
      {showClear && (
        <div className="mt-3">
          <CanaryButton
            type={ButtonType.TEXT}
            size={ButtonSize.COMPACT}
            onClick={() => {
              onChange?.({ start: null, end: null });
              onClear?.();
            }}
          >
            Clear
          </CanaryButton>
        </div>
      )}
    </div>
  );
}
