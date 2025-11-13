import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export type AlertType = "success" | "error" | "warning" | "info";

export interface CanaryAlertProps {
  message: string;
  type?: AlertType;
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function CanaryAlert({
  message,
  type = "info",
  title,
  icon,
  onClose,
  className = "",
}: CanaryAlertProps) {
  const typeColors = {
    success: {
      bg: colors.colorLightGreen5,
      border: colors.colorLightGreen1,
      text: colors.success,
    },
    error: {
      bg: colors.colorPink4,
      border: colors.colorPink3,
      text: colors.colorPink1,
    },
    warning: {
      bg: colors.colorWheat5,
      border: colors.colorWheat3,
      text: colors.colorWheat1,
    },
    info: {
      bg: colors.colorBlueDark5,
      border: colors.colorBlueDark3,
      text: colors.colorBlueDark1,
    },
  };

  const colorScheme = typeColors[type];

  return (
    <div
      className={clsx(
        "flex items-start gap-3 p-4 rounded border",
        className
      )}
      style={{
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text,
      }}
    >
      {icon && <div className="shrink-0 mt-0.5">{icon}</div>}

      <div className="flex-1">
        {title && (
          <h4 className="text-[14px] font-semibold mb-1">{title}</h4>
        )}
        <p className="text-[14px]">{message}</p>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
