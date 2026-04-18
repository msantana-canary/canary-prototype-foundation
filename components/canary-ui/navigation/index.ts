export { default as CanaryTabs } from "./CanaryTabs";
export { default as CanarySidebar } from "./CanarySidebar";
export type { CanarySidebarProps, SidebarNavigationItem, SidebarSection } from "./CanarySidebar";
export { default as CanaryHeader } from "./CanaryHeader";
export { default as CanaryPageHeader } from "./CanaryPageHeader";
export type { CanaryPageHeaderProps } from "./CanaryPageHeader";
export { default as CanaryLogo } from "./CanaryLogo";
export type { CanaryLogoProps } from "./CanaryLogo";
export { default as CanaryProgressBar } from "./CanaryProgressBar";
export type { CanaryProgressBarProps } from "./CanaryProgressBar";
export { default as CanaryOverflowMenu } from "./CanaryOverflowMenu";
export type { CanaryOverflowMenuProps } from "./CanaryOverflowMenu";
export { default as CanarySteps } from "./CanarySteps";
export type { CanaryStepsProps } from "./CanarySteps";
export { SidebarVariant, NavigationItemState, TabSize, TabType, ProgressBarVariant, StepsOrientation } from "./types";
export { standardMainSidebarSections, standardSettingsSidebarSections } from "./standard-sidebar-sections";
export { sidebarTabs, createSidebarTab } from "./sidebar-tabs";
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
} from "./sidebar-utils";
