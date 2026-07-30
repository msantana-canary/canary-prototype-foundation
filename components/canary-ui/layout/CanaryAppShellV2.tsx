import { ReactNode } from "react";
import CanarySidebarV2, {
  SidebarV2Property,
  SidebarV2TeamChat,
  SidebarV2User,
} from "../navigation/CanarySidebarV2";
import CanaryTopBarV2, {
  TopBarV2Copilot,
  TopBarV2Insight,
  TopBarV2ReservationStatus,
} from "../navigation/CanaryTopBarV2";
import type { SidebarSection } from "../navigation/CanarySidebar";
import {
  standardMainSidebarSectionsV2,
  standardSettingsSidebarSectionsV2,
} from "../navigation/standard-sidebar-sections-v2";
import { SidebarVariant } from "../navigation/types";
import { shellV2 } from "../navigation/shell-v2-tokens";

export interface CanaryAppShellV2Props {
  /** Main content of the application */
  children: ReactNode;

  // ===== Sidebar =====
  /** MAIN (blue) or SETTINGS (dark) */
  sidebarVariant?: SidebarVariant;
  /** Defaults to the standard V2 sections for the chosen variant */
  sidebarSections?: SidebarSection[];
  /** Currently selected sidebar item ID — also drives the top bar title */
  selectedSidebarItemId?: string;
  onSidebarItemClick?: (itemId: string) => void;
  /** Property switcher at the top of the sidebar */
  property?: SidebarV2Property;
  onPropertyClick?: () => void;
  /** Back row, shown on the settings sidebar */
  sidebarBackLabel?: string;
  onSidebarBack?: () => void;
  /** Team Chat row above the footer. Pass `false` to hide it. */
  teamChat?: SidebarV2TeamChat | false;
  /** Signed-in user, shown in the sidebar footer */
  user?: SidebarV2User;
  onUserClick?: () => void;
  onSettingsClick?: () => void;
  onSupportClick?: () => void;
  showSidebarLogo?: boolean;
  hideSidebar?: boolean;

  // ===== Top bar =====
  /**
   * Overrides the top bar title. When omitted the title is taken from the
   * selected sidebar item, so the two can never drift apart. Pass this when
   * the page title differs from the nav label (e.g. "F&B" → "Food & Beverage").
   */
  pageTitle?: string;
  /** Live stat beside the title, e.g. "35 guests are arriving today" */
  insight?: TopBarV2Insight;
  reservationStatus?: TopBarV2ReservationStatus;
  copilot?: TopBarV2Copilot;
  /** Extra controls rendered to the left of the pills */
  headerActions?: ReactNode;
  hideHeader?: boolean;

  // ===== Content =====
  /** Defaults to #FAFAFA */
  contentBackground?: string;
  /**
   * Defaults to "medium". Pass "none" for products that render their own
   * full-bleed chrome (tab bars, split panes) directly under the top bar.
   */
  contentPadding?: "none" | "small" | "medium" | "large";
  contentClassName?: string;
  className?: string;
}

const paddingMap = {
  none: 0,
  small: 16,
  medium: 24,
  large: 32,
};

/** Finds a nav item's label so the top bar title tracks the sidebar selection. */
function findItemLabel(
  sections: SidebarSection[],
  itemId?: string
): string | undefined {
  if (!itemId) return undefined;
  for (const section of sections) {
    for (const item of section.items) {
      if (item.id === itemId) return item.label;
    }
  }
  return undefined;
}

/**
 * CanaryAppShellV2 — the current Canary application shell.
 *
 * Sidebar (property switcher, navigation, Team Chat, account footer),
 * top bar (page title, insight link, Reservations and Copilot pills),
 * and the content area.
 *
 * Usage:
 * ```tsx
 * <CanaryAppShellV2
 *   property={{ name: "Days Inn & Suites by Wyndham Wausau", code: "38653" }}
 *   selectedSidebarItemId="messages"
 *   user={{ name: "Theresa" }}
 *   insight={{ label: "35 guests are arriving today" }}
 *   reservationStatus={{ isConnected: true }}
 *   copilot={{ message: "2 items need attention" }}
 * >
 *   <YourPageContent />
 * </CanaryAppShellV2>
 * ```
 */
export default function CanaryAppShellV2({
  children,
  // Sidebar
  sidebarVariant = SidebarVariant.MAIN,
  sidebarSections,
  selectedSidebarItemId,
  onSidebarItemClick,
  property,
  onPropertyClick,
  sidebarBackLabel,
  onSidebarBack,
  teamChat,
  user,
  onUserClick,
  onSettingsClick,
  onSupportClick,
  showSidebarLogo = true,
  hideSidebar = false,
  // Top bar
  pageTitle,
  insight,
  reservationStatus,
  copilot,
  headerActions,
  hideHeader = false,
  // Content
  contentBackground,
  contentPadding = "medium",
  contentClassName,
  className,
}: CanaryAppShellV2Props) {
  const resolvedSections =
    sidebarSections ??
    (sidebarVariant === SidebarVariant.CUSTOM
      ? []
      : sidebarVariant === SidebarVariant.SETTINGS
        ? standardSettingsSidebarSectionsV2
        : standardMainSidebarSectionsV2);

  const resolvedTitle =
    pageTitle ?? findItemLabel(resolvedSections, selectedSidebarItemId) ?? "";

  return (
    <div
      className={className}
      style={{
        display: "flex",
        height: "100vh",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {!hideSidebar && (
        <CanarySidebarV2
          variant={sidebarVariant}
          sections={sidebarSections}
          selectedItemId={selectedSidebarItemId}
          onItemClick={onSidebarItemClick}
          property={property}
          onPropertyClick={onPropertyClick}
          backLabel={sidebarBackLabel}
          onBack={onSidebarBack}
          teamChat={teamChat}
          user={user}
          onUserClick={onUserClick}
          onSettingsClick={onSettingsClick}
          onSupportClick={onSupportClick}
          showLogo={showSidebarLogo}
        />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {!hideHeader && (
          <CanaryTopBarV2
            title={resolvedTitle}
            insight={insight}
            reservationStatus={reservationStatus}
            copilot={copilot}
            actions={headerActions}
          />
        )}

        <main
          className={contentClassName}
          style={{
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            padding: paddingMap[contentPadding],
            backgroundColor: contentBackground ?? shellV2.contentBg,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
