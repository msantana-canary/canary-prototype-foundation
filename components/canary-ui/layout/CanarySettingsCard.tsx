import React, { ReactNode } from "react";
import clsx from "clsx";
import { colors } from "../design-tokens";
import { SettingsCardState } from "./types";

export interface CanarySettingsCardProps {
  title: string;
  subtitle?: string;
  state?: SettingsCardState;
  onStateChange?: (state: SettingsCardState) => void;
  onSave?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  headerAction?: ReactNode;
  className?: string;
}

const CanarySettingsCard: React.FC<CanarySettingsCardProps> = ({
  title,
  subtitle,
  state = SettingsCardState.VIEW,
  onStateChange,
  onSave,
  icon,
  children,
  headerAction,
  className,
}) => {
  const isEditable = state === SettingsCardState.EDIT || state === SettingsCardState.NEW;
  const isDisabled = state === SettingsCardState.DISABLED;

  const handleCancel = () => {
    onStateChange?.(SettingsCardState.VIEW);
  };

  const handleSave = () => {
    onSave?.();
    onStateChange?.(SettingsCardState.VIEW);
  };

  const handleEdit = () => {
    onStateChange?.(SettingsCardState.EDIT);
  };

  return (
    <div
      className={clsx(
        "bg-white rounded-lg overflow-hidden",
        isDisabled && "opacity-50 pointer-events-none",
        className
      )}
      style={{ border: `1px solid ${colors.colorBlack6}` }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${colors.colorBlack6}` }}
      >
        {icon && (
          <div
            className="shrink-0"
            style={{ width: 24, height: 24, color: colors.colorBlack3 }}
          >
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div
            className="text-base font-semibold"
            style={{ color: colors.colorBlack1 }}
          >
            {title}
          </div>
          {subtitle && (
            <div className="text-sm" style={{ color: colors.colorBlack3 }}>
              {subtitle}
            </div>
          )}
        </div>
        <div className="shrink-0">
          {headerAction
            ? headerAction
            : state === SettingsCardState.VIEW && (
                <button
                  type="button"
                  className="text-sm cursor-pointer bg-transparent border-none"
                  style={{ color: colors.colorBlueDark1 }}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              )}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-4">{children}</div>

      {/* Footer - only in EDIT/NEW states */}
      {isEditable && (
        <div
          className="px-6 py-4 flex justify-end gap-2"
          style={{ borderTop: `1px solid ${colors.colorBlack6}` }}
        >
          <button
            type="button"
            className="rounded px-4 py-2 text-sm cursor-pointer"
            style={{
              border: `1px solid ${colors.colorBlack5}`,
              backgroundColor: colors.colorWhite,
              color: colors.colorBlack2,
            }}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded px-4 py-2 text-sm cursor-pointer border-none"
            style={{
              backgroundColor: colors.colorBlueDark1,
              color: colors.colorWhite,
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CanarySettingsCard;
