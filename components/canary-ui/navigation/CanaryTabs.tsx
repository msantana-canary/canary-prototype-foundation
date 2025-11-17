import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export type TabVariant = "rounded" | "text" | "segmented";
export type TabSize = "normal" | "compact";

export interface CanaryTab {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface CanaryTabsProps {
  tabs: CanaryTab[];
  variant?: TabVariant;
  size?: TabSize;
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function CanaryTabs({
  tabs,
  variant = "rounded",
  size = "normal",
  defaultTab,
  onChange,
  className = "",
}: CanaryTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [pressedTab, setPressedTab] = useState<string | null>(null);

  const handleTabClick = (tabId: string, isDisabled?: boolean) => {
    if (isDisabled) return;
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  // Rounded Tabs Variant
  if (variant === "rounded") {
    return (
      <div className={`w-full ${className}`}>
        {/* Tab Headers */}
        <div
          className="inline-flex rounded-full p-1 gap-1 mb-4"
          style={{
            backgroundColor: colors.black6,
          }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.disabled)}
                disabled={tab.disabled}
                className={clsx(
                  "flex items-center gap-2 px-6 py-2",
                  "text-[14px] font-medium font-['Roboto',sans-serif]",
                  "rounded-full transition-all duration-200",
                  "focus:outline-none",
                  tab.disabled
                    ? "cursor-not-allowed opacity-50"
                    : isActive
                    ? "cursor-pointer"
                    : "cursor-pointer hover:shadow-[0px_4px_0px_0px_#CCCCCC]"
                )}
                style={{
                  backgroundColor: isActive ? colors.blueDark1 : colors.black6,
                  color: isActive ? colors.white : colors.black1,
                }}
              >
                {tab.icon && <span>{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="py-4">{activeTabContent}</div>
      </div>
    );
  }

  // Segmented Tabs Variant
  if (variant === "segmented") {
    const isCompactSegmented = size === "compact";
    const segmentedFontSize = isCompactSegmented ? "14px" : "16px";

    return (
      <div className={`w-full ${className}`}>
        {/* Tab Headers */}
        <div
          className="inline-flex items-start gap-px rounded-lg"
          style={{
            border: `1px solid ${colors.black6}`,
            overflow: "visible",
          }}
        >
          {tabs.map((tab, index) => {
            const isActive = tab.id === activeTab;
            const isFirst = index === 0;
            const isLast = index === tabs.length - 1;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.disabled)}
                disabled={tab.disabled}
                className={clsx(
                  "flex items-center justify-center px-6 py-4",
                  "font-medium font-['Roboto',sans-serif]",
                  "transition-all duration-200",
                  "focus:outline-none",
                  isFirst && "rounded-l-lg",
                  isLast && "rounded-r-lg",
                  tab.disabled && "cursor-not-allowed opacity-50",
                  !tab.disabled && !isActive && "hover:shadow-[0px_4px_0px_0px_#CCCCCC]"
                )}
                style={{
                  fontSize: segmentedFontSize,
                  backgroundColor: isActive ? colors.blueDark1 : colors.white,
                  color: isActive ? colors.white : colors.black1,
                  lineHeight: "1.5",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="py-4">{activeTabContent}</div>
      </div>
    );
  }

  // Text Tabs Variant
  const isCompact = size === "compact";
  const fontSize = isCompact ? "14px" : "16px";
  const lineHeight = isCompact ? "1.5" : "24px";
  const verticalPadding = isCompact ? "py-1" : "py-2";

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex items-start">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const isPressed = pressedTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              onMouseDown={() => !tab.disabled && setPressedTab(tab.id)}
              onMouseUp={() => setPressedTab(null)}
              onMouseLeave={() => setPressedTab(null)}
              disabled={tab.disabled}
              className={clsx(
                "flex flex-col items-start overflow-clip relative shrink-0",
                "focus:outline-none transition-all duration-200",
                tab.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {/* Tab Label and Badge Container */}
              <div
                className={clsx(
                  "flex gap-2 items-center justify-center px-4",
                  verticalPadding,
                  !tab.disabled && "cursor-pointer transition-colors duration-200",
                  !tab.disabled && !isActive && !isPressed && "hover:bg-black/5 focus-within:bg-black/5",
                  !tab.disabled && !isActive && isPressed && "bg-black/10"
                )}
              >
                <span
                  className="font-medium font-['Roboto',sans-serif] text-center whitespace-nowrap"
                  style={{
                    fontSize,
                    color: isActive ? colors.blueDark1 : colors.black2,
                    lineHeight,
                  }}
                >
                  {tab.label}
                </span>
                {tab.badge && (
                  <div
                    className="flex items-center justify-center px-1 rounded-full"
                    style={{
                      backgroundColor: colors.pink1,
                      minWidth: "16px",
                      height: "16px",
                    }}
                  >
                    <span
                      className="text-[11px] font-medium text-center"
                      style={{
                        color: colors.white,
                        lineHeight: "16px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {tab.badge}
                    </span>
                  </div>
                )}
              </div>
              {/* Bottom Border */}
              <div
                className="w-full h-1"
                style={{
                  backgroundColor: isActive ? colors.blueDark1 : "transparent",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="py-4">{activeTabContent}</div>
    </div>
  );
}
