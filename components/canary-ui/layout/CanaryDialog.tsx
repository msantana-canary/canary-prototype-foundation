import { ReactNode, useEffect } from "react";
import { colors, shadows, zIndex } from "../design-tokens";
import { DialogStretch, DialogCloseButtonSize } from "./types";
import clsx from "clsx";

export interface CanaryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  stretch?: DialogStretch;
  hasCloseButton?: boolean;
  closeButtonSize?: DialogCloseButtonSize;
  stickyFooter?: boolean;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const stretchClasses: Record<DialogStretch, string> = {
  [DialogStretch.COMPACT]: "max-w-sm",
  [DialogStretch.NORMAL]: "max-w-lg",
  [DialogStretch.FILL]: "max-w-4xl",
};

const closeButtonSizes: Record<DialogCloseButtonSize, number> = {
  [DialogCloseButtonSize.DEFAULT]: 24,
  [DialogCloseButtonSize.LARGE]: 32,
  [DialogCloseButtonSize.TABLET]: 40,
};

export default function CanaryDialog({
  isOpen,
  onClose,
  title,
  stretch = DialogStretch.NORMAL,
  hasCloseButton = true,
  closeButtonSize = DialogCloseButtonSize.DEFAULT,
  stickyFooter = false,
  children,
  footer,
  className = "",
}: CanaryDialogProps) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const iconSize = closeButtonSizes[closeButtonSize];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: zIndex.modal,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-white rounded-lg w-full max-h-[90vh] overflow-hidden flex flex-col",
          stretchClasses[stretch],
          className
        )}
        style={{ boxShadow: shadows.xl }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || hasCloseButton) && (
          <div
            className="flex items-center justify-between px-6 py-4 shrink-0"
            style={{ borderBottom: `1px solid ${colors.colorBlack6}` }}
          >
            {title && (
              <h2
                className="text-lg font-medium"
                style={{ color: colors.colorBlack1 }}
              >
                {title}
              </h2>
            )}
            {hasCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded hover:bg-gray-100 focus:outline-none p-1 ml-auto"
                aria-label="Close dialog"
              >
                <svg
                  width={iconSize}
                  height={iconSize}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke={colors.colorBlack3}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div
            className={clsx(
              "px-6 py-4 shrink-0",
              stickyFooter && "sticky bottom-0 bg-white"
            )}
            style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
