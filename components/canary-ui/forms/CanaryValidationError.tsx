import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryValidationErrorProps {
  error?: string;
  warning?: string;
  className?: string;
}

export default function CanaryValidationError({
  error,
  warning,
  className = "",
}: CanaryValidationErrorProps) {
  if (!error && !warning) return null;

  const message = error || warning;
  const textColor = error ? colors.danger : colors.warning;

  return (
    <p
      className={clsx("mt-1 text-[12px]", className)}
      style={{ color: textColor }}
    >
      {message}
    </p>
  );
}
