import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiRadioboxMarked, mdiRadioboxBlank } from "@mdi/js";

export type RadioSize = "normal" | "large" | "xlarge";

export interface CanaryRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: RadioSize;
  isDisabled?: boolean;
  error?: string;
  helperText?: string;
}

const CanaryRadio = forwardRef<HTMLInputElement, CanaryRadioProps>(
  (
    { label, size = "large", isDisabled = false, error, helperText, className = "", ...inputProps },
    ref
  ) => {
    // Size configurations
    const sizeConfig = {
      normal: { iconSize: 1, fontSize: "14px", gap: "8px" },      // Desktop - 24px icon
      large: { iconSize: 1, fontSize: "18px", gap: "8px" },       // Mobile - 24px icon
      xlarge: { iconSize: 1.33, fontSize: "28px", gap: "8px" },   // Tablet - 32px icon
    };

    const config = sizeConfig[size];

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
            type="radio"
            disabled={isDisabled}
            className="sr-only"
            {...inputProps}
          />

          <Icon
            path={inputProps.checked ? mdiRadioboxMarked : mdiRadioboxBlank}
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
            <p className="text-[12px] leading-[1.5]" style={{ color: colors.error }}>
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

CanaryRadio.displayName = "CanaryRadio";

export default CanaryRadio;
