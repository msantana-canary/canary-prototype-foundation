"use client";

/**
 * Canary UI Component Library
 *
 * A React implementation of the Canary design system for prototyping.
 * All components maintain visual fidelity with the main Canary product.
 */

// Design Tokens
export * from "./design-tokens";

// Icons
export { CanaryIcon, iconPaths, Icon } from "./icons";
export type { CanaryIconProps } from "./icons";

// Buttons
export { CanaryButton } from "./buttons";
export { ButtonType, ButtonSize, ButtonColor, IconPosition } from "./buttons/types";

// Forms
export {
  CanaryInput,
  CanaryTextArea,
  CanarySelect,
  CanaryCheckbox,
  CanaryRadio,
  CanaryRadioGroup,
  CanarySwitch,
  CanaryInputPassword,
  CanaryInputSearch,
  CanaryInputCreditCard,
  CanaryInputPhone,
  CanaryInputDate,
  CanaryInputDateRange,
  CanaryInputMultiple,
  CanaryCalendar,
  CanarySegmentedControl,
  CanaryNote,
  CanaryFormLabel,
  CanaryValidationError,
  CanaryCounter,
  CanaryAutocomplete,
  // Underline variants (floating label with bottom border)
  CanaryInputUnderline,
  CanaryTextAreaUnderline,
  CanarySelectUnderline,
  CanaryInputPhoneUnderline,
  CanaryInputPasswordUnderline,
  CanaryInputSearchUnderline,
  CanaryInputCreditCardUnderline,
  CanaryInputDateUnderline,
  CanaryInputDateRangeUnderline,
} from "./forms";
export { InputSize, InputType, LabelSize, NoteColor } from "./forms/types";
export type { BaseFormProps, CanarySelectOption, CanaryInputMultipleProps, CanaryInputMultipleRef, CanaryCalendarProps, CalendarSelection, CalendarSelectionMode } from "./forms";
export type { CanaryCounterProps, CanaryAutocompleteProps } from "./forms";

// Data Display
export {
  CanaryChip, CanaryTag, CanaryTable, CanaryCard, CanaryListItem, CanaryList,
  CanaryTooltip, CanaryTooltipIcon, CanaryTimestamp, CanaryProfileImage,
} from "./data-display";
export type { CanaryChipProps, ChipSize } from "./data-display";
export { ChipType } from "./data-display";
export {
  TagColor, TagVariant, TagSize,
  CardPadding, CardBoxShadow, CardInnerSpacing,
  ListStyle, ListItemPadding, ListItemAlignment, DraggableIconSize,
  TooltipPosition, TooltipIconColor,
  TimestampFormat, TimestampColor,
  ProfileImageSize,
} from "./data-display/types";
export type { CustomTagColor, CanaryTableColumn, CanaryListItemProps, CanaryListProps } from "./data-display";

// Layout
export {
  CanaryContainer, CanaryGrid, CanaryModal, CanaryAppShell,
  CanaryDivider, CanaryExpand, CanaryDialog, CanarySideSheet, CanarySettingsCard,
} from "./layout";
export type { CanaryAppShellProps, CanaryDialogProps, CanarySideSheetProps, CanarySettingsCardProps } from "./layout";
export { DividerDirection, DialogStretch, DialogCloseButtonSize, SettingsCardState } from "./layout/types";

// Navigation
export {
  CanaryTabs, CanarySidebar, CanaryHeader, CanaryPageHeader, CanaryLogo,
  CanaryProgressBar, CanaryOverflowMenu, CanarySteps,
} from "./navigation";
export type { CanaryProgressBarProps, CanaryOverflowMenuProps, CanaryStepsProps } from "./navigation";
export { SidebarVariant, NavigationItemState, TabSize, TabType, ProgressBarVariant, StepsOrientation } from "./navigation";
export type { CanarySidebarProps, SidebarNavigationItem, SidebarSection, CanaryLogoProps, CanaryPageHeaderProps, UserProfile, ReservationStatus } from "./navigation";
export { standardMainSidebarSections, standardSettingsSidebarSections } from "./navigation";
export { sidebarTabs, createSidebarTab } from "./navigation";
export {
  hideProducts,
  addProduct,
  reorderProducts,
  createCustomSection,
  mergeWithStandard,
  updateProduct,
  addBadge,
  removeBadge,
  disableProduct,
  enableProduct,
} from "./navigation";

// Feedback
export { CanaryToast, CanaryAlert, CanaryBadge } from "./feedback";
export { BadgeType, BadgeSize } from "./feedback/types";

// Loading
export { CanaryLoading } from "./loading";
