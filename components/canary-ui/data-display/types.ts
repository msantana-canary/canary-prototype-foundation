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

// Card enums (aligned with production)
export enum CardPadding {
  DEFAULT = "default",
  COMPACT = "compact",
  NONE = "none",
}

export enum CardBoxShadow {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  NONE = "none",
}

export enum CardInnerSpacing {
  NONE = "none",
  TINY = "tiny",
  SMALL = "small",
  DEFAULT = "default",
}

// List enums (aligned with production)
export enum ListStyle {
  STRIPES = "stripes",
  DIVIDERS = "dividers",
}

export enum ListItemPadding {
  NORMAL = "normal",
  COMPACT = "compact",
}

export enum ListItemAlignment {
  START = "start",
  CENTER = "center",
}

export enum DraggableIconSize {
  DEFAULT = "default",
  LARGE = "large",
}

// Tooltip enums
export enum TooltipPosition {
  AUTO = "auto",
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

export enum TooltipIconColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
}

// Timestamp enums
export enum TimestampFormat {
  DATETIME = "datetime",
  DATETIME_ZONE = "datetime_zone",
  RELATIVE_TIME = "relative_time",
}

export enum TimestampColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

// Profile Image enums
export enum ProfileImageSize {
  LARGE = "large",
  NORMAL = "normal",
  MEDIUM = "medium",
  SMALL = "small",
  TINY = "tiny",
}
