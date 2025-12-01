import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import { SidebarVariant, NavigationItemState } from "./types";
import CanaryLogo from "./CanaryLogo";
import clsx from "clsx";
import { standardMainSidebarSections, standardSettingsSidebarSections } from "./standard-sidebar-sections";

export interface SidebarNavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  badge?: string | number;
}

export interface SidebarSection {
  id: string;
  title?: string; // For Settings variant section headers
  items: SidebarNavigationItem[];
}

export interface CanarySidebarProps {
  variant?: SidebarVariant;
  sections?: SidebarSection[]; // Optional - auto-uses standard sections if not provided
  logo?: ReactNode;
  title?: string; // For Settings variant header (e.g., "General Settings")
  backButton?: ReactNode; // For Settings variant
  selectedItemId?: string;
  onItemClick?: (itemId: string) => void;
  width?: number;
  className?: string;
}

export default function CanarySidebar({
  variant = SidebarVariant.MAIN,
  sections,
  logo,
  title,
  backButton,
  selectedItemId,
  onItemClick,
  width, // Remove default, let it auto-size
  className = "",
}: CanarySidebarProps) {
  const [focusedItemId, setFocusedItemId] = useState<string | null>(null);
  const [pressedItemId, setPressedItemId] = useState<string | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  // Auto-use standard sections if not provided (except for CUSTOM variant)
  const getDefaultSections = (): SidebarSection[] => {
    if (variant === SidebarVariant.CUSTOM) {
      return []; // CUSTOM variant requires explicit sections
    }
    if (variant === SidebarVariant.SETTINGS) {
      return standardSettingsSidebarSections;
    }
    return standardMainSidebarSections; // Default to MAIN
  };

  const resolvedSections = sections ?? getDefaultSections();

  // Variant colors based on Figma specs
  const getBackgroundColor = (): string => {
    switch (variant) {
      case SidebarVariant.MAIN:
        return "#375492"; // Custom blue for sidebar (not in design tokens)
      case SidebarVariant.SETTINGS:
        return colors.colorBlack2; // $color-black-2 (#333333)
      case SidebarVariant.CUSTOM:
        return "#375492"; // Default to MAIN color for CUSTOM variant
      default:
        return "#375492";
    }
  };

  const backgroundColor = getBackgroundColor();

  const handleItemClick = (item: SidebarNavigationItem) => {
    if (item.isDisabled) return;
    // Clear pressed state immediately on click
    setPressedItemId(null);
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
  };

  const getItemState = (item: SidebarNavigationItem): NavigationItemState => {
    if (item.isDisabled) return NavigationItemState.DISABLED;
    if (selectedItemId === item.id) return NavigationItemState.SELECTED;
    if (pressedItemId === item.id) return NavigationItemState.ON_PRESS;
    if (focusedItemId === item.id) return NavigationItemState.FOCUS;
    if (hoveredItemId === item.id) return NavigationItemState.FOCUS; // Hover uses same style as focus
    return NavigationItemState.DEFAULT;
  };

  // Get icon opacity based on Figma state specs
  const getIconOpacity = (state: NavigationItemState): number => {
    switch (state) {
      case NavigationItemState.SELECTED:
        return 1; // 100%
      case NavigationItemState.DISABLED:
        return 0.15; // 15%
      case NavigationItemState.DEFAULT:
      case NavigationItemState.FOCUS:
      case NavigationItemState.ON_PRESS:
      default:
        return 0.5; // 50%
    }
  };

  return (
    <aside
      className={clsx(
        "flex flex-col shrink-0 w-[180px] h-full",
        className
      )}
      style={{
        backgroundColor,
      }}
    >
      {/* Logo or Back Button */}
      {backButton && variant === SidebarVariant.SETTINGS ? (
        <div className="flex items-center pt-4 pb-4 px-4 shrink-0">
          {backButton}
        </div>
      ) : (
        <div className="flex items-center justify-center pt-6 pb-6 shrink-0">
          <div style={{ opacity: 0.35, width: "140px", height: "24px" }}>
            {logo !== undefined ? logo : <CanaryLogo />}
          </div>
        </div>
      )}

      {/* Title Header (for Settings variant) */}
      {title && (
        <div className="px-4 pb-4 shrink-0">
          <h2 className="text-[16px] font-medium text-white" style={{ fontFamily: "Roboto, sans-serif" }}>
            {title}
          </h2>
        </div>
      )}

      {/* Navigation Sections - scrollable area */}
      <nav className="flex-1 overflow-y-auto flex flex-col gap-4 w-[180px] mx-auto pb-8">
        {resolvedSections.map((section, sectionIndex) => (
          <div key={section.id}>
            {/* Divider before section (except first) */}
            {sectionIndex > 0 && (
              <div
                className="h-[1px] mb-4"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              />
            )}

            {/* Section Title (for Settings variant) */}
            {section.title && (
              <div
                className="pl-4 pb-2 text-[14px] font-medium"
                style={{
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: "22px",
                }}
              >
                {section.title}
              </div>
            )}

            {/* Section Items - no gap, items stack directly */}
            <div className="flex flex-col">
              {section.items.map((item) => {
                const state = getItemState(item);
                const iconOpacity = getIconOpacity(state);
                const isSelected = state === NavigationItemState.SELECTED;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    onFocus={() => setFocusedItemId(item.id)}
                    onBlur={() => setFocusedItemId(null)}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => {
                      setPressedItemId(null);
                      setHoveredItemId(null);
                    }}
                    onMouseDown={() => setPressedItemId(item.id)}
                    onMouseUp={() => setPressedItemId(null)}
                    disabled={item.isDisabled}
                    className="relative h-10 w-full flex items-center focus:outline-none"
                    style={{
                      color: isSelected
                        ? variant === SidebarVariant.MAIN
                          ? "#375492"
                          : "#333333"
                        : state === NavigationItemState.DISABLED
                        ? "rgba(255, 255, 255, 0.3)"
                        : colors.white,
                      cursor: item.isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    {/* Background - only for selected, focus, and onPress states */}
                    {/* Selected: white bg with 4px top/bottom, 8px left/right inset */}
                    {state === NavigationItemState.SELECTED && (
                      <div
                        className="absolute rounded-[4px] pointer-events-none"
                        style={{
                          backgroundColor: colors.white,
                          top: "4px",
                          bottom: "4px",
                          left: "8px",
                          right: "8px",
                        }}
                      />
                    )}
                    {/* Focus: 5% white bg with same inset */}
                    {state === NavigationItemState.FOCUS && (
                      <div
                        className="absolute rounded-[4px] pointer-events-none"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          top: "4px",
                          bottom: "4px",
                          left: "8px",
                          right: "8px",
                        }}
                      />
                    )}
                    {/* OnPress: 15% white bg with same inset */}
                    {state === NavigationItemState.ON_PRESS && (
                      <div
                        className="absolute rounded-[4px] pointer-events-none"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          top: "4px",
                          bottom: "4px",
                          left: "8px",
                          right: "8px",
                        }}
                      />
                    )}

                    {/* Icon - 16px from left, 24x24, centered vertically */}
                    {item.icon && (
                      <span
                        className="absolute left-4 flex items-center justify-center shrink-0 pointer-events-none"
                        style={{
                          width: "24px",
                          height: "24px",
                          opacity: isSelected ? 1 : iconOpacity,
                          zIndex: 1,
                          color: isSelected
                            ? variant === SidebarVariant.MAIN
                              ? "#375492"
                              : "#333333"
                            : "white",
                          filter: isSelected
                            ? variant === SidebarVariant.MAIN
                              ? "brightness(0) saturate(100%) invert(34%) sepia(50%) saturate(1000%) hue-rotate(196deg) brightness(88%) contrast(92%)"
                              : "brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)"
                            : "none",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}

                    {/* Label - 48px from left (16px + 24px icon + 8px gap), 14px font, 22px line-height */}
                    <span
                      className="absolute left-12 text-[14px] font-normal whitespace-nowrap pointer-events-none"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: "22px",
                        zIndex: 1,
                      }}
                    >
                      {item.label}
                    </span>

                    {/* Badge - 148px from left, 16x16, centered vertically */}
                    {item.badge && (
                      <span
                        className="absolute left-[148px] flex items-center justify-center pointer-events-none"
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "#f16682",
                          borderRadius: "8px",
                          zIndex: 1,
                        }}
                      >
                        <span
                          className="text-[12px] font-bold text-center"
                          style={{
                            color: colors.white,
                            lineHeight: "18px",
                            letterSpacing: "0.24px",
                          }}
                        >
                          {item.badge}
                        </span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
