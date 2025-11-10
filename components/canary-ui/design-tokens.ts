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
  // Status colors
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#E40046",
  error: "#E40046",

  // Base colors
  white: "#FFFFFF",

  // Black scale (grayscale)
  black1: "#000000", // True black
  black2: "#333333",
  black3: "#666666",
  black4: "#999999",
  black5: "#CCCCCC",
  black6: "#E5E5E5",
  black7: "#F0F0F0",
  black8: "#FAFAFA",

  // Canary Blue (Light) - Brand color
  blueCanary1: "#1C91FA",
  blueCanary2: "#55ACFB",
  blueCanary3: "#8DC8FC",
  blueCanary4: "#C6E3FE",
  blueCanary5: "#E8F4FF",

  // Blue Dark - Primary action color
  blueDark1: "#2858C4", // Primary button color
  blueDark2: "#5E82D3",
  blueDark3: "#93ABE1",
  blueDark4: "#C9D5F0",
  blueDark5: "#EAEEF9",

  // Pink
  pink1: "#F16682",
  pink2: "#F48CA1",
  pink3: "#F8B2C0",
  pink4: "#FBD9E0",
  pink5: "#FEF0F3",

  // Light Green
  lightGreen1: "#339966",
  lightGreen2: "#66B38C",
  lightGreen3: "#99CCB2",
  lightGreen4: "#CCE6D9",
  lightGreen5: "#E5F2EC",

  // Dark Green
  darkGreen1: "#008040",
  darkGreen2: "#409F6D",
  darkGreen3: "#80BF9A",
  darkGreen4: "#BFDFC7",
  darkGreen5: "#E0F0E5",

  // Wheat (Orange/Yellow)
  wheat1: "#FAB541",
  wheat2: "#FBC770",
  wheat3: "#FCDAA0",
  wheat4: "#FEECCF",
  wheat5: "#FFF8EC",

  // Purple
  purple1: "#723DFC",
  purple2: "#9D7AFA",
  purple3: "#C9B7FD",
  purple4: "#E4DBFE",
  purple5: "#F4F1FF",

  // Red
  red1: "#E40046",
  red2: "#EB4074",
  red3: "#F59FBA",
  red4: "#F8BFD1",
  red5: "#FCE6ED",
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
