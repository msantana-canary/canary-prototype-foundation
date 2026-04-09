import { colors } from "../design-tokens";
import clsx from "clsx";
import { LabelSize } from "./types";

export interface CanaryFormLabelProps {
  label: string;
  forElementId?: string;
  size?: LabelSize;
  isRequired?: boolean;
  className?: string;
}

export default function CanaryFormLabel({
  label,
  forElementId,
  size = LabelSize.NORMAL,
  isRequired = false,
  className = "",
}: CanaryFormLabelProps) {
  const sizeMap = {
    [LabelSize.NORMAL]: "14px",
    [LabelSize.LARGE]: "16px",
    [LabelSize.TABLET]: "18px",
  };

  return (
    <label
      htmlFor={forElementId}
      className={clsx("block", className)}
      style={{
        fontSize: sizeMap[size],
        fontWeight: 500,
        color: colors.colorBlack2,
      }}
    >
      {label}
      {isRequired && (
        <span style={{ color: colors.danger }} className="ml-0.5">
          *
        </span>
      )}
    </label>
  );
}
