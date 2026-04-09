import { ReactNode, useEffect } from "react";
import { colors, shadows, zIndex } from "../design-tokens";
import clsx from "clsx";

export interface CanarySideSheetProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large";
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const sizeWidths: Record<string, number> = {
  small: 320,
  medium: 480,
  large: 640,
};

export default function CanarySideSheet({
  isOpen,
  onClose,
  size = "medium",
  header,
  children,
  footer,
  className = "",
}: CanarySideSheetProps) {
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

  const width = sizeWidths[size] ?? sizeWidths.medium;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: zIndex.modal,
        }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={clsx(
          "fixed right-0 top-0 bottom-0 bg-white flex flex-col",
          className
        )}
        style={{
          width: `${width}px`,
          boxShadow: shadows.xl,
          zIndex: zIndex.modal + 1,
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-4 flex items-center justify-between shrink-0"
          style={{ borderBottom: `1px solid ${colors.colorBlack6}` }}
        >
          <div className="flex-1">{header}</div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded hover:bg-gray-100 focus:outline-none p-1 ml-2"
            aria-label="Close side sheet"
          >
            <svg
              width="24"
              height="24"
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
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div
            className="px-6 py-4 shrink-0"
            style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
}
