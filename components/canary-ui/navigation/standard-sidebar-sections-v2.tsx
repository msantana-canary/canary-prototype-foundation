/**
 * Standard Canary Sidebar Sections — V2
 *
 * Navigation groupings taken from the "Design system updates" Figma file.
 * The V1 groupings in `standard-sidebar-sections.tsx` are left untouched so
 * existing prototypes keep the navigation they were built against.
 */

import Icon from "@mdi/react";
import {
  mdiAccountBoxOutline,
  mdiAccountGroupOutline,
  mdiCalendarCheckOutline,
  mdiCashMultiple,
  mdiCogOutline,
  mdiCreditCardOutline,
  mdiCurrencyUsd,
  mdiFileSign,
  mdiLogin,
  mdiLogout,
  mdiMapMarkerOutline,
  mdiMessageProcessingOutline,
  mdiNewspaperVariantOutline,
  mdiOfficeBuildingOutline,
  mdiPaletteOutline,
  mdiPhoneOutline,
  mdiPuzzleOutline,
  mdiShieldAccountOutline,
  mdiShieldCheckOutline,
  mdiSilverwareForkKnife,
  mdiTabletCellphone,
} from "@mdi/js";
import { SidebarSection } from "./CanarySidebar";

/**
 * Main navigation — three groups separated by rules:
 * Communications, Guest Management, and SDM.
 */
export const standardMainSidebarSectionsV2: SidebarSection[] = [
  {
    id: "communications",
    items: [
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
    ],
  },
  {
    id: "guest-management",
    items: [
      {
        id: "upsells",
        label: "Upsells",
        icon: <Icon path={mdiCashMultiple} size={1} />,
      },
      {
        id: "food-and-beverage",
        label: "F&B",
        icon: <Icon path={mdiSilverwareForkKnife} size={1} />,
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
        id: "digital-tips",
        label: "Digital Tips",
        icon: <Icon path={mdiCurrencyUsd} size={1} />,
      },
    ],
  },
  {
    id: "sdm",
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
        id: "clients-on-file",
        label: "Clients on File",
        icon: <Icon path={mdiAccountBoxOutline} size={1} />,
      },
    ],
  },
];

/**
 * Settings navigation — property-level settings, then a titled
 * "Product settings" group.
 */
export const standardSettingsSidebarSectionsV2: SidebarSection[] = [
  {
    id: "property-settings",
    items: [
      {
        id: "property-info",
        label: "Property Info",
        icon: <Icon path={mdiOfficeBuildingOutline} size={1} />,
      },
      {
        id: "property-settings",
        label: "Property Settings",
        icon: <Icon path={mdiCogOutline} size={1} />,
      },
      {
        id: "branding",
        label: "Branding",
        icon: <Icon path={mdiPaletteOutline} size={1} />,
      },
      {
        id: "logins",
        label: "Logins",
        icon: <Icon path={mdiAccountGroupOutline} size={1} />,
      },
      {
        id: "billing-payment",
        label: "Billing & Payment",
        icon: <Icon path={mdiCreditCardOutline} size={1} />,
      },
      {
        id: "security",
        label: "Security",
        icon: <Icon path={mdiShieldAccountOutline} size={1} />,
      },
      {
        id: "integrations",
        label: "Integrations",
        icon: <Icon path={mdiPuzzleOutline} size={1} />,
      },
      {
        id: "reservations",
        label: "Reservations",
        icon: <Icon path={mdiCalendarCheckOutline} size={1} />,
      },
      {
        id: "devices",
        label: "Devices",
        icon: <Icon path={mdiTabletCellphone} size={1} />,
      },
    ],
  },
  {
    id: "product-settings",
    title: "Product settings",
    items: [
      {
        id: "compendium",
        label: "Compendium",
        icon: <Icon path={mdiNewspaperVariantOutline} size={1} />,
      },
      {
        id: "guest-journey",
        label: "Guest Journey",
        icon: <Icon path={mdiMapMarkerOutline} size={1} />,
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
        id: "upsells",
        label: "Upsells",
        icon: <Icon path={mdiCashMultiple} size={1} />,
      },
      {
        id: "food-and-beverage",
        label: "F&B",
        icon: <Icon path={mdiSilverwareForkKnife} size={1} />,
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
        id: "digital-tips",
        label: "Digital Tips",
        icon: <Icon path={mdiCurrencyUsd} size={1} />,
      },
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
    ],
  },
];
