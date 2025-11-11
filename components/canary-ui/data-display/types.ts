/**
 * Data Display Component Types
 */

export enum TagColor {
  /** PRIMARY - Canary brand blue */
  PRIMARY = "primary",
  /** SUCCESS - Green */
  SUCCESS = "success",
  /** WARNING - Yellow/Wheat */
  WARNING = "warning",
  /** DANGER - Red/Pink */
  DANGER = "danger",
  /** GRAY - Light gray */
  GRAY = "gray",
  /** BLACK - Black background */
  BLACK = "black",
}

export enum TagSize {
  /** SMALL - 10px font, 18px height */
  SMALL = "small",
  /** MEDIUM - 12px font */
  MEDIUM = "medium",
}

export interface CustomTagColor {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  iconColor?: string;
}
