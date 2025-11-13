/**
 * Canary Design System - Design Tokens
 *
 * Extracted from the Canary UI design system.
 * Source: /Documents/Canary/canary/frontend/packages/canary-ui/
 *
 * These tokens should be used throughout all components to maintain
 * visual consistency with the main Canary product.
 */

// ============================================================================
// COLORS
// ============================================================================

/**
 * Status Colors
 * Used for success, warning, and error states
 */
export const colors = {
  // Status colors (aliases for convenience)
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#E40046",
  error: "#E40046",

  // Base colors - Figma token: $color-white
  colorWhite: "#FFFFFF",
  white: "#FFFFFF", // Alias for convenience

  // Black scale (grayscale) - Figma tokens: $color-black-1 through $color-black-8
  colorBlack1: "#000000", // $color-black-1
  colorBlack2: "#333333", // $color-black-2
  colorBlack3: "#666666", // $color-black-3
  colorBlack4: "#999999", // $color-black-4
  colorBlack5: "#CCCCCC", // $color-black-5
  colorBlack6: "#E5E5E5", // $color-black-6
  colorBlack7: "#F0F0F0", // $color-black-7
  colorBlack8: "#FAFAFA", // $color-black-8

  // Canary Blue (Light) - Brand color - Figma tokens: $color-blue-canary-1 through $color-blue-canary-5
  colorBlueCanary1: "#1C91FA", // $color-blue-canary-1
  colorBlueCanary2: "#55ACFB", // $color-blue-canary-2
  colorBlueCanary3: "#8DC8FC", // $color-blue-canary-3
  colorBlueCanary4: "#C6E3FE", // $color-blue-canary-4
  colorBlueCanary5: "#E8F4FF", // $color-blue-canary-5

  // Blue Dark - Primary action color - Figma tokens: $color-blue-dark-1 through $color-blue-dark-5
  colorBlueDark1: "#2858C4", // $color-blue-dark-1 - Primary button color
  colorBlueDark2: "#5E82D3", // $color-blue-dark-2
  colorBlueDark3: "#93ABE1", // $color-blue-dark-3
  colorBlueDark4: "#C9D5F0", // $color-blue-dark-4
  colorBlueDark5: "#EAEEF9", // $color-blue-dark-5

  // Pink - Figma tokens: $color-pink-1 through $color-pink-5
  colorPink1: "#F16682", // $color-pink-1
  colorPink2: "#F48CA1", // $color-pink-2
  colorPink3: "#F8B2C0", // $color-pink-3
  colorPink4: "#FBD9E0", // $color-pink-4
  colorPink5: "#FEF0F3", // $color-pink-5

  // Light Green - Figma tokens: $color-light-green-1 through $color-light-green-5
  colorLightGreen1: "#008040", // $color-light-green-1
  colorLightGreen2: "#339966", // $color-light-green-2
  colorLightGreen3: "#66B38C", // $color-light-green-3
  colorLightGreen4: "#99CCB3", // $color-light-green-4
  colorLightGreen5: "#CCE6D9", // $color-light-green-5

  // Wheat (Orange/Yellow) - Figma tokens: $color-wheat-1 through $color-wheat-5
  colorWheat1: "#FAB541", // $color-wheat-1
  colorWheat2: "#FBC770", // $color-wheat-2
  colorWheat3: "#FCDAA0", // $color-wheat-3
  colorWheat4: "#FEECCF", // $color-wheat-4
  colorWheat5: "#FFF8EC", // $color-wheat-5

  // Purple - Figma tokens: $color-purple-1 through $color-purple-5
  colorPurple1: "#3304AD", // $color-purple-1
  colorPurple2: "#723DFC", // $color-purple-2
  colorPurple3: "#9D7AFA", // $color-purple-3
  colorPurple4: "#CAB8F8", // $color-purple-4
  colorPurple5: "#E3DCF6", // $color-purple-5

  // Red - Figma tokens: $color-red-1 through $color-red-5
  colorRed1: "#E40046", // $color-red-1
  colorRed2: "#EB4074", // $color-red-2
  colorRed3: "#F59FBA", // $color-red-3
  colorRed4: "#F8BFD1", // $color-red-4
  colorRed5: "#FCE6ED", // $color-red-5
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Typography System
 * Based on Roboto font family with Material Design-inspired sizing
 */
export const typography = {
  fontFamily: {
    primary: '"Roboto", sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
  },

  fontSize: {
    // Display titles (largest)
    displayTitleLg: "3.5rem",      // 56px
    displayTitle: "3rem",          // 48px
    displayTitleSm: "2rem",        // 32px

    // Titles
    titleLg: "1.75rem",            // 28px
    title: "1.5rem",               // 24px

    // Subtitles
    subtitleLg: "1.25rem",         // 20px
    subtitle: "1.125rem",          // 18px

    // Body text
    body: "1rem",                  // 16px
    bodySm: "0.875rem",            // 14px

    // Captions (smallest)
    caption: "0.75rem",            // 12px
    captionSm: "0.625rem",         // 10px
  },

  lineHeight: {
    displayTitleLg: "5.25rem",     // 84px
    displayTitle: "4.5rem",        // 72px
    displayTitleSm: "3rem",        // 48px
    titleLg: "2.625rem",           // 42px
    title: "2.25rem",              // 36px
    subtitleLg: "1.875rem",        // 30px
    subtitle: "1.6875rem",         // 27px
    body: "1.5rem",                // 24px
    bodySm: "1.3125rem",           // 21px
    caption: "1.125rem",           // 18px
    captionSm: "0.9375rem",        // 15px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

/**
 * Spacing scale based on 4px base unit
 * Follows a consistent scale for margins, padding, and gaps
 */
export const spacing = {
  0: "0",
  1: "0.25rem",    // 4px
  2: "0.5rem",     // 8px
  3: "0.75rem",    // 12px
  4: "1rem",       // 16px
  5: "1.25rem",    // 20px
  6: "1.5rem",     // 24px
  8: "2rem",       // 32px
  10: "2.5rem",    // 40px
  12: "3rem",      // 48px
  16: "4rem",      // 64px
  20: "5rem",      // 80px
  24: "6rem",      // 96px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

/**
 * Border radius tokens
 * Used for rounded corners on buttons, cards, inputs, etc.
 */
export const borderRadius = {
  none: "0",
  sm: "2px",
  default: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px",  // Perfect circle
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

/**
 * Box shadow tokens
 * Used for elevation and depth
 */
export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

/**
 * Z-index scale
 * Ensures proper layering of components
 */
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 40,
  modal: 50,
  popover: 51,
  toast: 100,
} as const;

// ============================================================================
// DIMENSIONS
// ============================================================================

/**
 * Common dimension tokens
 */
export const dimensions = {
  headerHeight: "56px",
  sectionContainerHeight: "24px",
} as const;

// ============================================================================
// INPUT & BUTTON SIZES
// ============================================================================

/**
 * Size variants for inputs and buttons
 */
export enum InputSize {
  TABLET = "tablet",
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
  TINY = "tiny",
}

export enum ButtonSize {
  TABLET = "tablet",
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
  TINY = "tiny",
}

export enum ButtonType {
  PRIMARY = "primary",
  OUTLINED = "outlined",
  SHADED = "shaded",
  TEXT = "text",
  ICON_PRIMARY = "icon_primary",
  ICON_SECONDARY = "icon_secondary",
}

export enum ButtonColor {
  NORMAL = "normal",
  HEADING_TEXT = "heading_text",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  FONT = "font",
  FONT_SECONDARY = "font_secondary",
  WHITE = "white",
}

// ============================================================================
// BREAKPOINTS
// ============================================================================

/**
 * Responsive breakpoints
 * Mobile-first approach
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

/**
 * Transition timing tokens
 * For animations and transitions
 */
export const transitions = {
  fast: "150ms",
  default: "200ms",
  slow: "300ms",
  slower: "500ms",
} as const;

export const easings = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
