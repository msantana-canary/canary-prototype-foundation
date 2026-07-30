import { CSSProperties, ReactNode, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiUnfoldMoreHorizontal,
  mdiArrowLeft,
  mdiCogOutline,
  mdiHelpCircleOutline,
  mdiAccountCircle,
  mdiAccountGroupOutline,
} from "@mdi/js";
import CanaryLogo from "./CanaryLogo";
import { SidebarVariant } from "./types";
import type { SidebarSection, SidebarNavigationItem } from "./CanarySidebar";
import {
  standardMainSidebarSectionsV2,
  standardSettingsSidebarSectionsV2,
} from "./standard-sidebar-sections-v2";
import { shellV2 } from "./shell-v2-tokens";

export interface SidebarV2Property {
  /** Hotel/property name — truncates when long */
  name: string;
  /** Property code shown to the right of the name */
  code?: string;
}

export interface SidebarV2User {
  /** Displayed in the footer — first name reads best at this size */
  name: string;
  avatarUrl?: string;
}

export interface SidebarV2TeamChat {
  label?: string;
  badge?: string | number;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface CanarySidebarV2Props {
  /** MAIN (blue) or SETTINGS (dark). CUSTOM renders the blue skin with your own sections. */
  variant?: SidebarVariant;
  /** Defaults to the standard V2 sections for the chosen variant */
  sections?: SidebarSection[];
  selectedItemId?: string;
  onItemClick?: (itemId: string) => void;

  // ===== Property switcher (top) =====
  property?: SidebarV2Property;
  onPropertyClick?: () => void;

  // ===== Back row (SETTINGS) =====
  backLabel?: string;
  onBack?: () => void;

  // ===== Bottom =====
  /** Pass `false` to hide the Team Chat row entirely */
  teamChat?: SidebarV2TeamChat | false;
  user?: SidebarV2User;
  onUserClick?: () => void;
  onSettingsClick?: () => void;
  onSupportClick?: () => void;
  /** Show the Canary wordmark above the bottom rows */
  showLogo?: boolean;

  width?: number;
  className?: string;
}

/** Truncation that does not depend on the consumer's Tailwind build. */
const truncateStyle: CSSProperties = {
  minWidth: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

/** Renders a caller-supplied icon node at a fixed box size. */
function NavIcon({ size, children }: { size: number; children: ReactNode }) {
  return (
    <span
      className="canary-shell-v2-icon"
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}

function Badge({ value }: { value: string | number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        padding: "0 5px",
        backgroundColor: shellV2.badgeBg,
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: 500,
        lineHeight: "18px",
      }}
    >
      {value}
    </span>
  );
}

export default function CanarySidebarV2({
  variant = SidebarVariant.MAIN,
  sections,
  selectedItemId,
  onItemClick,
  property,
  onPropertyClick,
  backLabel = "Back",
  onBack,
  teamChat,
  user,
  onUserClick,
  onSettingsClick,
  onSupportClick,
  showLogo = true,
  width = shellV2.sidebarWidth,
  className,
}: CanarySidebarV2Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoveredFooterId, setHoveredFooterId] = useState<string | null>(null);

  const isSettings = variant === SidebarVariant.SETTINGS;

  const resolvedSections =
    sections ??
    (variant === SidebarVariant.CUSTOM
      ? []
      : isSettings
        ? standardSettingsSidebarSectionsV2
        : standardMainSidebarSectionsV2);

  const backgroundColor = isSettings
    ? shellV2.sidebarBgSettings
    : shellV2.sidebarBgMain;

  // Team Chat and the account footer are main-navigation chrome; the settings
  // sidebar ends at the wordmark.
  const showTeamChat = !isSettings && teamChat !== false;
  const showFooter =
    !isSettings && Boolean(user || onSettingsClick || onSupportClick);

  const renderNavItem = (
    item: SidebarNavigationItem,
    options?: { forceBackground?: string; selected?: boolean }
  ) => {
    const isSelected = options?.selected ?? selectedItemId === item.id;
    const isHovered = hoveredId === item.id;
    const isDisabled = Boolean(item.isDisabled);

    let background = options?.forceBackground ?? "transparent";
    if (isSelected) background = shellV2.sidebarSelectedBg;
    else if (isHovered && !isDisabled && !options?.forceBackground)
      background = shellV2.sidebarHoverBg;

    const color = isSelected
      ? shellV2.sidebarSelectedLabel
      : isDisabled
        ? shellV2.sidebarLabelDisabled
        : shellV2.sidebarLabel;

    return (
      <button
        key={item.id}
        type="button"
        disabled={isDisabled}
        onClick={() => {
          if (isDisabled) return;
          item.onClick?.();
          onItemClick?.(item.id);
        }}
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          textAlign: "left",
          height: shellV2.navItemHeight,
          borderRadius: shellV2.navItemRadius,
          padding: `0 ${shellV2.navItemPaddingX}px`,
          gap: 8,
          backgroundColor: background,
          color,
          transition: "background-color 120ms ease",
          cursor: isDisabled ? "default" : "pointer",
        }}
      >
        {item.icon && (
          <span
            style={{
              display: "flex",
              flex: "none",
              opacity: isSelected || isDisabled ? 1 : 0.85,
            }}
          >
            <NavIcon size={16}>{item.icon}</NavIcon>
          </span>
        )}
        <span style={{ ...truncateStyle, flex: 1, fontSize: 14, lineHeight: "22px" }}>
          {item.label}
        </span>
        {item.badge !== undefined && item.badge !== null && (
          <Badge value={item.badge} />
        )}
      </button>
    );
  };

  const divider = (key: string, spaced = true) => (
    <div
      key={key}
      style={{
        height: 1,
        flex: "none",
        backgroundColor: shellV2.sidebarDivider,
        marginTop: spaced ? shellV2.sectionGap : 0,
        marginBottom: spaced ? shellV2.sectionGap : 0,
      }}
    />
  );

  const footerButton = (
    key: string,
    icon: ReactNode,
    label: string,
    onClick?: () => void
  ) => {
    const isHovered = hoveredFooterId === key;
    return (
    <button
      key={key}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHoveredFooterId(key)}
      onMouseLeave={() => setHoveredFooterId(null)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        minWidth: 0,
        height: shellV2.footerButtonHeight,
        gap: 2,
        // Only the hovered third lights up; the container clips the corners.
        backgroundColor: isHovered ? shellV2.sidebarHoverBg : "transparent",
        color: isHovered ? shellV2.sidebarLabel : shellV2.sidebarLabelMuted,
        transition: "background-color 120ms ease, color 120ms ease",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <NavIcon size={20}>{icon}</NavIcon>
      <span style={{ ...truncateStyle, maxWidth: "100%", fontSize: 12, lineHeight: "18px" }}>
        {label}
      </span>
    </button>
    );
  };

  return (
    <aside
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "none",
        alignSelf: "stretch",
        height: "100%",
        width,
        backgroundColor,
      }}
    >
      {/* ===== Property switcher ===== */}
      {property && (
        <>
          <button
            type="button"
            onClick={onPropertyClick}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flex: "none",
              textAlign: "left",
              height: shellV2.propertySwitcherHeight,
              padding: `0 ${shellV2.navItemInset}px`,
              gap: 8,
              cursor: onPropertyClick ? "pointer" : "default",
            }}
          >
            <span
              style={{
                ...truncateStyle,
                color: "#FFFFFF",
                fontSize: 12,
                lineHeight: "18px",
              }}
            >
              {property.name}
            </span>
            {property.code && (
              <span
                style={{
                  flex: "none",
                  fontSize: 12,
                  lineHeight: "18px",
                  color: shellV2.sidebarLabelMuted,
                }}
              >
                {property.code}
              </span>
            )}
            <span
              style={{
                flex: "none",
                marginLeft: "auto",
                display: "flex",
                color: shellV2.sidebarLabelMuted,
              }}
            >
              <NavIcon size={16}>
                <Icon path={mdiUnfoldMoreHorizontal} size={1} />
              </NavIcon>
            </span>
          </button>
          {divider("divider-property", false)}
        </>
      )}

      {/* ===== Back row (settings) ===== */}
      {onBack && (
        <>
          <button
            type="button"
            onClick={onBack}
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flex: "none",
              textAlign: "left",
              height: shellV2.propertySwitcherHeight,
              padding: `0 ${shellV2.navItemInset}px`,
              gap: 8,
              color: shellV2.sidebarLabel,
              backgroundColor: isBackHovered
                ? shellV2.sidebarHoverBg
                : "transparent",
              transition: "background-color 120ms ease",
              cursor: "pointer",
            }}
          >
            <NavIcon size={20}>
              <Icon path={mdiArrowLeft} size={1} />
            </NavIcon>
            <span style={{ fontSize: 14, lineHeight: "22px" }}>{backLabel}</span>
          </button>
          {divider("divider-back", false)}
        </>
      )}

      {/* ===== Navigation ===== */}
      <nav
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          paddingTop: shellV2.sectionGap + 4,
          paddingBottom: shellV2.sectionGap,
        }}
      >
        {resolvedSections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && divider(`divider-${section.id}`)}
            {section.title && (
              <div
                style={{
                  padding: `0 ${shellV2.navItemInset + shellV2.navItemPaddingX}px`,
                  marginBottom: 4,
                  fontSize: 12,
                  lineHeight: "18px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: shellV2.sidebarLabelMuted,
                }}
              >
                {section.title}
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: shellV2.navItemGap,
                padding: `0 ${shellV2.navItemInset}px`,
              }}
            >
              {section.items.map((item) => renderNavItem(item))}
            </div>
          </div>
        ))}
        {resolvedSections.length > 0 && divider("divider-end")}
      </nav>

      {/* ===== Bottom ===== */}
      <div
        style={{
          flex: "none",
          display: "flex",
          flexDirection: "column",
          paddingTop: 16,
          paddingBottom: showFooter ? 0 : 24,
        }}
      >
        {showLogo && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: shellV2.sectionGap,
            }}
          >
            <div
              style={{
                width: shellV2.logoWidth,
                height: shellV2.logoHeight,
                opacity: shellV2.logoOpacity,
              }}
            >
              <CanaryLogo />
            </div>
          </div>
        )}

        {showTeamChat && (
          <div
            style={{
              padding: `0 ${shellV2.navItemInset}px`,
              marginBottom: shellV2.sectionGap,
            }}
          >
            {renderNavItem(
              {
                id: "team-chat",
                label: (teamChat as SidebarV2TeamChat)?.label ?? "Team Chat",
                icon: <Icon path={mdiAccountGroupOutline} size={1} />,
                badge: (teamChat as SidebarV2TeamChat)?.badge,
                onClick: (teamChat as SidebarV2TeamChat)?.onClick,
              },
              {
                forceBackground: shellV2.teamChatBg,
                selected: (teamChat as SidebarV2TeamChat)?.isSelected ?? false,
              }
            )}
          </div>
        )}

        {showFooter && (
          <div
            style={{
              padding: `0 ${shellV2.navItemInset}px ${shellV2.navItemInset}px`,
            }}
          >
            {/* Self-contained container, inset to line up with the Team Chat row */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                borderRadius: shellV2.navItemRadius,
                overflow: "hidden",
                backgroundColor: isSettings
                  ? shellV2.footerPanelBgSettings
                  : shellV2.footerPanelBgMain,
              }}
            >
              {footerButton(
                "user",
                user?.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Icon path={mdiAccountCircle} size={1} />
                ),
                user?.name ?? "Account",
                onUserClick
              )}
              {footerButton(
                "settings",
                <Icon path={mdiCogOutline} size={1} />,
                "Settings",
                onSettingsClick
              )}
              {footerButton(
                "support",
                <Icon path={mdiHelpCircleOutline} size={1} />,
                "Support",
                onSupportClick
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
