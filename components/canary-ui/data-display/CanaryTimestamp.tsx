import { colors } from "../design-tokens";
import clsx from "clsx";
import { TimestampFormat, TimestampColor } from "./types";

export interface CanaryTimestampProps {
  date: Date | string | number;
  format?: TimestampFormat;
  color?: TimestampColor;
  className?: string;
}

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  const isFuture = diffMs < 0;
  const suffix = isFuture ? "from now" : "ago";

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ${suffix}`;
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ${suffix}`;
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ${suffix}`;
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ${suffix}`;
  return `${diffMonths} month${diffMonths === 1 ? "" : "s"} ${suffix}`;
}

function formatDate(date: Date, format: TimestampFormat): string {
  switch (format) {
    case TimestampFormat.DATETIME:
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }).format(date);

    case TimestampFormat.DATETIME_ZONE:
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(date);

    case TimestampFormat.RELATIVE_TIME:
      return getRelativeTime(date);

    default:
      return date.toLocaleString();
  }
}

export default function CanaryTimestamp({
  date,
  format = TimestampFormat.DATETIME,
  color = TimestampColor.PRIMARY,
  className = "",
}: CanaryTimestampProps) {
  const dateObj = date instanceof Date ? date : new Date(date);

  const colorMap = {
    [TimestampColor.PRIMARY]: colors.colorBlack2,
    [TimestampColor.SECONDARY]: colors.colorBlack4,
  };

  return (
    <time
      dateTime={dateObj.toISOString()}
      className={clsx("text-[12px]", className)}
      style={{ color: colorMap[color] }}
    >
      {formatDate(dateObj, format)}
    </time>
  );
}
