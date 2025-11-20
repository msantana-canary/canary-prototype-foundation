/**
 * Standard Canary Sidebar Sections
 *
 * Pre-configured sidebar navigation items matching the Canary product.
 * Use these as-is or customize for your prototype.
 */

import Icon from "@mdi/react";
import {
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
  mdiHomeOutline,
  mdiPaletteOutline,
  mdiAccountGroupOutline,
  mdiShieldAccountOutline,
  mdiPuzzleOutline,
  mdiTabletCellphone,
  mdiNewspaperVariantOutline,
  mdiMapMarker,
  mdiChatOutline,
} from "@mdi/js";
import { SidebarSection } from "./CanarySidebar";

/**
 * Standard Main Sidebar Sections
 * Used for the main application navigation
 */
export const standardMainSidebarSections: SidebarSection[] = [
  {
    id: "main-section",
    items: [
      {
        id: "upsells",
        label: "Upsells",
        icon: <Icon path={mdiCashMultiple} size={1} />,
      },
      {
        id: "check-in",
        label: "Check-in",
        icon: <Icon path={mdiLogin} size={1} />,
      },
      {
        id: "checkout",
        label: "Checkout",
        icon: <Icon path={mdiLogout} size={1} />,
      },
      {
        id: "messages",
        label: "Messages",
        icon: <Icon path={mdiMessageProcessingOutline} size={1} />,
      },
      {
        id: "calls",
        label: "Calls",
        icon: <Icon path={mdiPhoneOutline} size={1} />,
      },
      {
        id: "digital-tips",
        label: "Digital Tips",
        icon: <Icon path={mdiCurrencyUsd} size={1} />,
      },
    ],
  },
  {
    id: "secondary-section",
    items: [
      {
        id: "authorizations",
        label: "Authorizations",
        icon: <Icon path={mdiShieldCheckOutline} size={1} />,
      },
      {
        id: "contracts",
        label: "Contracts",
        icon: <Icon path={mdiFileSign} size={1} />,
      },
      {
        id: "id-verification",
        label: "ID Verification",
        icon: <Icon path={mdiAccountCheckOutline} size={1} />,
      },
      {
        id: "clients-on-file",
        label: "Clients on File",
        icon: <Icon path={mdiAccountBoxOutline} size={1} />,
      },
      {
        id: "amenities",
        label: "Amenities",
        icon: <Icon path={mdiStoreOutline} size={1} />,
      },
      {
        id: "payment-links",
        label: "Payment Links",
        icon: <Icon path={mdiCreditCardOutline} size={1} />,
      },
    ],
  },
  {
    id: "bottom-section",
    items: [
      {
        id: "settings",
        label: "Settings",
        icon: <Icon path={mdiCogOutline} size={1} />,
      },
    ],
  },
];

/**
 * Standard Settings Sidebar Sections
 * Used for settings/configuration pages
 */
export const standardSettingsSidebarSections: SidebarSection[] = [
  {
    id: "settings-section",
    title: "General",
    items: [
      {
        id: "property-info",
        label: "Property Info",
        icon: <Icon path={mdiHomeOutline} size={1} />,
      },
      {
        id: "branding",
        label: "Branding",
        icon: <Icon path={mdiPaletteOutline} size={1} />,
      },
      {
        id: "billing-payment",
        label: "Billing & Payment",
        icon: <Icon path={mdiCreditCardOutline} size={1} />,
      },
      {
        id: "staff-members",
        label: "Staff Members",
        icon: <Icon path={mdiAccountGroupOutline} size={1} />,
      },
      {
        id: "security",
        label: "Security",
        icon: <Icon path={mdiShieldAccountOutline} size={1} />,
      },
    ],
  },
  {
    id: "integrations-section",
    title: "Integrations",
    items: [
      {
        id: "pms",
        label: "PMS",
        icon: <Icon path={mdiPuzzleOutline} size={1} />,
      },
      {
        id: "devices",
        label: "Devices",
        icon: <Icon path={mdiTabletCellphone} size={1} />,
      },
      {
        id: "compendium",
        label: "Compendium",
        icon: <Icon path={mdiNewspaperVariantOutline} size={1} />,
      },
    ],
  },
  {
    id: "location-section",
    title: "Location",
    items: [
      {
        id: "area-info",
        label: "Area Info",
        icon: <Icon path={mdiMapMarker} size={1} />,
      },
      {
        id: "chat",
        label: "Chat",
        icon: <Icon path={mdiChatOutline} size={1} />,
      },
    ],
  },
];
