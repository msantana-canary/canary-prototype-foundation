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
export { InputSize, InputType } from "./forms/types";
export type { BaseFormProps, CanarySelectOption } from "./forms";

// Data Display
export { CanaryTag, CanaryTable, CanaryCard } from "./data-display";
export { TagColor, TagVariant, TagSize } from "./data-display/types";
export type { CustomTagColor, CanaryTableColumn } from "./data-display";

// Layout
export { CanaryContainer, CanaryGrid, CanaryModal } from "./layout";

// Navigation
export { CanaryTabs, CanarySidebar, CanaryHeader, CanaryLogo } from "./navigation";
export { SidebarVariant, NavigationItemState } from "./navigation";
export type { CanarySidebarProps, SidebarNavigationItem, SidebarSection, CanaryLogoProps } from "./navigation";
export { standardMainSidebarSections, standardSettingsSidebarSections } from "./navigation";

// Feedback
export { CanaryToast, CanaryAlert } from "./feedback";

// Loading
export { CanaryLoading } from "./loading";
