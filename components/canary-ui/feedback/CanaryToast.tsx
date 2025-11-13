import { ReactNode, useEffect, useState } from "react";
import { colors, zIndex } from "../design-tokens";
import clsx from "clsx";

export type ToastType = "success" | "error" | "warning" | "info";

export interface CanaryToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  isOpen?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
  className?: string;
}

export default function CanaryToast({
  message,
  type = "info",
  duration = 5000,
  isOpen = true,
  onClose,
  icon,
  position = "top-right",
  className = "",
}: CanaryToastProps) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);

    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!visible) return null;

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

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  const colorScheme = typeColors[type];

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div
      className={clsx(
        "fixed flex items-center gap-3",
        "px-4 py-3 rounded shadow-lg",
        "border animate-slide-in",
        "max-w-md",
        positionClasses[position],
        className
      )}
      style={{
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text,
        zIndex: zIndex.toast,
      }}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      <p className="text-[14px] font-medium flex-1">{message}</p>
      <button
        onClick={handleClose}
        className="shrink-0 hover:opacity-70 transition-opacity"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
