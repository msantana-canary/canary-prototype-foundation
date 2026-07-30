/**
 * Shell V2 Tokens
 *
 * Values measured directly from the "Design system updates" Figma file
 * (navigationBar/main, navigationBar/settings, and header frames).
 *
 * These are shell-chrome specific and intentionally kept out of the shared
 * design-tokens file so the V1 shell is unaffected.
 */

export const shellV2 = {
  // ===== Sidebar =====
  sidebarWidth: 240,
  sidebarBgMain: "#375492",
  sidebarBgSettings: "#333333",

  /** 1px rules between nav groups and under the property switcher */
  sidebarDivider: "rgba(255, 255, 255, 0.15)",

  /** Nav item label in its resting state */
  sidebarLabel: "rgba(255, 255, 255, 0.9)",
  /** Section headers, property code, footer button labels */
  sidebarLabelMuted: "rgba(255, 255, 255, 0.55)",
  sidebarLabelDisabled: "rgba(255, 255, 255, 0.35)",

  sidebarHoverBg: "rgba(255, 255, 255, 0.1)",
  sidebarSelectedBg: "#FFFFFF",
  sidebarSelectedLabel: "#000000",

  /** Bottom panel holding the user / settings / support buttons */
  footerPanelBgMain: "#2E467B",
  footerPanelBgSettings: "#262626",

  /** Team Chat sits in its own dark pill above the footer panel */
  teamChatBg: "#022440",

  badgeBg: "#F16682",

  // Geometry
  navItemHeight: 30,
  navItemInset: 12,
  navItemPaddingX: 8,
  navItemRadius: 6,
  navItemGap: 4,
  sectionGap: 8,
  propertySwitcherHeight: 50,
  footerButtonHeight: 52,
  logoWidth: 135,
  logoHeight: 34,
  logoOpacity: 0.3,

  // ===== Top bar =====
  topBarHeight: 52,
  topBarPaddingX: 24,

  /** Reservations / PMS connection pill */
  reservationsBg: "#E5F2EB",
  reservationsText: "#008040",
  reservationsBgOffline: "#F0F0F0",
  reservationsTextOffline: "#666666",

  /** Copilot pill — subtle left-to-right wash plus a gradient wordmark */
  copilotBgFrom: "#F8F8FE",
  copilotBgTo: "#FCF8F8",
  copilotBorder: "#EFE4F2",
  copilotWordmarkFrom: "#D43FB6",
  copilotWordmarkTo: "#6557E6",

  pillHeight: 28,
  pillRadius: 6,

  // ===== Content =====
  contentBg: "#FAFAFA",
} as const;

export type ShellV2Tokens = typeof shellV2;
