/**
 * Data Display Component Types
 */

export enum TagColor {
  /** SUCCESS - Green */
  SUCCESS = "success",
  /** WARNING - Yellow/Wheat */
  WARNING = "warning",
  /** INFO - Blue */
  INFO = "info",
  /** DEFAULT - Gray */
  DEFAULT = "default",
  /** ERROR - Red/Pink */
  ERROR = "error",
}

export enum TagVariant {
  /** OUTLINE - Light background with colored border */
  OUTLINE = "outline",
  /** FILLED - Solid colored background with white text */
  FILLED = "filled",
}

export enum TagSize {
  /** COMPACT - 10px font, 16px line-height */
  COMPACT = "compact",
  /** MEDIUM - 12px font, 18px line-height */
  MEDIUM = "medium",
}

export interface CustomTagColor {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  iconColor?: string;
}
