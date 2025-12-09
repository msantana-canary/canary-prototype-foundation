import { ReactNode } from "react";
import { colors, dimensions } from "../design-tokens";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiCheckCircleOutline } from "@mdi/js";

export interface UserProfile {
  name: string;
  role: string;
  avatarUrl?: string;
  avatarAlt?: string;
}

export interface ReservationStatus {
  label: string;
  isConnected: boolean;
}

export interface CanaryPageHeaderProps {
  /** Property/Hotel name displayed on the left */
  propertyName: string;
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
  /** Additional action items to render before user profile */
  actions?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CanaryPageHeader - The standard page header for Canary applications
 *
 * Features:
 * - Property selector (left side)
 * - Reservation status badge
 * - User profile with avatar, name, and role
 * - Slot for additional actions
 */
export default function CanaryPageHeader({
  propertyName,
  onPropertyClick,
  userProfile,
  onUserProfileClick,
  reservationStatus,
  onReservationStatusClick,
  actions,
  className,
}: CanaryPageHeaderProps) {
  return (
    <header
      className={clsx(
        "w-full bg-white border-b flex items-center justify-between px-6 py-2 shrink-0",
        className
      )}
      style={{
        height: dimensions.headerHeight,
        borderColor: colors.colorBlack6,
      }}
    >
      {/* Left: Property Selector */}
      <button
        onClick={onPropertyClick}
        className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
        style={{ cursor: onPropertyClick ? "pointer" : "default" }}
      >
        <span
          className="text-[14px] font-medium"
          style={{ color: colors.colorBlack1 }}
        >
          {propertyName}
        </span>
        <Icon
          path={mdiChevronDown}
          size={0.85}
          color={colors.colorBlueDark1}
        />
      </button>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Custom Actions Slot */}
        {actions}

        {/* Reservation Status Badge */}
        {reservationStatus && (
          <button
            onClick={onReservationStatusClick}
            className="flex items-center gap-2 rounded-full pl-2 pr-4 py-1 transition-opacity hover:opacity-80"
            style={{
              backgroundColor: reservationStatus.isConnected
                ? colors.colorLightGreen5
                : colors.colorBlack7,
              cursor: onReservationStatusClick ? "pointer" : "default",
            }}
          >
            <Icon
              path={mdiCheckCircleOutline}
              size={1}
              color={
                reservationStatus.isConnected
                  ? colors.colorLightGreen1
                  : colors.colorBlack4
              }
              style={{ opacity: 0.5 }}
            />
            <span
              className="text-[14px]"
              style={{
                color: reservationStatus.isConnected
                  ? colors.colorBlack1
                  : colors.colorBlack3,
              }}
            >
              {reservationStatus.label}
            </span>
          </button>
        )}

        {/* User Profile */}
        {userProfile && (
          <button
            onClick={onUserProfileClick}
            className="flex items-center gap-2 rounded hover:bg-gray-50 transition-colors px-1 py-1"
            style={{ cursor: onUserProfileClick ? "pointer" : "default" }}
          >
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
              {userProfile.avatarUrl ? (
                <img
                  src={userProfile.avatarUrl}
                  alt={userProfile.avatarAlt || userProfile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-sm font-medium"
                  style={{ color: colors.colorBlack3, backgroundColor: colors.colorBlack7 }}
                >
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </div>
              )}
            </div>

            {/* Name & Role */}
            <div className="flex flex-col items-start leading-tight">
              <span
                className="text-[12px] font-medium"
                style={{ color: colors.colorBlack1 }}
              >
                {userProfile.name}
              </span>
              <span
                className="text-[10px] uppercase"
                style={{ color: colors.colorBlack4 }}
              >
                {userProfile.role}
              </span>
            </div>

            {/* Dropdown Chevron */}
            <Icon
              path={mdiChevronDown}
              size={0.85}
              color={colors.colorBlack1}
            />
          </button>
        )}
      </div>
    </header>
  );
}
