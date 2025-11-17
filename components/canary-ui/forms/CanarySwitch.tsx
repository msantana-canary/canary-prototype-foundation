import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export type SwitchSize = "normal" | "large" | "xlarge";

export interface CanarySwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange"> {
  label?: string;
  size?: SwitchSize;
  isDisabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CanarySwitch = forwardRef<HTMLInputElement, CanarySwitchProps>(
  (
    { label, size = "normal", isDisabled = false, checked = false, onChange, className = "", ...inputProps },
    ref
  ) => {
    // Size configurations based on Figma specs
    const sizeConfig = {
      normal: {
        // Normal (Desktop) - 28px × 16px
        width: "28px",
        height: "16px",
        knobSize: "12px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "14px",
        fontSize: "14px",
        gap: "8px",
      },
      large: {
        // Large (Mobile) - 44px × 24px
        width: "44px",
        height: "24px",
        knobSize: "20px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "22px",
        fontSize: "18px",
        gap: "8px",
      },
      xlarge: {
        // XLarge (Tablet) - 56px × 30px
        width: "56px",
        height: "30px",
        knobSize: "26px",
        knobOffsetLeft: "2px",
        knobOffsetRight: "28px",
        fontSize: "28px",
        gap: "8px",
      },
    };

    const config = sizeConfig[size];

    const handleChange = () => {
      if (isDisabled) return;
      if (onChange) {
        onChange(!checked);
      }
    };

    return (
      <div className="w-full">
        <label
          className={clsx(
            "flex items-center",
            isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            className
          )}
          style={{ gap: config.gap }}
        >
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={isDisabled}
            onChange={handleChange}
            className="sr-only"
            {...inputProps}
          />

          {/* Switch Track */}
          <div
            className="relative shrink-0 transition-colors duration-200"
            style={{
              width: config.width,
              height: config.height,
              borderRadius: config.height,
              backgroundColor: checked ? colors.colorBlueDark1 : "#666666",
            }}
          >
            {/* Switch Knob */}
            <div
              className="absolute top-[2px] transition-all duration-200"
              style={{
                width: config.knobSize,
                height: config.knobSize,
                borderRadius: "50%",
                backgroundColor: colors.colorWhite,
                left: checked ? config.knobOffsetRight : config.knobOffsetLeft,
              }}
            />
          </div>

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
      </div>
    );
  }
);

CanarySwitch.displayName = "CanarySwitch";

export default CanarySwitch;
