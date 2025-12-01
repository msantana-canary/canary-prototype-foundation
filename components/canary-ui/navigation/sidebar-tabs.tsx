/**
 * Pre-built Sidebar Tabs - Reusable Lego Pieces
 * 
 * These are standardized sidebar navigation items that can be reused
 * across different sidebar configurations. Ensures consistency and
 * prevents teammates from having to remember icon names and labels.
 */

import Icon from "@mdi/react";
import {
  // Main product tabs
  mdiCashMultiple,
  mdiLogin,
  mdiLogout,
  mdiMessageProcessingOutline,
  mdiPhoneOutline,
  mdiCurrencyUsd,
  mdiShieldCheckOutline,
  mdiFileSign,
  mdiAccountCheckOutline,
  mdiAccountBoxOutline,
  mdiStoreOutline,
  mdiCreditCardOutline,
  mdiCogOutline,
  
  // Settings tabs
  mdiHomeOutline,
  mdiPaletteOutline,
  mdiAccountGroupOutline,
  mdiShieldAccountOutline,
  mdiPuzzleOutline,
  mdiTabletCellphone,
  mdiNewspaperVariantOutline,
  mdiMapMarker,
  mdiChatOutline,
  
  // Common custom/above-property tabs
  mdiChartLine,
  mdiDomain,
  mdiChartBar,
  mdiPoll,
  mdiViewDashboard,
  mdiClipboardList,
  mdiCalendar,
  mdiNotebook,
  mdiTrendingUp,
} from "@mdi/js";

import { SidebarNavigationItem } from "./CanarySidebar";

/**
 * Pre-built sidebar tabs that can be used as lego pieces
 * in custom sidebar configurations.
 */
export const sidebarTabs = {
  // Main Product Tabs
  upsells: {
    id: "upsells",
    label: "Upsells",
    icon: <Icon path={mdiCashMultiple} size={1} />,
  } as SidebarNavigationItem,

  checkIn: {
    id: "check-in",
    label: "Check-in",
    icon: <Icon path={mdiLogin} size={1} />,
  } as SidebarNavigationItem,

  checkout: {
    id: "checkout",
    label: "Checkout",
    icon: <Icon path={mdiLogout} size={1} />,
  } as SidebarNavigationItem,

  messages: {
    id: "messages",
    label: "Messages",
    icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
  } as SidebarNavigationItem,

  calls: {
    id: "calls",
    label: "Calls",
    icon: <Icon path={mdiPhoneOutline} size={1} />,
  } as SidebarNavigationItem,

  digitalTips: {
    id: "digital-tips",
    label: "Digital Tips",
    icon: <Icon path={mdiCurrencyUsd} size={1} />,
  } as SidebarNavigationItem,

  authorizations: {
    id: "authorizations",
    label: "Authorizations",
    icon: <Icon path={mdiShieldCheckOutline} size={1} />,
  } as SidebarNavigationItem,

  contracts: {
    id: "contracts",
    label: "Contracts",
    icon: <Icon path={mdiFileSign} size={1} />,
  } as SidebarNavigationItem,

  idVerification: {
    id: "id-verification",
    label: "ID Verification",
    icon: <Icon path={mdiAccountCheckOutline} size={1} />,
  } as SidebarNavigationItem,

  clientsOnFile: {
    id: "clients-on-file",
    label: "Clients on File",
    icon: <Icon path={mdiAccountBoxOutline} size={1} />,
  } as SidebarNavigationItem,

  amenities: {
    id: "amenities",
    label: "Amenities",
    icon: <Icon path={mdiStoreOutline} size={1} />,
  } as SidebarNavigationItem,

  paymentLinks: {
    id: "payment-links",
    label: "Payment Links",
    icon: <Icon path={mdiCreditCardOutline} size={1} />,
  } as SidebarNavigationItem,

  settings: {
    id: "settings",
    label: "Settings",
    icon: <Icon path={mdiCogOutline} size={1} />,
  } as SidebarNavigationItem,

  // Settings Tabs
  propertyInfo: {
    id: "property-info",
    label: "Property Info",
    icon: <Icon path={mdiHomeOutline} size={1} />,
  } as SidebarNavigationItem,

  branding: {
    id: "branding",
    label: "Branding",
    icon: <Icon path={mdiPaletteOutline} size={1} />,
  } as SidebarNavigationItem,

  billingPayment: {
    id: "billing-payment",
    label: "Billing & Payment",
    icon: <Icon path={mdiCreditCardOutline} size={1} />,
  } as SidebarNavigationItem,

  staffMembers: {
    id: "staff-members",
    label: "Staff Members",
    icon: <Icon path={mdiAccountGroupOutline} size={1} />,
  } as SidebarNavigationItem,

  security: {
    id: "security",
    label: "Security",
    icon: <Icon path={mdiShieldAccountOutline} size={1} />,
  } as SidebarNavigationItem,

  pms: {
    id: "pms",
    label: "PMS",
    icon: <Icon path={mdiPuzzleOutline} size={1} />,
  } as SidebarNavigationItem,

  devices: {
    id: "devices",
    label: "Devices",
    icon: <Icon path={mdiTabletCellphone} size={1} />,
  } as SidebarNavigationItem,

  compendium: {
    id: "compendium",
    label: "Compendium",
    icon: <Icon path={mdiNewspaperVariantOutline} size={1} />,
  } as SidebarNavigationItem,

  areaInfo: {
    id: "area-info",
    label: "Area Info",
    icon: <Icon path={mdiMapMarker} size={1} />,
  } as SidebarNavigationItem,

  chat: {
    id: "chat",
    label: "Chat",
    icon: <Icon path={mdiChatOutline} size={1} />,
  } as SidebarNavigationItem,

  // Custom/Above-Property Tabs
  insights: {
    id: "insights",
    label: "Insights",
    icon: <Icon path={mdiChartLine} size={1} />,
  } as SidebarNavigationItem,

  properties: {
    id: "properties",
    label: "Properties",
    icon: <Icon path={mdiDomain} size={1} />,
  } as SidebarNavigationItem,

  analytics: {
    id: "analytics",
    label: "Analytics",
    icon: <Icon path={mdiChartBar} size={1} />,
  } as SidebarNavigationItem,

  surveys: {
    id: "surveys",
    label: "Surveys",
    icon: <Icon path={mdiPoll} size={1} />,
  } as SidebarNavigationItem,

  dashboard: {
    id: "dashboard",
    label: "Dashboard",
    icon: <Icon path={mdiViewDashboard} size={1} />,
  } as SidebarNavigationItem,

  tasks: {
    id: "tasks",
    label: "Tasks",
    icon: <Icon path={mdiClipboardList} size={1} />,
  } as SidebarNavigationItem,

  calendar: {
    id: "calendar",
    label: "Calendar",
    icon: <Icon path={mdiCalendar} size={1} />,
  } as SidebarNavigationItem,

  reports: {
    id: "reports",
    label: "Reports",
    icon: <Icon path={mdiNotebook} size={1} />,
  } as SidebarNavigationItem,

  performance: {
    id: "performance",
    label: "Performance",
    icon: <Icon path={mdiTrendingUp} size={1} />,
  } as SidebarNavigationItem,
};

/**
 * Helper to create a custom tab with proper typing
 */
export const createSidebarTab = (
  id: string,
  label: string,
  icon: React.ReactNode,
  options?: Partial<SidebarNavigationItem>
): SidebarNavigationItem => ({
  id,
  label,
  icon,
  ...options,
});