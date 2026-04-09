import React from "react";
import clsx from "clsx";
import { colors } from "../design-tokens";
import { StepsOrientation } from "./types";

export interface CanaryStepsProps {
  steps: Array<{ label: string; description?: string }>;
  currentStep: number;
  orientation?: StepsOrientation;
  className?: string;
}

const CanarySteps: React.FC<CanaryStepsProps> = ({
  steps,
  currentStep,
  orientation = StepsOrientation.HORIZONTAL,
  className,
}) => {
  const isHorizontal = orientation === StepsOrientation.HORIZONTAL;

  return (
    <div
      className={clsx(
        "flex",
        isHorizontal ? "flex-row items-start" : "flex-col",
        className
      )}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            {/* Step item */}
            <div
              className={clsx(
                "flex",
                isHorizontal
                  ? "flex-col items-center"
                  : "flex-row items-start"
              )}
            >
              {/* Circle */}
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: isCompleted
                    ? colors.colorBlueDark1
                    : "transparent",
                  border: isCompleted
                    ? "none"
                    : `2px solid ${isCurrent ? colors.colorBlueDark1 : colors.colorBlack5}`,
                }}
              >
                {isCompleted ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span
                    className="text-xs font-medium leading-none"
                    style={{
                      color: isCurrent
                        ? colors.colorBlueDark1
                        : colors.colorBlack4,
                    }}
                  >
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Label and description */}
              <div className={clsx(isHorizontal ? "mt-2 text-center" : "ml-3")}>
                <div
                  className={clsx(
                    "text-xs",
                    isCurrent ? "font-semibold" : "font-normal"
                  )}
                  style={{
                    color: isCurrent
                      ? colors.colorBlack1
                      : colors.colorBlack3,
                  }}
                >
                  {step.label}
                </div>
                {step.description && (
                  <div
                    className="text-xs"
                    style={{ color: colors.colorBlack4 }}
                  >
                    {step.description}
                  </div>
                )}
              </div>
            </div>

            {/* Connecting line */}
            {!isLast && (
              <div
                className={clsx(
                  isHorizontal
                    ? "flex-1 self-center mt-0"
                    : "self-start"
                )}
                style={
                  isHorizontal
                    ? {
                        height: 2,
                        marginTop: 0,
                        // Vertically center with the circle (12px from top)
                        position: "relative",
                        top: 12,
                        marginLeft: 4,
                        marginRight: 4,
                        backgroundColor:
                          index < currentStep - 1
                            ? colors.colorBlueDark1
                            : colors.colorBlack5,
                      }
                    : {
                        width: 2,
                        height: 24,
                        marginLeft: 11, // center under 24px circle
                        marginTop: 4,
                        marginBottom: 4,
                        backgroundColor:
                          index < currentStep - 1
                            ? colors.colorBlueDark1
                            : colors.colorBlack5,
                      }
                }
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CanarySteps;
