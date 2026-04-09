import { colors } from "../design-tokens";
import { ProgressBarVariant } from "./types";
import clsx from "clsx";

export interface CanaryProgressBarProps {
  variant?: ProgressBarVariant;
  totalSteps?: number;
  currentStep?: number;
  progress?: number;
  showLabel?: boolean;
  className?: string;
}

export default function CanaryProgressBar({
  variant = ProgressBarVariant.CONTINUOUS,
  totalSteps = 4,
  currentStep = 0,
  progress = 0,
  showLabel = false,
  className,
}: CanaryProgressBarProps) {
  if (variant === ProgressBarVariant.CONTINUOUS) {
    const clampedProgress = Math.min(100, Math.max(0, progress));

    return (
      <div className={clsx("w-full", className)}>
        {showLabel && (
          <div
            className="text-xs font-medium mb-1"
            style={{ color: colors.colorBlack2 }}
          >
            {Math.round(clampedProgress)}%
          </div>
        )}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: 8, backgroundColor: colors.colorBlack6 }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${clampedProgress}%`,
              backgroundColor: colors.colorBlueDark1,
              transition: "width 200ms ease-in-out",
            }}
          />
        </div>
      </div>
    );
  }

  // STEPS variant
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div className={clsx("flex items-center w-full", className)}>
      {steps.map((stepIndex) => {
        const isCompleted = stepIndex < currentStep;
        const isCurrent = stepIndex === currentStep;

        return (
          <div key={stepIndex} className="flex items-center flex-1 last:flex-none">
            {/* Circle */}
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{
                width: 24,
                height: 24,
                backgroundColor: isCompleted ? colors.colorBlueDark1 : colors.colorWhite,
                border: `2px solid ${
                  isCompleted || isCurrent ? colors.colorBlueDark1 : colors.colorBlack6
                }`,
              }}
            >
              {isCompleted && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 6L5 8.5L9.5 3.5"
                    stroke={colors.colorWhite}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* Line connector (not after last step) */}
            {stepIndex < totalSteps - 1 && (
              <div
                className="flex-1 mx-1"
                style={{
                  height: 2,
                  backgroundColor: isCompleted ? colors.colorBlueDark1 : colors.colorBlack6,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
