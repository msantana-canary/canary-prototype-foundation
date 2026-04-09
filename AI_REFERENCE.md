# Canary UI Component Library - AI Agent Reference

> **FOR AI AGENTS**: This document is your complete reference for building with the Canary UI component library. Read this file completely before generating any code. Do not guess component names, icon names, or color values - use ONLY what is documented here.

## Quick Start for AI Agents

1. **Install the library** (user should have done this already):
```bash
pnpm add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.5.1
```

2. **Import styles** in root layout:
```tsx
import '@canary-ui/components/styles.css';
```

3. **Import components** as needed:
```tsx
import { CanaryButton, CanaryInput, CanaryCard } from '@canary-ui/components';
```

4. **Use enums for type-safe props**:
```tsx
import { ButtonType, ButtonSize, ButtonColor, IconPosition } from '@canary-ui/components';
```

---

## Component Inventory

### Buttons (1 component)
| Component | Description |
|-----------|-------------|
| `CanaryButton` | Full-featured button with types, sizes, icons, loading states |

### Forms (28 components)
| Component | Description |
|-----------|-------------|
| `CanaryInput` | Standard text input |
| `CanaryInputUnderline` | Input with floating label |
| `CanaryTextArea` | Multi-line text input |
| `CanaryTextAreaUnderline` | TextArea with floating label |
| `CanarySelect` | Dropdown select |
| `CanarySelectUnderline` | Select with floating label |
| `CanaryCheckbox` | Checkbox input |
| `CanaryRadio` | Single radio button |
| `CanaryRadioGroup` | Radio button group container |
| `CanarySwitch` | Toggle switch |
| `CanaryInputPassword` | Password input with visibility toggle |
| `CanaryInputPasswordUnderline` | Password with floating label |
| `CanaryInputSearch` | Search input with icon |
| `CanaryInputSearchUnderline` | Search with floating label |
| `CanaryInputCreditCard` | Credit card input with formatting |
| `CanaryInputCreditCardUnderline` | Credit card with floating label |
| `CanaryInputPhone` | International phone input |
| `CanaryInputPhoneUnderline` | Phone with floating label |
| `CanaryInputDate` | Date picker |
| `CanaryInputDateUnderline` | Date with floating label |
| `CanaryInputDateRange` | Date range picker |
| `CanaryInputDateRangeUnderline` | Date range with floating label |
| `CanaryInputMultiple` | Multi-value input with removable chips |
| `CanaryCalendar` | Calendar picker (single date or range, popup or inline) |
| `CanarySegmentedControl` | Segmented button group |
| `CanaryCounter` | Numeric counter with +/- buttons |
| `CanaryFormLabel` | Styled form field label |
| `CanaryValidationError` | Form error/warning message display |
| `CanaryNote` | Inline callout with colored border |
| `CanaryAutocomplete` | Search-as-you-type input with dropdown |

### Data Display (10 components)
| Component | Description |
|-----------|-------------|
| `CanaryChip` | Interactive chip (selectable toggle or removable tag) |
| `CanaryTag` | Status tags with color variants |
| `CanaryTable` | Data table with sorting |
| `CanaryCard` | Card container with header/footer and padding/shadow enums |
| `CanaryList` | List container with drag-and-drop and list style enums |
| `CanaryListItem` | Flexible list item with padding/alignment enums |
| `CanaryTooltip` | Hover-triggered tooltip popup |
| `CanaryTooltipIcon` | Info icon with tooltip |
| `CanaryTimestamp` | Date/time display with formatting |
| `CanaryProfileImage` | Circular avatar with initials fallback |

### Layout (8 components)
| Component | Description |
|-----------|-------------|
| `CanaryContainer` | Responsive container |
| `CanaryGrid` | CSS Grid layout |
| `CanaryModal` | Modal dialog with overlay |
| `CanaryAppShell` | **Complete app scaffolding with sidebar + header + content area** |
| `CanaryDivider` | Horizontal or vertical separator |
| `CanaryExpand` | Accordion/collapsible section |
| `CanaryDialog` | Dialog overlay with stretch options |
| `CanarySideSheet` | Slide-out side panel |
| `CanarySettingsCard` | Card with view/edit state management |

### Navigation (8 components + utilities)
| Component | Description |
|-----------|-------------|
| `CanaryTabs` | Tabbed navigation with size/type enums |
| `CanarySidebar` | Side navigation |
| `CanaryHeader` | Generic application header |
| `CanaryPageHeader` | **Standard Canary page header with property selector, user profile, reservation status** |
| `CanaryLogo` | Canary logo component |
| `CanaryOverflowMenu` | Three-dot action menu dropdown |
| `CanaryProgressBar` | Step or continuous progress indicator |
| `CanarySteps` | Multi-step flow indicator |

### Feedback (4 components)
| Component | Description |
|-----------|-------------|
| `CanaryAlert` | Inline alert messages |
| `CanaryToast` | Toast notifications |
| `CanaryLoading` | Loading spinner |
| `CanaryBadge` | Status indicator badge (urgent/info/warning) |

---

## Component Selection Guide

Use this section to quickly find the right component for your use case. Examples are drawn from real Canary product patterns.

### "I need the user to enter text"
- **Single-line text** → `CanaryInput` (bordered) or `CanaryInputUnderline` (floating label). Used in production for: hotel names, guest names, email addresses, confirmation codes, cohort labels.
- **Multi-line text** → `CanaryTextArea` (bordered) or `CanaryTextAreaUnderline` (floating label). Use `autoExpand` for growing text areas. Used for: internal notes on reservations, broadcast messages, tip customization copy, cohort notes.
- **Search field** → `CanaryInputSearch` — has a built-in search icon. Don't use `CanaryInput` with a manual icon addon. Used for: reservation search, check-in/check-out dashboards, cohort hotel filtering. Typically connected to server-side search with debounced queries.
- **Password** → `CanaryInputPassword` — has built-in show/hide toggle. Don't use `CanaryInput` with `InputType.PASSWORD`. Used for: password creation/reset flows (with confirmation field), PMS credential setup (Opera, Synxis), session re-authentication.
- **Phone number** → `CanaryInputPhone` — has country code selector. Don't build a custom phone input. Used for: wallet login (phone → OTP), guest check-in contact info, authorization client details, digital tip wallet user setup.
- **Credit card** → `CanaryInputCreditCard` — has card type detection and formatting. Don't use a plain text input. Used for: authorization forms, payment collection during check-in, e-folio charges.
- **Currency amount** → `CanaryInputCurrency` — formats monetary values with currency symbol. Used for: payment schedule splits, upsell pricing, contract charges, custom tip amounts.
- **Date** → `CanaryInputDate` — split MM/DD/YYYY fields with calendar picker. Don't use `CanaryInput` with `InputType.DATE`. Used for: date of birth in wallet setup, report date filters, process order dates.
- **Date range** → `CanaryInputDateRange` — start + end date with range calendar picker. Used for: stay dates, report date ranges, reservation filters.
- **Multiple values** (emails, tags) → `CanaryInputMultiple` — chip-based entry with Enter to add, backspace to remove. Used for: report email recipients (with email validation), notification settings, guest journey segment selection.

### "I need the user to pick from options"
- **Dropdown list** → `CanarySelect` / `CanarySelectUnderline` — for 4+ options, or when screen space is limited. Used for: cohort state changes (inline in table rows), brand/onboarding type selection, country selection, room type filters.
- **A few visible choices (single select)** → `CanaryRadioGroup` — for 2–5 options that should all be visible. Used for: payment type selection (credit card vs bank), check-out time options, messaging channel selection. Use `CanarySegmentedControl` for inline toggle-style selection.
- **Binary on/off** → `CanarySwitch` for settings/toggles, `CanaryCheckbox` for form agreement/consent. In production, `CanaryCheckbox` is used for: e-folio authorization acknowledgment, terms acceptance during check-in.
- **Multiple selections** → Render multiple `CanaryCheckbox` components.
- **Tags/filters** → `CanaryChip` with `ChipType.SELECTABLE` — for toggling filter states or category selection.
- **Calendar date** → `CanaryCalendar` — full inline or popup calendar. Use for dashboards or date-heavy UIs. Use `CanaryInputDate` for form fields.

### "I need to show data"
- **Tabular data** → `CanaryTable` — with columns, sorting, and custom cell rendering. In production, tables are used for: authorization forms (with status tags, amounts, dates), food & beverage orders (with time elapsed tags and action buttons), guest reservations (11+ columns with sorting and load-more pagination), cohort management (with inline select dropdowns in cells), tipping orders.
- **List of items** → `CanaryList` + `CanaryListItem` — supports drag-and-drop, loading, empty, and error states. Used for: food & beverage menu items (with images, modifiers, pricing, quantity counters), settings lists, contact details. Uses scoped slots for rich content in left/title/subtitle/right areas.
- **Status indicator** → `CanaryTag` — colored label. In production: `TagColor.ERROR` for "Blocked", "Declined", "Failed"; `TagColor.WARNING` for "In Transit", "Expiring Soon", time elapsed indicators; `TagColor.SUCCESS` for "Active", "Confirmed", "Fulfilled"; `TagColor.INFO` for "Submitted", "In Progress", "New". Custom colors for payment intent statuses.
- **Content section** → `CanaryCard` — for grouping related content with optional title, subtitle, and footer. Used for: upsell carousel items, settings sections, dashboard widgets, form grouping.
- **Toggleable tags/filters** → `CanaryChip` with `ChipType.SELECTABLE`. Don't use `CanaryTag` for interactive elements (tags are display-only).
- **Removable items** → `CanaryChip` with `ChipType.REMOVABLE` — in production, used for: applied reservation filters (each chip shows filter label with X to remove individual filters).

### "I need layout structure"
- **Full app with sidebar + header** → `CanaryAppShell` — the recommended starting point for any prototype. Includes sidebar, page header, and content area.
- **Page-level container** → `CanaryContainer` — centers content with responsive max-width. Use inside `CanaryAppShell` content area. Used for: dashboard layouts, settings pages, form sections with standardized padding.
- **Grid of items** → `CanaryGrid` — responsive CSS grid with configurable columns and gaps.
- **Overlay/dialog** → `CanaryModal` — for confirmations, forms, or detail views. Handles ESC key and overlay click. In production, modals are used for: creating demo hotels (form with inputs + selects), session re-authentication (password input), advanced reservation filters (complex filter form), payment options, image crop dialogs.

### "I need navigation"
- **App sidebar** → Use `CanaryAppShell` (includes sidebar). Only use `CanarySidebar` directly if you need a custom layout without `CanaryAppShell`.
- **Tab switching** → `CanaryTabs` — supports rounded, text, segmented, and checkbox variants. In production: tabs with badge counts for order status filtering (Pending/In Progress/Processed/Canceled with dynamic counts), round tabs for switching lookup methods (Email vs App), status filter tabs on dashboards.
- **Page title bar** → `CanaryPageHeader` — standard Canary header with property selector, user profile, and connection status.
- **Generic header** → `CanaryHeader` — simple header without Canary-specific features. Use `CanaryPageHeader` for Canary product prototypes.

### "I need to give feedback"
- **Inline message** → `CanaryAlert` — for persistent messages within page content (success, error, warning, info).
- **Temporary notification** → `CanaryToast` — auto-dismissing notification that appears in a corner. In production, toasts are used globally via a ToastStore singleton — success for "Changes saved", error for "Unexpected error", triggered after async operations complete.
- **Loading state** → `CanaryLoading` — spinner. Use while data is being fetched. In production, `CanaryLoadingContainer` wraps content sections and replaces them with a spinner during async operations (password reset, reservation loading, guest verification).

---

## Bordered vs. Underline Input Variants

Many form components come in two styles:

- **Bordered** (`CanaryInput`, `CanarySelect`, `CanaryTextArea`, etc.) — Standard inputs with a visible border and label above. Use for admin interfaces, settings pages, and staff-facing forms.
- **Underline** (`CanaryInputUnderline`, `CanarySelectUnderline`, `CanaryTextAreaUnderline`, etc.) — Floating label inputs with an underline style. Use for guest-facing flows, check-in forms, and modern/minimal designs.

**Rule of thumb:** Use **bordered** for hotel staff / admin UIs. Use **underline** for guest-facing UIs.

**Available underline variants:**
| Bordered | Underline |
|----------|-----------|
| `CanaryInput` | `CanaryInputUnderline` |
| `CanaryTextArea` | `CanaryTextAreaUnderline` |
| `CanarySelect` | `CanarySelectUnderline` |
| `CanaryInputPassword` | `CanaryInputPasswordUnderline` |
| `CanaryInputSearch` | `CanaryInputSearchUnderline` |
| `CanaryInputCreditCard` | `CanaryInputCreditCardUnderline` |
| `CanaryInputPhone` | `CanaryInputPhoneUnderline` |
| `CanaryInputDate` | `CanaryInputDateUnderline` |
| `CanaryInputDateRange` | `CanaryInputDateRangeUnderline` |

Both variants share the same props interface — switching between them only changes the visual style.

---

## Enums Reference

Always import and use these enums for type safety:

```tsx
import {
  // Button
  ButtonType,
  ButtonSize,
  ButtonColor,
  IconPosition,

  // Input
  InputType,
  InputSize,

  // Chip
  ChipType,

  // Tag
  TagColor,
  TagVariant,
  TagSize,

  // Sidebar
  SidebarVariant,
  NavigationItemState,

  // Alert
  AlertType
} from '@canary-ui/components';
```

### ButtonType
```tsx
ButtonType.PRIMARY        // Solid blue button (default)
ButtonType.OUTLINED       // Border-only button
ButtonType.SHADED         // Light background button
ButtonType.TEXT           // Text-only button
ButtonType.ICON_PRIMARY   // Icon-only, primary style
ButtonType.ICON_SECONDARY // Icon-only, secondary style
```

### ButtonSize
```tsx
ButtonSize.TABLET   // Largest
ButtonSize.LARGE    // Large
ButtonSize.NORMAL   // Default
ButtonSize.COMPACT  // Small
ButtonSize.TINY     // Smallest
```

### ButtonColor
```tsx
ButtonColor.NORMAL          // Blue (default)
ButtonColor.HEADING_TEXT    // Dark text color
ButtonColor.DANGER          // Red
ButtonColor.WARNING         // Yellow/Orange
ButtonColor.SUCCESS         // Green
ButtonColor.FONT            // Standard font color
ButtonColor.FONT_SECONDARY  // Secondary font color
ButtonColor.WHITE           // White (for dark backgrounds)
```

### IconPosition
```tsx
IconPosition.LEFT   // Icon on left of text
IconPosition.RIGHT  // Icon on right of text (default)
IconPosition.TOP    // Icon above text
```

### InputType
```tsx
InputType.TEXT           // Default text input
InputType.EMAIL          // Email input
InputType.PASSWORD       // Password input
InputType.NUMBER         // Number input
InputType.TEL            // Telephone input
InputType.URL            // URL input
InputType.SEARCH         // Search input
InputType.DATE           // Date input
InputType.TIME           // Time input
InputType.DATETIME_LOCAL // DateTime input
```

### InputSize
```tsx
InputSize.TABLET   // Largest
InputSize.LARGE    // Large
InputSize.NORMAL   // Normal (default)
InputSize.COMPACT  // Small
```

### TagColor
```tsx
TagColor.DEFAULT   // Gray
TagColor.SUCCESS   // Green
TagColor.WARNING   // Yellow/Orange
TagColor.ERROR     // Red
TagColor.INFO      // Blue
```

### TagVariant
```tsx
TagVariant.FILLED   // Solid background (default)
TagVariant.OUTLINE  // Border only
```

### TagSize
```tsx
TagSize.MEDIUM   // Default
TagSize.COMPACT  // Smaller
```

### SidebarVariant
```tsx
SidebarVariant.MAIN     // Main product sidebar
SidebarVariant.SETTINGS // Settings sidebar
SidebarVariant.CUSTOM   // Fully custom sidebar
```

### AlertType
```tsx
AlertType.SUCCESS  // Green success message
AlertType.ERROR    // Red error message
AlertType.WARNING  // Yellow warning message
AlertType.INFO     // Blue info message
```

---

## Production Component Catalog

The prototype library implements a subset of the production Canary UI library (Vue). This table maps all 101 production components to their prototype status.

### Alerts & Errors
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryBadge | **Implemented** | Status indicator badges |
| CanaryChip | **Implemented** | Selectable/removable chips |
| CanaryToast | **Implemented** | Toast notifications |

### Buttons
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryButton | **Implemented** | Full-featured button |
| CanaryAddToAppleWalletButton | Not Planned | Guest-facing payment |
| CanaryAddToGoogleWalletButton | Not Planned | Guest-facing payment |
| CanaryApplePayButton | Not Planned | Guest-facing payment |
| CanaryGooglePayButton | Not Planned | Guest-facing payment |
| CanaryPaymentRequestButton | Not Planned | Guest-facing payment |

### Data Display
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryDraggable | **Implemented** | Via CanaryList isDraggable |
| CanaryList | **Implemented** | List container |
| CanaryListItem | **Implemented** | List item |
| CanaryListLoader | Not Planned | Use CanaryLoading instead |
| CanaryListLoaderForChat | Not Planned | Chat-specific |
| CanaryTable | **Implemented** | Data table |
| CanaryTag | **Implemented** | Status tags |
| CanaryTooltip | **Implemented** | Hover tooltip |
| CanaryTooltipIcon | **Implemented** | Info icon with tooltip |
| CanaryTooltipPopup | Not Planned | Low-level tooltip primitive |
| CanaryTimestamp | **Implemented** | Date/time display |
| CanaryProfileImage | **Implemented** | User avatar with initials fallback |

### Events
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryAuditLog | Not Planned | Admin audit log |
| CanaryAuditLogText | Not Planned | Admin audit log text |
| CanaryTimestamp | **Implemented** | In data-display category |

### Features
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryMessageTemplateEditor | Not Planned | Complex messaging editor |
| CanaryQuill | Not Planned | Rich text editor |
| CanarySettingField | Not Planned | Use CanaryInput directly |
| CanarySettingsCard | **Implemented** | Settings card with view/edit modes |
| CanarySettingsCardLegacy | Not Planned | Legacy version |

### Forms
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryAutocomplete | **Implemented** | Search-as-you-type input |
| CanaryCalendarControl | **Implemented** | Via CanaryCalendar |
| CanaryCalendarInput | **Implemented** | Via CanaryInputDate |
| CanaryCheckbox | **Implemented** | Checkbox input |
| CanaryCounter | **Implemented** | Numeric counter |
| CanaryCreditCardInput | **Implemented** | Via CanaryInputCreditCard |
| CanaryEditableField | Not Planned | Use CanaryInput with isReadonly |
| CanaryEmojiPicker | Not Planned | Specialized picker |
| CanaryExpandCheckbox | Not Planned | Use CanaryCheckbox + CanaryExpand |
| CanaryForm | Not Planned | Use native form element |
| CanaryFormLabel | **Implemented** | Form field label |
| CanaryInput | **Implemented** | Text input |
| CanaryInputCurrency | Not Planned | Use CanaryInput type=number |
| CanaryInputDate | **Implemented** | Date picker |
| CanaryInputMultiple | **Implemented** | Multi-value input |
| CanaryInputPhone | **Implemented** | Phone input |
| CanaryInputTime | Not Planned | Use CanaryInput type=time |
| CanaryNote | **Implemented** | Inline callout |
| CanaryRadio | **Implemented** | Radio button |
| CanaryRadioGroup | **Implemented** | Radio group container |
| CanaryRating | Not Planned | Star rating |
| CanarySearch | **Implemented** | Via CanaryInputSearch |
| CanarySelect | **Implemented** | Dropdown select |
| CanarySelectCountry | Not Planned | Use CanarySelect with country data |
| CanarySelectDaysOfWeek | Not Planned | Use CanarySelect |
| CanarySignature | Not Planned | Signature capture |
| CanaryTextArea | **Implemented** | Multi-line input |
| CanaryValidationError | **Implemented** | Error message display |
| CanaryValidationGroup | Not Planned | Use form-level validation |

### Layout
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| AlertModal | Not Planned | Use CanaryModal |
| CanaryCard | **Implemented** | Card container |
| CanaryCarousel | Not Planned | Image carousel |
| CanaryContainer | **Implemented** | Responsive container |
| CanaryDialog | **Implemented** | Dialog overlay |
| CanaryDivider | **Implemented** | Horizontal/vertical divider |
| CanaryExpand | **Implemented** | Accordion/collapsible |
| CanaryGroupedList | Not Planned | Use CanaryList with sections |
| CanaryLayoutGridSimple | **Implemented** | Via CanaryGrid |
| CanaryListTile | Not Planned | Use CanaryListItem |
| CanaryListTileExpandable | Not Planned | Use CanaryListItem + CanaryExpand |
| CanaryModal | **Implemented** | Modal overlay |
| CanaryModalContainer | Not Planned | Low-level modal primitive |
| CanaryScrollableContainer | Not Planned | Use CSS overflow |
| CanarySectionContainer | Not Planned | Use CanaryContainer |
| CanarySideSheet | **Implemented** | Slide-out side panel |
| CanarySettingsCard | **Implemented** | In layout category |
| ConfirmModal | Not Planned | Use CanaryModal with confirm pattern |
| GdprModal | Not Planned | GDPR-specific |

### Loading
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryLoading | **Implemented** | Loading spinner |

### Media & Upload
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryHeroImage | Not Planned | Guest-facing hero |
| CanaryImage | Not Planned | Use native img |
| CanaryImageCarousel | Not Planned | Image gallery |
| CanaryImageCropDialog | Not Planned | Image editing |
| CanaryImageGroupManager | Not Planned | Admin image management |
| CanaryImagePlaceholder | Not Planned | Use placeholder div |
| CanaryImageViewer | Not Planned | Lightbox viewer |
| CanaryProfileImage | **Implemented** | In data-display category |
| CanaryUploadFile | Not Planned | File upload |

### Navigation
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryHeader | **Implemented** | Generic header |
| CanaryOverflowMenu | **Implemented** | Three-dot action menu |
| CanaryProgressBar | **Implemented** | Progress indicator |
| CanarySteps | **Implemented** | Multi-step indicator |
| CanaryTab | **Implemented** | Via CanaryTabs |
| CanaryTabs | **Implemented** | Tabbed navigation |

### Previews
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryPhoneFrame | Not Planned | Mobile preview frame |
| CanaryPreview | Not Planned | Preview container |
| CanaryPreviewDesktop | Not Planned | Desktop preview |
| CanaryPreviewMobile | Not Planned | Mobile preview |
| CanaryPreviewPaneControls | Not Planned | Preview controls |

### Root
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryScopedTheme | Not Planned | Vue-specific theming |

### Routing
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryNestedRouterView | Not Planned | Vue Router specific |
| CanaryRouterView | Not Planned | Vue Router specific |

### Transitions
| Production Component | Prototype Status | Notes |
|---------------------|-----------------|-------|
| CanaryPopTransition | Not Planned | Use framer-motion |
| CanaryTransition | Not Planned | Use framer-motion |
| CanaryTransitionBox | Not Planned | Use framer-motion |

---

## Production Enums Reference (Complete)

These are all enums from the production library. Enums marked with **(Prototype)** are available for import. Others are documented for API awareness.

### Button Enums (Prototype)
```tsx
ButtonType.PRIMARY | OUTLINED | SHADED | TEXT | ICON_PRIMARY | ICON_SECONDARY
ButtonSize.TABLET | LARGE | NORMAL | COMPACT | TINY
ButtonColor.NORMAL | HEADING_TEXT | DANGER | WARNING | SUCCESS | FONT | FONT_SECONDARY | WHITE
IconPosition.LEFT | RIGHT | TOP
```

### Input Enums (Prototype)
```tsx
InputSize.TABLET | LARGE | NORMAL | COMPACT
InputType.TEXT | EMAIL | PASSWORD | NUMBER | TEL | URL | SEARCH | DATE | TIME | DATETIME_LOCAL
```

### Card Enums (Prototype)
```tsx
CardPadding.DEFAULT | COMPACT | NONE
CardBoxShadow.SMALL | MEDIUM | LARGE | NONE
CardInnerSpacing.NONE | TINY | SMALL | DEFAULT
```

### List Enums (Prototype)
```tsx
ListStyle.STRIPES | DIVIDERS
ListItemPadding.NORMAL | COMPACT
ListItemAlignment.START | CENTER
DraggableIconSize.DEFAULT | LARGE
```

### Tab Enums (Prototype)
```tsx
TabSize.LARGE | NORMAL | COMPACT
TabType.ROUND | PRIMARY | TEXT
```

### Tag Enums (Prototype)
```tsx
TagColor.DEFAULT | SUCCESS | WARNING | ERROR | INFO
TagVariant.FILLED | OUTLINE
TagSize.MEDIUM | COMPACT
```

### Chip Enums (Prototype)
```tsx
ChipType.SELECTABLE | REMOVABLE
```

### Badge Enums (Prototype)
```tsx
BadgeType.URGENT | INFO | WARNING
BadgeSize.NORMAL | LARGE
```

### Dialog Enums (Prototype)
```tsx
DialogStretch.COMPACT | NORMAL | FILL
DialogCloseButtonSize.DEFAULT | LARGE | TABLET
```

### Divider Enums (Prototype)
```tsx
DividerDirection.HORIZONTAL | VERTICAL
```

### Note Enums (Prototype)
```tsx
NoteColor.OK | WARNING | DANGER
```

### Tooltip Enums (Prototype)
```tsx
TooltipPosition.AUTO | TOP | BOTTOM | LEFT | RIGHT
TooltipIconColor.PRIMARY | SECONDARY | DANGER
```

### Timestamp Enums (Prototype)
```tsx
TimestampFormat.DATETIME | DATETIME_ZONE | RELATIVE_TIME
TimestampColor.PRIMARY | SECONDARY
```

### Profile Image Enums (Prototype)
```tsx
ProfileImageSize.LARGE | NORMAL | MEDIUM | SMALL | TINY
```

### Settings Card Enums (Prototype)
```tsx
SettingsCardState.VIEW | NEW | EDIT | DISABLED
```

### Progress/Steps Enums (Prototype)
```tsx
ProgressBarVariant.STEPS | CONTINUOUS
StepsOrientation.HORIZONTAL | VERTICAL
```

### Sidebar Enums (Prototype)
```tsx
SidebarVariant.MAIN | SETTINGS | CUSTOM
NavigationItemState.DEFAULT | SELECTED | FOCUS | ON_PRESS | DISABLED
```

### Form Label Enums (Prototype)
```tsx
LabelSize.NORMAL | LARGE | TABLET
```

### Production-Only Enums (Not in Prototype)
```
CheckboxColor.NORMAL | HEADER
CheckboxType.BOX | SWITCH
ConfirmType.NORMAL | DANGER
ContainerBoxShadow.SMALL | MEDIUM | LARGE | NONE
ContainerInnerSpacing.NONE | TINY | SMALL | DEFAULT
ContainerPadding.DEFAULT | COMPACT | NONE
GridItemPlacement.TOP | BOTTOM | CENTER | FILL
GridItemSize.EQUAL | MIN_CONTENT | MAX_CONTENT
LoadingColor.TRANSPARENT | FONT_COLOR_SECONDARY
MobileDialogStretch.FIT_CONTENT | FULL_SCREEN
MobileDialogStyle.DEFAULT | BOTTOM_DRAWER
ScrollDirection.TOP_TO_BOTTOM | BOTTOM_TO_TOP
SectionContainerType.PRIMARY | WARNING | ERROR | LIGHT | BLACK | GRAY
SelectPlacement.AUTO | AUTO_START | ... | LEFT_END (same as TooltipPosition)
TileSize.LARGE | NORMAL
TimestampPosition.BOTTOM
TransitionStyle.NONE | FADE | POP | SLIDE_IN | ...
CanaryPreviewDisplayMode.DESKTOP | MOBILE | MOBILE_FRAMELESS
AlertType (production): ERROR | NORMAL | NOOP
```

---

## Production Design Token Cross-Reference

The prototype uses TypeScript design tokens that approximate the production SCSS/CSS variables.

### Spacing (Production → Prototype)
| Production SCSS | Value | Prototype Token |
|----------------|-------|-----------------|
| `$space-xsmall` | `4px` | `spacing[1]` |
| `$space-small` | `8px` | `spacing[2]` |
| `$space-medium` | `16px` | `spacing[4]` |
| `$space-large` | `24px` | `spacing[6]` |

### Border Radius
| Production SCSS | Value | Prototype Token |
|----------------|-------|-----------------|
| `$border-radius-sharp` | `2px` | `borderRadius.sm` |
| `$border-radius-default` | `4px` | `borderRadius.default` |
| `$border-radius-round` | `8px` | `borderRadius.lg` |
| `$border-radius-very-high` | `999999px` | `borderRadius.full` |

### Shadows
| Production SCSS | Value | Prototype Token |
|----------------|-------|-----------------|
| `$box-shadow-small` | `0 2px 4px rgb(0 0 0 / 6%)` | `shadows.sm` |
| `$box-shadow-default` | `0 8px 16px rgb(0 0 0 / 16%)` | `shadows.default` |
| `$box-shadow-large` | `0 12px 32px rgb(0 0 0 / 12%)` | `shadows.lg` |

### Z-Index
| Production SCSS | Value | Prototype Token |
|----------------|-------|-----------------|
| `$z-index-modal` | `50` | `zIndex.modal` |
| `$z-index-popover` | `51` | `zIndex.popover` |
| `$z-index-toast` | `100` | `zIndex.toast` |

### Layout
| Production SCSS | Value | Prototype Token |
|----------------|-------|-----------------|
| `$header-height` | `75px` | `dimensions.headerHeight` (56px) |
| `$left-nav-width` | `180px` | Sidebar width (180px) |

### Color Differences (Intentional Prototype Simplifications)
| Color | Production | Prototype | Note |
|-------|-----------|-----------|------|
| Grayscale 1 | `#2d2d2d` | `#000000` | Prototype uses pure black |
| Grayscale 2 | `#414141` | `#333333` | Slightly different |
| Light Green 1 | `#22d39a` | `#008040` | Prototype uses dark green |
| Purple 1 | `#9b51e0` | `#3304AD` | Different purple base |

---

## Common Production Prop Patterns

These patterns are consistent across production form components. The prototype implements most of these.

### Standard Form Props
All production form inputs share:
```tsx
{
  value / modelValue   // Current value
  label               // Field label
  placeholder         // Placeholder text
  size                // InputSize enum
  isDisabled          // Prevents interaction
  isReadonly          // Read-only display
  isRequired          // Required field indicator
  rules               // ValidationRule[] (production only)
  error               // Error message string (prototype equivalent of rules)
  helperText          // Helper text below input
}
```

### Standard State Props
Used across many component types:
```tsx
{
  isDisabled          // 23 components use this
  isLoading           // 8 components
  isExpanded          // 7 components
  isSelected          // Used in lists, chips
  isClickable         // Used in list items
  isReadonly          // 13 components (forms)
  isRequired          // 11 components (forms)
  hasError            // Used in lists
}
```

### Standard Style Props
```tsx
{
  size                // ButtonSize or InputSize
  color               // Component-specific color enum
  type                // Component-specific type/variant enum
  icon                // ReactNode (icon element)
  className           // Additional CSS classes
}
```

---

## Component APIs

### CanaryButton

Interactive button for triggering actions. Supports primary, secondary, outlined, text, and icon-only variants with loading states.

**When to use:**
- `ButtonType.PRIMARY` — main call-to-action: submit forms, confirm dialogs, save changes. Use one per section. In production: "Approve" order buttons, authorization form submit, e-folio charge submission.
- `ButtonType.OUTLINED` — secondary actions alongside a primary: cancel, go back. In production: filter buttons with icon and badge count on reservation dashboards.
- `ButtonType.SHADED` + `ButtonSize.COMPACT` — tertiary actions in table rows. In production: "View Details", "Approve", "Deny" buttons in food & beverage order rows.
- `ButtonType.TEXT` — minimal actions that look like links: "View all", "Skip", "Edit". In production: card header actions, modal close alternatives.
- `ButtonType.TEXT` + `ButtonColor.WHITE` — buttons on dark backgrounds like the sidebar. In production: "Back" button with left arrow icon on settings sidebar.
- `ButtonType.ICON_PRIMARY` / `ICON_SECONDARY` — icon-only buttons in toolbars, table rows, or compact spaces.
- `ButtonColor.DANGER` — destructive actions: delete, remove, cancel. Always pair with a confirmation modal.
- `isLoading` — set during async operations to show spinner and prevent double-clicks. In production: set while API requests are in-flight, disabled when another action is loading.
- `isExpanded` — full-width buttons in modals, mobile views, or single-action cards. In production: submit buttons at bottom of modal forms.

**When NOT to use:**
- Navigation to another page without button styling — use a regular `<a>` or Next.js `<Link>`
- Toggling a boolean state — use `CanarySwitch` or `CanaryCheckbox`
- Selecting from options — use `CanaryChip`, `CanarySegmentedControl`, or `CanaryRadioGroup`

```tsx
interface CanaryButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  type?: ButtonType;              // PRIMARY | OUTLINED | SHADED | TEXT | ICON_PRIMARY | ICON_SECONDARY
  size?: ButtonSize;              // TABLET | LARGE | NORMAL | COMPACT | TINY
  color?: ButtonColor;            // NORMAL | HEADING_TEXT | DANGER | WARNING | SUCCESS | FONT | FONT_SECONDARY | WHITE
  icon?: ReactNode;               // Icon element
  iconPosition?: IconPosition;    // LEFT | RIGHT | TOP
  isDisabled?: boolean;
  isLoading?: boolean;
  isExpanded?: boolean;           // Full width
  isRounded?: boolean;            // Fully rounded corners
  href?: string;                  // Renders as <a> tag
  target?: string;                // Link target
  nativeType?: "button" | "submit" | "reset";
  className?: string;
}
```

**Examples:**
```tsx
// Primary button
<CanaryButton type={ButtonType.PRIMARY}>Submit</CanaryButton>

// Button with icon
<CanaryButton
  type={ButtonType.PRIMARY}
  icon={<Icon path={mdiPlusOutline} size={1} />}
  iconPosition={IconPosition.LEFT}
>
  Add Item
</CanaryButton>

// Danger button
<CanaryButton type={ButtonType.PRIMARY} color={ButtonColor.DANGER}>
  Delete
</CanaryButton>

// Loading button
<CanaryButton type={ButtonType.PRIMARY} isLoading>
  Saving...
</CanaryButton>

// Back button (for dark backgrounds like sidebar)
<CanaryButton
  type={ButtonType.TEXT}
  color={ButtonColor.WHITE}
  icon={<Icon path={mdiArrowLeft} size={1} />}
  iconPosition={IconPosition.LEFT}
>
  Back
</CanaryButton>
```

### CanaryInput

Standard bordered text input with label, validation, and optional left/right addons.

**When to use:**
- Single-line text entry in admin/staff forms. In production: hotel names, guest names, email addresses, confirmation codes, cohort labels, membership lookup by email.
- `InputSize.TABLET` (64px) — touch-friendly kiosk/tablet interfaces
- `InputSize.LARGE` (48px) — prominent form fields, hero forms
- `InputSize.NORMAL` (40px) — standard form fields (default)
- `InputSize.COMPACT` (32px) — dense forms, inline editing, table filters
- `leftAddon` / `rightAddon` — icons, currency symbols, or unit labels inside the input
- `error` prop — inline validation messages shown below the field in red
- `helperText` prop — persistent help text below the field
- Use with `CanaryForm` wrapper for form submission handling

**When NOT to use:**
- Multi-line text — use `CanaryTextArea` (supports auto-expand)
- Password entry — use `CanaryInputPassword` (has built-in show/hide toggle)
- Search field — use `CanaryInputSearch` (has built-in search icon)
- Phone number — use `CanaryInputPhone` (has country code picker)
- Credit card — use `CanaryInputCreditCard` (has formatting and card detection)
- Currency amount — use `CanaryInputCurrency` (formats with currency symbol)
- Date entry — use `CanaryInputDate` (has split fields and calendar picker)
- Multiple values — use `CanaryInputMultiple` (chip-based entry)
- Guest-facing forms — use `CanaryInputUnderline` (floating label style)

```tsx
interface CanaryInputProps {
  label?: string;
  type?: InputType;               // TEXT | EMAIL | PASSWORD | NUMBER | TEL | URL | SEARCH | DATE | TIME
  size?: InputSize;               // TABLET | LARGE | NORMAL | COMPACT
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  error?: string;                 // Error message
  helperText?: string;            // Helper text below input
  leftAddon?: ReactNode;          // Element on left
  rightAddon?: ReactNode;         // Element on right
  className?: string;
}
```

**Examples:**
```tsx
// Basic input
<CanaryInput
  label="Email"
  type={InputType.EMAIL}
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Input with error
<CanaryInput
  label="Password"
  type={InputType.PASSWORD}
  error="Password must be at least 8 characters"
/>

// Input with addons
<CanaryInput
  placeholder="Search..."
  leftAddon={<Icon path={mdiMagnify} size={0.8} />}
/>
```

### CanarySelect

Dropdown select using native HTML `<select>` with custom styling and a dropdown arrow icon.

**When to use:**
- Choosing one option from a list of 4+ items
- When screen space is limited and options shouldn't all be visible at once
- Form fields like country, state, room type, status

**When NOT to use:**
- 2–3 visible choices — use `CanaryRadioGroup` or `CanarySegmentedControl` instead
- Multi-select — render multiple `CanaryCheckbox` components or use `CanaryInputMultiple`
- Searchable/autocomplete dropdown — this component uses native browser dropdown; consider building a custom solution if you need filtering
- Guest-facing forms — use `CanarySelectUnderline`

```tsx
interface CanarySelectProps {
  label?: string;
  options: CanarySelectOption[];
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  size?: InputSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
}

interface CanarySelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```

**Example:**
```tsx
<CanarySelect
  label="Country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
/>
```

### CanaryCard

Container component for grouping related content with optional title, subtitle, header actions, and footer.

**When to use:**
- Grouping related form fields (e.g., "Payment Info", "Guest Details")
- Dashboard widgets or summary panels
- Settings sections with a title and save button in the footer
- Any content that needs visual separation with a border/shadow

**When NOT to use:**
- Full-page layout — use `CanaryContainer` or `CanaryAppShell`
- Modal/overlay content — use `CanaryModal`
- List items — use `CanaryListItem` inside `CanaryList`

```tsx
interface CanaryCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  headerActions?: ReactNode;      // Buttons/actions in header
  footer?: ReactNode;
  padding?: "none" | "small" | "medium" | "large";
  hasShadow?: boolean;
  hasBorder?: boolean;
  className?: string;
  onClick?: () => void;
}
```

**Examples:**
```tsx
// Simple card
<CanaryCard title="User Profile">
  <CanaryInput label="Name" />
</CanaryCard>

// Card with actions
<CanaryCard
  title="Payment Info"
  headerActions={<CanaryButton type={ButtonType.TEXT}>Edit</CanaryButton>}
  footer={<CanaryButton type={ButtonType.PRIMARY}>Save</CanaryButton>}
>
  {/* content */}
</CanaryCard>
```

### CanaryModal

Fixed-position modal dialog with overlay, title bar, and optional footer. Handles ESC key and prevents body scrolling.

**When to use:**
- Confirmation dialogs ("Are you sure you want to delete?")
- Forms that overlay the current page. In production, modals are used for: creating demo hotels (form with CanaryInput + CanarySelect + CanaryButton), session re-authentication (password input for PCI operations), advanced reservation filters (complex filter form with date ranges, statuses, room types), payment schedule configuration, image cropping.
- `size="small"` — simple confirmations and quick actions
- `size="medium"` — standard forms and detail views (default)
- `size="large"` — complex forms with tables, multi-section content
- `size="full"` — fullscreen takeover for immersive experiences or mobile
- `footer` — place Save/Cancel action buttons in a consistent footer area
- `closeOnOverlayClick={false}` — prevent accidental dismissal for forms with unsaved changes

**When NOT to use:**
- Full-page forms — navigate to a new page instead
- Inline alerts or messages — use `CanaryAlert`
- Temporary notifications — use `CanaryToast`
- Side panels — this library doesn't include a drawer component; use `CanaryModal` with `size="large"` as an alternative

```tsx
interface CanaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "small" | "medium" | "large" | "full";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}
```

**Example:**
```tsx
const [isOpen, setIsOpen] = useState(false);

<CanaryModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure?</p>
  <div className="flex gap-2 mt-4">
    <CanaryButton type={ButtonType.OUTLINED} onClick={() => setIsOpen(false)}>
      Cancel
    </CanaryButton>
    <CanaryButton type={ButtonType.PRIMARY}>
      Confirm
    </CanaryButton>
  </div>
</CanaryModal>
```

### CanaryPageHeader

The standard Canary page header with property selector, reservation status badge, and user profile.

**When to use:**
- Any prototype that represents a Canary product page — this is the standard header
- When you need to show hotel/property context, user identity, and connection status
- Usually used via `CanaryAppShell` (which includes it automatically), not directly

**When NOT to use:**
- Non-Canary product prototypes — use `CanaryHeader` for generic apps
- Landing pages or guest-facing screens — these typically don't have a page header
- When using `CanaryAppShell` — it already includes `CanaryPageHeader`; pass header props to `CanaryAppShell` instead

```tsx
interface CanaryPageHeaderProps {
  propertyName: string;                    // Property/Hotel name (left side)
  onPropertyClick?: () => void;            // Property selector click handler
  userProfile?: {
    name: string;
    role: string;
    avatarUrl?: string;                    // Optional - shows initials if not provided
  };
  onUserProfileClick?: () => void;
  reservationStatus?: {
    label: string;                         // e.g., "Reservations"
    isConnected: boolean;                  // Green when true, gray when false
  };
  onReservationStatusClick?: () => void;
  actions?: ReactNode;                     // Additional actions before user profile
  className?: string;
}
```

**Example:**
```tsx
<CanaryPageHeader
  propertyName="Statler New York"
  onPropertyClick={() => openPropertySelector()}
  reservationStatus={{
    label: "Reservations",
    isConnected: true
  }}
  userProfile={{
    name: "Theresa Webb",
    role: "Front Desk",
    avatarUrl: "https://..."
  }}
  onUserProfileClick={() => openUserMenu()}
/>
```

### CanaryAppShell

**RECOMMENDED FOR PROTOTYPES** — Complete application scaffolding that combines sidebar, page header, and content area. Use this as your starting point.

**When to use:**
- Starting any new prototype — this should be your first component
- Any page that needs a sidebar + header + content layout (most admin/staff UIs)
- Both main product views (`SidebarVariant.MAIN`) and settings pages (`SidebarVariant.SETTINGS`)
- Custom dashboard layouts (`SidebarVariant.CUSTOM` with custom sidebar sections)

**When NOT to use:**
- Guest-facing pages (check-in flows, surveys) — these typically don't have a sidebar
- Login/authentication screens — use a centered layout without sidebar
- Fullscreen or embedded views — use `CanaryContainer` or plain layout instead

```tsx
interface CanaryAppShellProps {
  children: ReactNode;                     // Your page content goes here

  // Sidebar props
  sidebarVariant?: SidebarVariant;         // MAIN | SETTINGS | CUSTOM
  sidebarSections?: SidebarSection[];      // Custom sections (optional)
  selectedSidebarItemId?: string;
  onSidebarItemClick?: (itemId: string) => void;
  sidebarTitle?: string;                   // For SETTINGS variant
  sidebarBackButton?: ReactNode;           // For SETTINGS variant
  hideSidebar?: boolean;                   // Hide sidebar entirely

  // Header props
  propertyName?: string;                   // Default: "Property Name"
  onPropertyClick?: () => void;
  userProfile?: { name: string; role: string; avatarUrl?: string };
  onUserProfileClick?: () => void;
  reservationStatus?: { label: string; isConnected: boolean };
  onReservationStatusClick?: () => void;
  headerActions?: ReactNode;
  hideHeader?: boolean;                    // Hide header entirely

  // Content area props
  contentPadding?: "none" | "small" | "medium" | "large";  // Default: "medium"
  contentBackground?: string;              // Default: colorBlack7 (#F0F0F0)
  contentClassName?: string;

  className?: string;
}
```

**Basic Example:**
```tsx
<CanaryAppShell
  propertyName="My Hotel"
  userProfile={{ name: "John Doe", role: "Manager" }}
  reservationStatus={{ label: "Reservations", isConnected: true }}
  onSidebarItemClick={(id) => router.push(`/${id}`)}
>
  <YourPageContent />
</CanaryAppShell>
```

**Settings Page Example:**
```tsx
<CanaryAppShell
  sidebarVariant={SidebarVariant.SETTINGS}
  sidebarTitle="Settings"
  sidebarBackButton={
    <CanaryButton
      type={ButtonType.TEXT}
      color={ButtonColor.WHITE}
      icon={<Icon path={mdiArrowLeft} size={1} />}
      iconPosition={IconPosition.LEFT}
    >
      Back
    </CanaryButton>
  }
  propertyName="My Hotel"
  userProfile={{ name: "Admin", role: "Administrator" }}
>
  <SettingsContent />
</CanaryAppShell>
```

**Custom Sidebar Example:**
```tsx
<CanaryAppShell
  sidebarVariant={SidebarVariant.CUSTOM}
  sidebarSections={[
    createCustomSection([
      sidebarTabs.dashboard,
      sidebarTabs.properties,
      sidebarTabs.analytics
    ], { title: 'Overview' })
  ]}
  propertyName="Corporate HQ"
  contentPadding="none"
>
  <DashboardContent />
</CanaryAppShell>
```

### CanaryTag

Non-interactive colored label for displaying status, categories, or metadata. Purely visual — no click handlers.

**When to use (with production status examples):**
- `TagColor.ERROR` (red) — "Blocked", "Declined", "Failed", "Expired", "Overdue"
- `TagColor.WARNING` (yellow) — "In Transit", "Expiring Soon", "Pending Review", time elapsed indicators (e.g., "15m ago" that turns red after threshold)
- `TagColor.SUCCESS` (green) — "Active", "Confirmed", "Fulfilled", "Connected", "Paid"
- `TagColor.INFO` (blue) — "Submitted", "In Progress", "New", "Scheduled"
- `TagColor.DEFAULT` (gray) — "Archived", "Draft", "N/A", "Inactive"
- `TagVariant.FILLED` — prominent status in dashboards, headers, key metrics
- `TagVariant.OUTLINE` — subtle indicators in table cells, secondary context
- `TagSize.COMPACT` — inside table cells or dense layouts
- `customColor` — for payment intent statuses or brand-specific colors not covered by the standard palette

**When NOT to use:**
- Interactive/clickable tags — use `CanaryChip` with `ChipType.SELECTABLE` instead
- Removable items — use `CanaryChip` with `ChipType.REMOVABLE`
- Action buttons — use `CanaryButton`

```tsx
interface CanaryTagProps {
  label: string;
  color?: TagColor;               // DEFAULT | SUCCESS | WARNING | ERROR | INFO
  variant?: TagVariant;           // FILLED | OUTLINE
  size?: TagSize;                 // MEDIUM | COMPACT
  customColor?: {
    backgroundColor?: string;
    borderColor?: string;
    fontColor?: string;
    iconColor?: string;
  };
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  uppercase?: boolean;
  className?: string;
}
```

**Examples:**
```tsx
<CanaryTag label="Active" color={TagColor.SUCCESS} />
<CanaryTag label="Pending" color={TagColor.WARNING} variant={TagVariant.OUTLINE} />
<CanaryTag label="Error" color={TagColor.ERROR} />
```

### CanaryAlert

Inline alert banner for displaying persistent messages within page content.

**When to use:**
- Form validation summaries at the top of a form
- Important notices that should stay visible until dismissed
- Success confirmations that appear inline (e.g., "Settings saved")
- Warning messages about system state (e.g., "PMS connection lost")

**When NOT to use:**
- Temporary notifications — use `CanaryToast` (auto-dismisses after a few seconds)
- Per-field validation errors — use the `error` prop on individual form components
- Empty state messages — use custom empty state content or `CanaryList` with `isEmpty`

```tsx
interface CanaryAlertProps {
  message: string;
  type?: AlertType;               // SUCCESS | ERROR | WARNING | INFO
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}
```

**Example:**
```tsx
<CanaryAlert
  type={AlertType.SUCCESS}
  title="Success!"
  message="Your changes have been saved."
  onClose={() => setShowAlert(false)}
/>
```

### CanaryList

List container with built-in support for drag-and-drop reordering, loading, empty, and error states.

**When to use:**
- Displaying ordered items (tasks, contacts, settings, rooms). In production, lists are used for: food & beverage menu items (with images, modifiers, pricing, and quantity counters in left/title/subtitle/right slots), settings sections, contact details.
- Reorderable lists (priority ordering, custom sort) — set `isDraggable` and provide `onReorder`
- Lists with state handling: `isLoading` + `loadingContent` for async data, `isEmpty` + `emptyContent` for zero-state, `hasError` + `errorContent` for failures.
- Rich list items: use scoped content areas (`leftContent` for avatars/images, `title`/`subtitle` for text, `rightContent` for action buttons, quantity counters, or status indicators).

**When NOT to use:**
- Tabular data with columns — use `CanaryTable`
- Simple vertical stacking without list semantics — use plain `div` with flexbox/gap
- Navigation menus — use `CanarySidebar` or `CanaryTabs`

```tsx
interface CanaryListProps {
  children: ReactNode;
  items?: any[];                  // For controlled drag-and-drop
  isDraggable?: boolean;
  onReorder?: (items: any[]) => void;
  hasOuterBorder?: boolean;
  isLoading?: boolean;
  loadingContent?: ReactNode;
  isEmpty?: boolean;
  emptyContent?: ReactNode;
  hasError?: boolean;
  errorContent?: ReactNode;
  className?: string;
}
```

### CanaryListItem

Flexible list item with structured layout (icon, title, subtitle, description, left/right content areas).

**When to use:**
- Inside `CanaryList` for consistent list item rendering
- Items with title + subtitle + icon pattern (contacts, reservations, settings)
- Clickable items that navigate or trigger actions
- Draggable items in a reorderable list (set `isDraggable`)

**When NOT to use:**
- Table rows — use `CanaryTable` with column definitions
- Card-style content — use `CanaryCard`
- Custom layouts that don't follow the title/subtitle/icon pattern — use `children` prop for fully custom content

```tsx
interface CanaryListItemProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  children?: ReactNode;           // Custom structure (overrides all convenience props)
  onClick?: () => void;
  href?: string;
  isClickable?: boolean;
  isDraggable?: boolean;
  isSelected?: boolean;
  padding?: "normal" | "compact";
  alignment?: "start" | "center";
  allowTextWrap?: boolean;
  className?: string;
}
```

**Examples:**
```tsx
// Static list
<CanaryList hasOuterBorder>
  <CanaryListItem
    title="John Doe"
    subtitle="john@example.com"
    icon={<Icon path={mdiAccountOutline} size={1} />}
  />
  <CanaryListItem
    title="Jane Smith"
    subtitle="jane@example.com"
    icon={<Icon path={mdiAccountOutline} size={1} />}
  />
</CanaryList>

// Draggable list
const [items, setItems] = useState([
  { id: '1', name: 'Task 1' },
  { id: '2', name: 'Task 2' }
]);

<CanaryList isDraggable items={items} onReorder={setItems} hasOuterBorder>
  {items.map(item => (
    <CanaryListItem key={item.id} title={item.name} isDraggable />
  ))}
</CanaryList>
```

### CanarySidebar

Side navigation panel with pre-built sections for Canary product navigation and settings.

**When to use:**
- Only when building a custom layout without `CanaryAppShell`
- When you need direct control over sidebar rendering separate from the page layout

**When NOT to use:**
- Most prototypes — use `CanaryAppShell` instead, which includes `CanarySidebar` and handles layout automatically. Pass sidebar props (`sidebarVariant`, `sidebarSections`, etc.) to `CanaryAppShell`.

```tsx
interface CanarySidebarProps {
  variant?: SidebarVariant;       // MAIN | SETTINGS | CUSTOM
  sections?: SidebarSection[];
  logo?: ReactNode;
  title?: string;                 // For SETTINGS variant
  backButton?: ReactNode;         // For SETTINGS variant
  selectedItemId?: string;
  onItemClick?: (itemId: string) => void;
  width?: number;
  className?: string;
}

interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarNavigationItem[];
}

interface SidebarNavigationItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  badge?: string | number;
}
```

---

## Pre-built Sidebar Sections

Import ready-to-use sidebar configurations:

```tsx
import {
  standardMainSidebarSections,     // Main product sidebar
  standardSettingsSidebarSections  // Settings sidebar
} from '@canary-ui/components';
```

### Settings Sidebar Content (standardSettingsSidebarSections)

**IMPORTANT:** When using `SidebarVariant.SETTINGS`, the sidebar automatically uses these exact sections. Do NOT guess or modify these - they match the actual Canary product:

**General Settings Section:**
- Property Info (mdiHomeOutline)
- Branding (mdiPaletteOutline) 
- Billing & Payment (mdiCreditCardOutline)
- Staff Members (mdiAccountGroupOutline)
- Security (mdiShieldAccountOutline)
- Integrations (mdiPuzzleOutline)
- Devices (mdiTabletCellphone)

**Product Settings Section:**
- Compendium (mdiNewspaperVariantOutline)
- Guest Journey (mdiAccountCheckOutline)
- Upsells (mdiCashMultiple)
- Check-in (mdiLogin)
- Checkout (mdiLogout)
- Messages (mdiMessageProcessingOutline)
- Calls (mdiPhoneOutline)
- Authorizations (mdiShieldCheckOutline)
- Digital Tips (mdiCurrencyUsd)
- Contracts (mdiFileSign)
- Payment Links (mdiCreditCardOutline)

**Usage:**
```tsx
// Main sidebar
<CanarySidebar sections={standardMainSidebarSections} />

// Settings sidebar - automatically uses correct sections
<CanarySidebar
  variant={SidebarVariant.SETTINGS}
  title="Settings"
  backButton={<BackButton />}
/>

// With CanaryAppShell (RECOMMENDED)
<CanaryAppShell
  sidebarVariant={SidebarVariant.SETTINGS}
  sidebarTitle="Settings"
  sidebarBackButton={<BackButton />}
>
  <SettingsContent />
</CanaryAppShell>
```

---

## Pre-built Sidebar Tabs ("Lego Pieces")

Import individual tabs for custom sidebars:

```tsx
import { sidebarTabs } from '@canary-ui/components';
```

### Available Tabs

**Main Product Tabs:**
| Tab ID | Label | Icon |
|--------|-------|------|
| `sidebarTabs.upsells` | Upsells | mdiTagOutline |
| `sidebarTabs.checkIn` | Check-in | mdiLoginVariant |
| `sidebarTabs.checkout` | Checkout | mdiLogoutVariant |
| `sidebarTabs.messages` | Messages | mdiMessageOutline |
| `sidebarTabs.calls` | Calls | mdiPhoneOutline |
| `sidebarTabs.digitalTips` | Digital Tips | mdiCashMultiple |
| `sidebarTabs.authorizations` | Authorizations | mdiCreditCardOutline |
| `sidebarTabs.contracts` | Contracts | mdiFileDocumentOutline |
| `sidebarTabs.idVerification` | ID Verification | mdiCardAccountDetailsOutline |
| `sidebarTabs.clientsOnFile` | Clients on File | mdiAccountGroupOutline |
| `sidebarTabs.amenities` | Amenities | mdiRoomServiceOutline |
| `sidebarTabs.paymentLinks` | Payment Links | mdiLinkVariant |
| `sidebarTabs.settings` | Settings | mdiCogOutline |

**Settings Tabs:**
| Tab ID | Label | Icon |
|--------|-------|------|
| `sidebarTabs.propertyInfo` | Property Info | mdiDomain |
| `sidebarTabs.branding` | Branding | mdiPalette |
| `sidebarTabs.billingPayment` | Billing & Payment | mdiCreditCardOutline |
| `sidebarTabs.staffMembers` | Staff Members | mdiAccountMultipleOutline |
| `sidebarTabs.security` | Security | mdiShieldAccountOutline |
| `sidebarTabs.pms` | PMS | mdiConnection |
| `sidebarTabs.devices` | Devices | mdiTablet |
| `sidebarTabs.compendium` | Compendium | mdiBookOpenPageVariant |
| `sidebarTabs.areaInfo` | Area Info | mdiMapMarkerOutline |
| `sidebarTabs.chat` | Chat | mdiChatOutline |

**Above-Property / Custom Tabs:**
| Tab ID | Label | Icon |
|--------|-------|------|
| `sidebarTabs.insights` | Insights | mdiChartBoxOutline |
| `sidebarTabs.properties` | Properties | mdiOfficeBuildingOutline |
| `sidebarTabs.analytics` | Analytics | mdiChartLineVariant |
| `sidebarTabs.surveys` | Surveys | mdiClipboardTextOutline |
| `sidebarTabs.dashboard` | Dashboard | mdiViewDashboardOutline |
| `sidebarTabs.tasks` | Tasks | mdiCheckboxMarkedOutline |
| `sidebarTabs.calendar` | Calendar | mdiCalendarOutline |
| `sidebarTabs.reports` | Reports | mdiFileChartOutline |
| `sidebarTabs.performance` | Performance | mdiTrendingUp |
| `sidebarTabs.fraudOverview` | Fraud Overview | mdiShieldAlertOutline |

**Usage:**
```tsx
import { sidebarTabs, createCustomSection } from '@canary-ui/components';

const customSections = [
  createCustomSection('main', 'Main', [
    sidebarTabs.dashboard,
    sidebarTabs.properties,
    sidebarTabs.analytics
  ]),
  createCustomSection('tools', 'Tools', [
    sidebarTabs.reports,
    sidebarTabs.calendar
  ])
];

<CanarySidebar variant={SidebarVariant.CUSTOM} sections={customSections} />
```

---

## Sidebar Utility Functions

```tsx
import {
  hideProducts,
  addProduct,
  reorderProducts,
  createCustomSection,
  mergeWithStandard,
  updateProduct,
  addBadge,
  removeBadge,
  disableProduct,
  enableProduct,
  createSidebarTab
} from '@canary-ui/components';
```

### Function Signatures

```tsx
// Hide specific products from sidebar
hideProducts(sections: SidebarSection[], productIds: string[]): SidebarSection[]

// Add a new product at a specific position
addProduct(
  sections: SidebarSection[],
  product: SidebarNavigationItem,
  options?: { sectionId?: string; position?: number; after?: string; before?: string }
): SidebarSection[]

// Reorder products by ID
reorderProducts(sections: SidebarSection[], productOrder: string[]): SidebarSection[]

// Create a new custom section
createCustomSection(id: string, title: string, items: SidebarNavigationItem[]): SidebarSection

// Merge custom sections with standard ones
mergeWithStandard(
  customSections: SidebarSection[],
  variant: SidebarVariant
): SidebarSection[]

// Update a product's properties
updateProduct(
  sections: SidebarSection[],
  productId: string,
  updates: Partial<SidebarNavigationItem>
): SidebarSection[]

// Add/remove badges
addBadge(sections: SidebarSection[], productId: string, badge: string | number): SidebarSection[]
removeBadge(sections: SidebarSection[], productId: string): SidebarSection[]

// Enable/disable products
disableProduct(sections: SidebarSection[], productId: string): SidebarSection[]
enableProduct(sections: SidebarSection[], productId: string): SidebarSection[]

// Create a new sidebar tab
createSidebarTab(
  id: string,
  label: string,
  icon: ReactNode,
  options?: Partial<SidebarNavigationItem>
): SidebarNavigationItem
```

**Examples:**
```tsx
import {
  standardMainSidebarSections,
  hideProducts,
  addBadge,
  sidebarTabs
} from '@canary-ui/components';

// Hide products customer doesn't have
const limitedSidebar = hideProducts(standardMainSidebarSections, [
  'digital-tips',
  'amenities',
  'payment-links'
]);

// Add notification badge
const withBadge = addBadge(limitedSidebar, 'messages', 5);

<CanarySidebar sections={withBadge} />
```

---

## Icons

### Using Material Design Icons (Recommended)

Always use icons from `@mdi/js` with the `Icon` component from `@mdi/react`:

```tsx
import Icon from '@mdi/react';
import { mdiHomeOutline, mdiAccountOutline, mdiCogOutline } from '@mdi/js';

<Icon path={mdiHomeOutline} size={1} />
<Icon path={mdiAccountOutline} size={1} color="#2858C4" />
```

**Icon naming convention:** Use **outline variants** (ending in `Outline`) by default.

### Common Icons Reference

**Navigation:**
```tsx
import { mdiHomeOutline, mdiMenuOutline, mdiCloseOutline, mdiArrowLeft, mdiArrowRight, mdiChevronLeft, mdiChevronRight, mdiChevronDown, mdiChevronUp } from '@mdi/js';
```

**User/Account:**
```tsx
import { mdiAccountOutline, mdiAccountCircleOutline, mdiAccountGroupOutline, mdiAccountMultipleOutline, mdiAccountCheckOutline } from '@mdi/js';
```

**Actions:**
```tsx
import { mdiPlusOutline, mdiMinusOutline, mdiPencilOutline, mdiDeleteOutline, mdiCheckOutline, mdiCloseOutline, mdiRefresh, mdiDownloadOutline, mdiUploadOutline } from '@mdi/js';
```

**Communication:**
```tsx
import { mdiEmailOutline, mdiMessageOutline, mdiPhoneOutline, mdiChatOutline } from '@mdi/js';
```

**Files/Documents:**
```tsx
import { mdiFileOutline, mdiFileDocumentOutline, mdiFolderOutline, mdiClipboardTextOutline } from '@mdi/js';
```

**Status:**
```tsx
import { mdiAlertOutline, mdiInformationOutline, mdiHelpCircleOutline, mdiCheckCircleOutline } from '@mdi/js';
```

**Business:**
```tsx
import { mdiCreditCardOutline, mdiCashMultiple, mdiChartLineVariant, mdiTrendingUp, mdiTrendingDown } from '@mdi/js';
```

**Settings:**
```tsx
import { mdiCogOutline, mdiDotsVertical, mdiTuneOutline } from '@mdi/js';
```

### Pre-configured Icons (Alternative)

```tsx
import { CanaryIcon } from '@canary-ui/components';

// Available icons on CanaryIcon object:
CanaryIcon.Home
CanaryIcon.Menu
CanaryIcon.Close
CanaryIcon.ChevronDown
CanaryIcon.ChevronUp
CanaryIcon.ChevronLeft
CanaryIcon.ChevronRight
CanaryIcon.ArrowLeft
CanaryIcon.ArrowRight
CanaryIcon.Account
CanaryIcon.AccountCircle
CanaryIcon.AccountGroup
CanaryIcon.AccountCheck
CanaryIcon.AccountMultiple
CanaryIcon.Login
CanaryIcon.Logout
CanaryIcon.Settings
CanaryIcon.Palette
CanaryIcon.Puzzle
CanaryIcon.File
CanaryIcon.FileDocument
CanaryIcon.Folder
CanaryIcon.Newspaper
CanaryIcon.BookOpen
CanaryIcon.Currency
CanaryIcon.Cash
CanaryIcon.CreditCard
CanaryIcon.Email
CanaryIcon.Message
CanaryIcon.MessageProcessing
CanaryIcon.Chat
CanaryIcon.Phone
CanaryIcon.Plus
CanaryIcon.Minus
CanaryIcon.Pencil
CanaryIcon.Delete
CanaryIcon.Copy
CanaryIcon.Download
CanaryIcon.Upload
CanaryIcon.Refresh
CanaryIcon.Check
CanaryIcon.CheckCircle
CanaryIcon.Alert
CanaryIcon.Information
CanaryIcon.Help
CanaryIcon.TrendingUp
CanaryIcon.TrendingDown
CanaryIcon.Chart
CanaryIcon.Shield
CanaryIcon.ShieldAccount
CanaryIcon.ShieldCheck
CanaryIcon.Restaurant
CanaryIcon.Location
CanaryIcon.Tablet
CanaryIcon.Cellphone
CanaryIcon.Laptop
CanaryIcon.Monitor

// Usage:
<CanaryIcon.Home size={24} color="#000" />
```

---

## Color Tokens

Import color values directly:

```tsx
import { colors } from '@canary-ui/components';
```

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `colors.colorBlueDark1` | `#2858C4` | Primary action color |
| `colors.colorBlueDark2` | `#5E82D3` | Primary hover |
| `colors.colorBlueDark3` | `#93ABE1` | Primary light |
| `colors.colorBlueDark4` | `#C9D5F0` | Primary lighter |
| `colors.colorBlueDark5` | `#EAEEF9` | Primary lightest |

### Canary Blue (Brand)

| Token | Value |
|-------|-------|
| `colors.colorBlueCanary1` | `#1C91FA` |
| `colors.colorBlueCanary2` | `#55ACFB` |
| `colors.colorBlueCanary3` | `#8DC8FC` |
| `colors.colorBlueCanary4` | `#C6E3FE` |
| `colors.colorBlueCanary5` | `#E8F4FF` |

### Grayscale

| Token | Value | Usage |
|-------|-------|-------|
| `colors.colorBlack1` | `#000000` | Darkest text |
| `colors.colorBlack2` | `#333333` | Primary text |
| `colors.colorBlack3` | `#666666` | Secondary text |
| `colors.colorBlack4` | `#999999` | Placeholder text |
| `colors.colorBlack5` | `#CCCCCC` | Disabled text |
| `colors.colorBlack6` | `#E5E5E5` | Borders |
| `colors.colorBlack7` | `#F0F0F0` | Light backgrounds |
| `colors.colorBlack8` | `#FAFAFA` | Lightest backgrounds |
| `colors.colorWhite` | `#FFFFFF` | White |

### Status Colors

| Token | Value | Usage |
|-------|-------|-------|
| `colors.colorOk` | `#008040` | Success/OK |
| `colors.colorWarning` | `#FAB541` | Warning |
| `colors.colorDanger` | `#E40046` | Error/Danger |

### Additional Palettes

**Green:**
```tsx
colors.colorLightGreen1  // #008040
colors.colorLightGreen2  // #40A673
colors.colorLightGreen3  // #80CCA6
colors.colorLightGreen4  // #BFE5D2
colors.colorLightGreen5  // #CCE6D9
```

**Red:**
```tsx
colors.colorRed1  // #E40046
colors.colorRed2  // #EC4076
colors.colorRed3  // #F380A6
colors.colorRed4  // #F9BFD2
colors.colorRed5  // #FCE6ED
```

**Yellow/Wheat:**
```tsx
colors.colorWheat1  // #FAB541
colors.colorWheat2  // #FBCA74
colors.colorWheat3  // #FCDFA7
colors.colorWheat4  // #FEF4D9
colors.colorWheat5  // #FFF8EC
```

**Purple:**
```tsx
colors.colorPurple1  // #3304AD
colors.colorPurple2  // #6F4CC9
colors.colorPurple3  // #A894E0
colors.colorPurple4  // #D4C9F0
colors.colorPurple5  // #E3DCF6
```

**Pink:**
```tsx
colors.colorPink1  // #F16682
colors.colorPink2  // #F591A4
colors.colorPink3  // #F9BBC7
colors.colorPink4  // #FCE5E9
colors.colorPink5  // #FEF0F3
```

---

## Typography Tokens

```tsx
import { typography } from '@canary-ui/components';
```

### Font Sizes

| Token | Value |
|-------|-------|
| `typography.fontSize.displayTitleLg` | `3.5rem` (56px) |
| `typography.fontSize.displayTitle` | `3rem` (48px) |
| `typography.fontSize.displayTitleSm` | `2rem` (32px) |
| `typography.fontSize.titleLg` | `1.75rem` (28px) |
| `typography.fontSize.title` | `1.5rem` (24px) |
| `typography.fontSize.subtitleLg` | `1.25rem` (20px) |
| `typography.fontSize.subtitle` | `1.125rem` (18px) |
| `typography.fontSize.body` | `1rem` (16px) |
| `typography.fontSize.bodySm` | `0.875rem` (14px) |
| `typography.fontSize.caption` | `0.75rem` (12px) |
| `typography.fontSize.captionSm` | `0.625rem` (10px) |

### Font Weights

| Token | Value |
|-------|-------|
| `typography.fontWeight.regular` | `400` |
| `typography.fontWeight.medium` | `500` |
| `typography.fontWeight.semibold` | `600` |
| `typography.fontWeight.bold` | `700` |

---

## Spacing Tokens

```tsx
import { spacing } from '@canary-ui/components';
```

| Token | Value |
|-------|-------|
| `spacing[0]` | `0` |
| `spacing[1]` | `0.25rem` (4px) |
| `spacing[2]` | `0.5rem` (8px) |
| `spacing[3]` | `0.75rem` (12px) |
| `spacing[4]` | `1rem` (16px) |
| `spacing[5]` | `1.25rem` (20px) |
| `spacing[6]` | `1.5rem` (24px) |
| `spacing[8]` | `2rem` (32px) |
| `spacing[10]` | `2.5rem` (40px) |
| `spacing[12]` | `3rem` (48px) |
| `spacing[16]` | `4rem` (64px) |
| `spacing[20]` | `5rem` (80px) |
| `spacing[24]` | `6rem` (96px) |

---

## Additional Component Usage Guidance

The following components are documented in the Component Inventory above but benefit from additional usage guidance.

### CanaryTable

Data table with configurable columns, custom cell rendering, optional sorting, and row click handlers.

**When to use:**
- Displaying structured data with multiple columns. In production, tables are the primary UI for: authorization forms (status tags + amounts + dates + action buttons), food & beverage orders (time elapsed tags + delivery location + guest info + approve/deny buttons), guest reservations (11+ columns with sorting and load-more pagination), cohort management (with inline CanarySelect dropdowns in cells), tipping orders.
- Custom cell rendering: use column `render` functions to embed `CanaryTag` for status, `CanaryButton` for row actions, `CanarySelect` for inline edits, or formatted values (currency, dates).
- Column alignment: right-align currency columns, center status columns.
- Row click handling: navigate to detail views (e.g., click reservation row → open reservation detail).
- Combine with `CanarySearch` above the table for filtering, `CanaryChip` below the search for active filter badges.

**When NOT to use:**
- Simple vertical lists without columns — use `CanaryList` + `CanaryListItem`
- Key-value pairs — use a simple layout or `CanaryCard`
- Editable data grids — this is display-only; build custom edit interactions

### CanaryChip

Interactive chip component with two modes: selectable (toggle on/off) and removable (click X to remove).

**When to use:**
- Filter toggles — `ChipType.SELECTABLE` for on/off filter states (e.g., "Checked In", "VIP", "Late Checkout")
- Category selection — selectable chips for choosing categories
- Removable items — `ChipType.REMOVABLE` for selected email recipients, applied filters, or tags that can be dismissed

**When NOT to use:**
- Display-only status labels — use `CanaryTag` (not interactive)
- Form inputs — use `CanaryInputMultiple` for chip-based text entry
- Navigation items — use `CanaryTabs` or `CanarySegmentedControl`

### CanaryTabs

Tab navigation with multiple visual variants: rounded, text (with underline), segmented, and text-checkbox.

**When to use:**
- Switching between content views on the same page. In production, tabs are used for: order status filtering with badge counts (Pending (3) / In Progress / Processed / Canceled / All), membership lookup method switching (Email / App), dashboard section navigation.
- `variant="text"` — standard underlined tabs for page content sections (Overview, Details, History). Use `size="normal"` for main sections, `size="compact"` for secondary areas.
- `variant="rounded"` — pill-style tabs for filter modes or category switching. In production: switching between lookup methods on kiosk check-in.
- `variant="segmented"` — bordered button group for toggling between 2–4 mutually exclusive views (Day/Week/Month, Grid/List).
- `variant="text-checkbox"` — tabs with optional checkboxes for enabling/disabling sections while navigating.
- `badge` prop — show dynamic notification counts on tabs. In production: pending order count, unread message count.

**When NOT to use:**
- App-level navigation — use `CanarySidebar` via `CanaryAppShell`
- Selecting a form value — use `CanarySegmentedControl` or `CanaryRadioGroup`
- More than 6–8 tabs — consider `CanarySelect` or a sidebar with sections

### CanaryToast

Temporary notification that auto-dismisses after a configurable duration (default 5 seconds).

**When to use:**
- Transient success confirmations ("Changes saved", "Guest checked in"). In production, toasts are managed by a global ToastStore singleton — every app (hotels, guest, admin, check-in) has a CanaryToastContainer at the root level.
- Brief error notifications ("Unexpected error" after a failed API call).
- Triggered after async operations complete: order approval, settings save, payment processing.

**When NOT to use:**
- Persistent messages that need to stay visible — use `CanaryAlert`
- Critical errors that require user action — use `CanaryModal` or `CanaryAlert`
- Per-field form validation — use the `error` prop on form components

### CanaryLoading

Simple animated spinner for indicating loading states.

**When to use:**
- While fetching data from an API
- During form submission processing
- Page-level or section-level loading states

**When NOT to use:**
- List loading states — use `CanaryList` with `isLoading` prop (has built-in loading content)
- Skeleton screens — this is a spinner, not a skeleton loader

### CanaryContainer

Responsive max-width container that centers content horizontally.

**When to use:**
- Wrapping page content inside `CanaryAppShell` to constrain width
- Centering forms, cards, or content sections with consistent max-width
- Available widths: `sm`, `md`, `lg`, `xl`, `2xl`, `full`

**When NOT to use:**
- Full-width layouts — just use a plain `div`
- Grid layouts — use `CanaryGrid` for column-based layouts

### CanaryGrid

Responsive CSS grid layout with configurable columns and gap sizes.

**When to use:**
- Dashboard layouts with multiple cards or widgets
- Form layouts with side-by-side fields
- Any responsive grid of items (1–12 columns)

**When NOT to use:**
- Simple two-column layouts — Tailwind's `flex` with `gap` may be simpler
- Lists of items — use `CanaryList` for semantic list rendering

### CanaryHeader

Generic application header without Canary-specific features.

**When to use:**
- Non-Canary product prototypes that need a simple header
- Custom header layouts where `CanaryPageHeader` is too opinionated

**When NOT to use:**
- Canary product prototypes — use `CanaryPageHeader` (or `CanaryAppShell` which includes it)

### CanaryLogo

Renders the Canary Technologies logo.

**When to use:**
- Login screens, landing pages, or splash screens
- Custom headers where you need the Canary logo

**When NOT to use:**
- Inside `CanarySidebar` or `CanaryAppShell` — the logo is already included automatically

### CanaryCalendar

Full calendar component supporting single date and date range selection with month/year navigation.

**When to use:**
- Inline calendar views on dashboards or booking pages
- Date selection that benefits from seeing the full month context
- Quick selection buttons (Today, Tomorrow, Next 7 Days) for common date shortcuts

**When NOT to use:**
- Date entry in forms — use `CanaryInputDate` (compact field with popup calendar)
- Date range in forms — use `CanaryInputDateRange` (compact fields with popup)

### CanarySegmentedControl

Inline button group where one option is selected at a time, with a sliding highlight indicator.

**When to use:**
- Toggling between 2–4 view modes (e.g., "Day" / "Week" / "Month")
- Switching between display formats (e.g., "Grid" / "List")
- Quick filter selection with a small number of options

**When NOT to use:**
- More than 4 options — use `CanarySelect` or `CanaryRadioGroup`
- Multi-select — use `CanaryChip` with `ChipType.SELECTABLE` or multiple `CanaryCheckbox`
- Tab navigation with content panels — use `CanaryTabs`

### CanarySwitch

Toggle switch for binary on/off states with smooth animation.

**When to use:**
- Settings toggles (enable/disable features, notifications on/off)
- Preferences that take effect immediately (no save button needed)
- Binary state that reads as "on/off" rather than "checked/unchecked"

**When NOT to use:**
- Form consent/agreement — use `CanaryCheckbox` (checkbox semantics are more appropriate)
- Selecting from multiple options — use `CanaryRadioGroup` or `CanarySelect`

### CanaryCheckbox

Custom checkbox with support for checked, unchecked, and indeterminate states.

**When to use:**
- Form agreement/consent (terms of service, privacy policy)
- Multi-select in forms (select amenities, select features)
- "Select all" with indeterminate state for partial selection

**When NOT to use:**
- Binary toggles for settings — use `CanarySwitch` (toggle semantics)
- Single selection from options — use `CanaryRadioGroup`
- Filter chips — use `CanaryChip` with `ChipType.SELECTABLE`

### CanaryRadioGroup

Container for radio button options — ensures only one can be selected at a time.

**When to use:**
- Single selection from 2–5 visible options (room type, payment method, priority level)
- When all options should be visible to the user at once

**When NOT to use:**
- More than 5 options — use `CanarySelect` (dropdown)
- Multi-select — use multiple `CanaryCheckbox` components
- Inline toggle between 2–3 options — use `CanarySegmentedControl`

### CanaryInputMultiple

Chip-based input for entering multiple values (emails, tags, keywords). Press Enter to add, backspace to remove.

**When to use:**
- Email recipient fields. In production: report distribution lists (tip reports sent to multiple email addresses), notification settings (multiple admin emails for food & beverage alerts).
- Tag entry (add multiple tags to an item)
- Guest journey segment selection
- Any field where the user enters a list of discrete text values
- Built-in email validation when used with `InputType.EMAIL`

**When NOT to use:**
- Single text value — use `CanaryInput`
- Selecting from predefined options — use `CanarySelect` or `CanaryChip`

---

## Common Patterns

### Full Page Layout with Sidebar

```tsx
import { CanarySidebar, standardMainSidebarSections } from '@canary-ui/components';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <CanarySidebar sections={standardMainSidebarSections} />
      <main className="flex-1 overflow-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}
```

### Form with Validation

```tsx
import {
  CanaryCard,
  CanaryInput,
  CanarySelect,
  CanaryButton,
  InputType,
  ButtonType
} from '@canary-ui/components';
import { useState } from 'react';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email');
      return;
    }
    // Submit form
  };

  return (
    <CanaryCard title="Register">
      <div className="space-y-4">
        <CanaryInput
          label="Email"
          type={InputType.EMAIL}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
          error={emailError}
          isRequired
        />
        <CanaryButton type={ButtonType.PRIMARY} onClick={handleSubmit}>
          Submit
        </CanaryButton>
      </div>
    </CanaryCard>
  );
}
```

### Data Table with Tags

```tsx
import { CanaryTable, CanaryTag, TagColor } from '@canary-ui/components';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <CanaryTag
        label={value}
        color={value === 'Active' ? TagColor.SUCCESS : TagColor.DEFAULT}
      />
    )
  }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
];

<CanaryTable columns={columns} data={data} />
```

### Custom Sidebar for Above-Property Dashboard

```tsx
import {
  CanarySidebar,
  SidebarVariant,
  sidebarTabs,
  createCustomSection
} from '@canary-ui/components';

const abovePropertySections = [
  createCustomSection('overview', 'Overview', [
    sidebarTabs.dashboard,
    sidebarTabs.insights,
    sidebarTabs.analytics
  ]),
  createCustomSection('management', 'Management', [
    sidebarTabs.properties,
    sidebarTabs.reports,
    sidebarTabs.performance
  ]),
  createCustomSection('tools', 'Tools', [
    sidebarTabs.calendar,
    sidebarTabs.tasks,
    sidebarTabs.settings
  ])
];

<CanarySidebar
  variant={SidebarVariant.CUSTOM}
  sections={abovePropertySections}
  title="Corporate Dashboard"
/>
```

---

## Do's and Don'ts

### Do's
- Always import enums for type-safe props (`ButtonType`, `InputType`, etc.)
- Use pre-built `sidebarTabs` for sidebar items
- Use `standardMainSidebarSections` or `standardSettingsSidebarSections` as starting points
- Use outline variants of icons (`mdiHomeOutline`, not `mdiHome`)
- Import colors from `colors` object, not hardcode hex values
- Use `className` prop for additional styling with Tailwind

### Don'ts
- **NEVER guess component names** - only use what's listed here
- **NEVER guess icon names** - use the exact names from @mdi/js
- **NEVER pass custom sidebarSections to CanaryAppShell with SidebarVariant.SETTINGS** - it has the correct defaults
- **NEVER create custom sidebar items from scratch** - use `sidebarTabs` or `createSidebarTab`
- **NEVER hardcode colors** - use the color tokens
- **NEVER use filled icons** - use outline variants by default
- **NEVER create new components** when existing ones work
- **NEVER modify the standardSettingsSidebarSections content** - it matches the actual product

---

## Version

**Current Version:** v0.6.0

Last updated: April 2026

Production reference: 101 components documented, aligned with `canary-ui-reference.md` (2026-04-09)
