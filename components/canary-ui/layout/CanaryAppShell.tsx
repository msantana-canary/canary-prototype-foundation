import { ReactNode } from "react";
import clsx from "clsx";
import CanarySidebar, { SidebarSection } from "../navigation/CanarySidebar";
import CanaryPageHeader, {
  UserProfile,
  ReservationStatus,
} from "../navigation/CanaryPageHeader";
import { SidebarVariant } from "../navigation/types";
import { standardMainSidebarSections } from "../navigation/standard-sidebar-sections";
import { colors } from "../design-tokens";

export interface CanaryAppShellProps {
  /** Main content of the application */
  children: ReactNode;

  // ===== Sidebar Props =====
  /** Sidebar variant - MAIN, SETTINGS, or CUSTOM */
  sidebarVariant?: SidebarVariant;
  /** Custom sidebar sections (defaults to standardMainSidebarSections) */
  sidebarSections?: SidebarSection[];
  /** Currently selected sidebar item ID */
  selectedSidebarItemId?: string;
  /** Called when a sidebar item is clicked */
  onSidebarItemClick?: (itemId: string) => void;
  /** Title for SETTINGS sidebar variant */
  sidebarTitle?: string;
  /** Back button for SETTINGS sidebar variant */
  sidebarBackButton?: ReactNode;
  /** Hide the sidebar entirely */
  hideSidebar?: boolean;

  // ===== Page Header Props =====
  /** Property/Hotel name */
  propertyName?: string;
  /** Called when property selector is clicked */
  onPropertyClick?: () => void;
  /** User profile information */
  userProfile?: UserProfile;
  /** Called when user profile is clicked */
  onUserProfileClick?: () => void;
  /** Reservation/PMS connection status */
  reservationStatus?: ReservationStatus;
  /** Called when reservation status is clicked */
  onReservationStatusClick?: () => void;
  /** Additional header action items */
  headerActions?: ReactNode;
  /** Hide the page header entirely */
  hideHeader?: boolean;

  // ===== Content Area Props =====
  /** Background color for content area (defaults to colorBlack7 / #F0F0F0) */
  contentBackground?: string;
  /** Additional padding for content area */
  contentPadding?: "none" | "small" | "medium" | "large";
  /** Additional CSS classes for the content area */
  contentClassName?: string;

  /** Additional CSS classes for the shell container */
  className?: string;
}

const paddingMap = {
  none: "p-0",
  small: "p-4",
  medium: "p-6",
  large: "p-8",
};

/**
 * CanaryAppShell - Complete application shell/scaffolding for Canary prototypes
 *
 * Provides the standard Canary application layout with:
 * - Sidebar navigation (left)
 * - Page header (top)
 * - Main content area (center/right)
 *
 * Usage:
 * ```tsx
 * <CanaryAppShell
 *   propertyName="My Hotel"
 *   userProfile={{ name: "John Doe", role: "Admin" }}
 *   reservationStatus={{ label: "Reservations", isConnected: true }}
 * >
 *   <YourPageContent />
 * </CanaryAppShell>
 * ```
 */
export default function CanaryAppShell({
  children,
  // Sidebar
  sidebarVariant = SidebarVariant.MAIN,
  sidebarSections,
  selectedSidebarItemId,
  onSidebarItemClick,
  sidebarTitle,
  sidebarBackButton,
  hideSidebar = false,
  // Header
  propertyName = "Property Name",
  onPropertyClick,
  userProfile,
  onUserProfileClick,
  reservationStatus,
  onReservationStatusClick,
  headerActions,
  hideHeader = false,
  // Content
  contentBackground,
  contentPadding = "medium",
  contentClassName,
  // Container
  className,
}: CanaryAppShellProps) {
  // Use standard sections based on variant if not provided
  const resolvedSections = sidebarSections ?? standardMainSidebarSections;

  return (
    <div className={clsx("flex h-screen w-full overflow-hidden", className)}>
      {/* Sidebar */}
      {!hideSidebar && (
        <CanarySidebar
          variant={sidebarVariant}
          sections={resolvedSections}
          selectedItemId={selectedSidebarItemId}
          onItemClick={onSidebarItemClick}
          title={sidebarTitle}
          backButton={sidebarBackButton}
        />
      )}

      {/* Main Area (Header + Content) */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Page Header */}
        {!hideHeader && (
          <CanaryPageHeader
            propertyName={propertyName}
            onPropertyClick={onPropertyClick}
            userProfile={userProfile}
            onUserProfileClick={onUserProfileClick}
            reservationStatus={reservationStatus}
            onReservationStatusClick={onReservationStatusClick}
            actions={headerActions}
          />
        )}

        {/* Content Area */}
        <main
          className={clsx(
            "flex-1 overflow-auto",
            paddingMap[contentPadding],
            contentClassName
          )}
          style={{
            backgroundColor: contentBackground ?? colors.colorBlack7,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
