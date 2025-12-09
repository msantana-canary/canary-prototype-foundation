export { default as CanaryTabs } from "./CanaryTabs";
export { default as CanarySidebar } from "./CanarySidebar";
export type { CanarySidebarProps, SidebarNavigationItem, SidebarSection } from "./CanarySidebar";
export { default as CanaryHeader } from "./CanaryHeader";
export { default as CanaryPageHeader } from "./CanaryPageHeader";
export type { CanaryPageHeaderProps, UserProfile, ReservationStatus } from "./CanaryPageHeader";
export { default as CanaryLogo } from "./CanaryLogo";
export type { CanaryLogoProps } from "./CanaryLogo";
export { SidebarVariant, NavigationItemState } from "./types";
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
