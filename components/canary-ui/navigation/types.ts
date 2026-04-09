/**
 * Sidebar Navigation Types and Enums
 * Matches the Canary UI sidebar system
 */

export enum SidebarVariant {
  MAIN = "main",
  SETTINGS = "settings",
  CUSTOM = "custom",
}

export enum NavigationItemState {
  DEFAULT = "default",
  SELECTED = "selected",
  FOCUS = "focus",
  ON_PRESS = "onPress",
  DISABLED = "disabled",
}

// Tab enums (aligned with production)
export enum TabSize {
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
}

export enum TabType {
  ROUND = "round",
  PRIMARY = "primary",
  TEXT = "text",
}

// Progress/Steps enums
export enum ProgressBarVariant {
  STEPS = "steps",
  CONTINUOUS = "continuous",
}

export enum StepsOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}
