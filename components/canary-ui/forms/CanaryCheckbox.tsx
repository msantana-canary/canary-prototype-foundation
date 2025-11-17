import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiMinusBox } from "@mdi/js";

export type CheckboxSize = "normal" | "large" | "xlarge";

export interface CanaryCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: CheckboxSize;
  isDisabled?: boolean;
  indeterminate?: boolean;
  error?: string;
  helperText?: string;
}

const CanaryCheckbox = forwardRef<HTMLInputElement, CanaryCheckboxProps>(
  (
    {
      label,
      size = "large",
      isDisabled = false,
      indeterminate = false,
      error,
      helperText,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    // Size configurations
    const sizeConfig = {
      normal: { iconSize: 1, fontSize: "14px", gap: "8px" },      // Desktop - 24px icon
      large: { iconSize: 1, fontSize: "18px", gap: "8px" },       // Mobile - 24px icon
      xlarge: { iconSize: 1.33, fontSize: "28px", gap: "8px" },   // Tablet - 32px icon
    };

    const config = sizeConfig[size];

    // Determine which icon to show
    const getIcon = () => {
      if (indeterminate) {
        return mdiMinusBox;
      }
      if (inputProps.checked) {
        return mdiCheckboxMarked;
      }
      return mdiCheckboxBlankOutline;
    };

    return (
      <div className="w-full">
        <label
          className={clsx(
            "flex items-center pl-1 pr-2 py-2",
            isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            className
          )}
          style={{ gap: config.gap }}
        >
          <input
            ref={ref}
            type="checkbox"
            disabled={isDisabled}
            className="sr-only"
            {...inputProps}
          />

          <Icon
            path={getIcon()}
            size={config.iconSize}
            color={colors.colorBlueDark1}
            className="shrink-0"
          />

          {label && (
            <span
              className="font-normal font-['Roboto',sans-serif] select-none flex-1"
              style={{
                fontSize: config.fontSize,
                lineHeight: "1.5",
                color: colors.colorBlack1,
              }}
            >
              {label}
            </span>
          )}
        </label>

        {error && (
          <div className="mt-1 ml-8 inline-block px-2 py-[2px] rounded" style={{ backgroundColor: colors.colorRed5 }}>
            <p className="text-[12px] leading-[1.5]" style={{ color: colors.colorError }}>
              {error}
            </p>
          </div>
        )}

        {helperText && !error && (
          <p className="text-[12px] mt-1 ml-8 leading-[1.5]" style={{ color: colors.colorBlack3 }}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

CanaryCheckbox.displayName = "CanaryCheckbox";

export default CanaryCheckbox;
