# Changelog

All notable changes to the Canary UI Component Library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2025-12-08

### Added
- **CanaryPageHeader Component**: Standard Canary page header for applications
  - Property selector with blue dropdown chevron (left side)
  - Reservation status badge with connected/disconnected states (green/gray pill)
  - User profile section with avatar (or initials fallback), name, role, and dropdown
  - Customizable click handlers for property, reservation status, and user profile
  - Optional actions slot for additional header items
- **CanaryAppShell Component**: Complete application scaffolding for prototypes
  - Combines sidebar, page header, and scrollable content area
  - Support for MAIN, SETTINGS, and CUSTOM sidebar variants
  - Configurable content padding (none, small, medium, large)
  - Customizable content background color
  - Options to hide sidebar or header independently
  - Recommended starting point for building Canary prototypes
- **AI Reference Documentation**: Updated AI_REFERENCE.md with new component APIs and examples
- **Demo Section**: Added "App Shell & Scaffolding" section to component showcase

### Changed
- Avatar fallback now uses colorBlack7 (#F0F0F0) background for initials display

## [0.4.1] - 2025-12-01

### Added
- **Flexible Sidebar System**: Comprehensive sidebar customization while maintaining backward compatibility
  - **CUSTOM variant**: New `SidebarVariant.CUSTOM` for fully customizable sidebars
  - **Pre-built sidebar tabs**: Reusable "lego pieces" in `sidebarTabs` object for consistent icons and labels
  - **Sidebar utility functions**: Complete toolkit for sidebar manipulation
    - `hideProducts()` - Hide products for customers who didn't purchase them
    - `addProduct()` - Add new products anywhere in the sidebar
    - `createCustomSection()` - Create custom sections for "above property" dashboards
    - `reorderProducts()`, `updateProduct()`, `addBadge()`, `removeBadge()`, etc.
  - **Auto-resolution**: Optional `sections` prop with intelligent defaults for MAIN/SETTINGS variants
  - **Hotel-focused demo examples**: Basic Package, Operations Dashboard, and Corporate Dashboard scenarios
  - **Backward compatibility**: Existing MAIN and SETTINGS variants remain unchanged
- **Sidebar configuration utilities**: Pure functions for immutable sidebar modifications
- **TypeScript support**: Full type definitions for all new customization features

### Changed  
- **CanarySidebar**: `sections` prop now optional with auto-resolution based on variant
- **Demo**: Updated demo labels from "Management" to "Mgmt" for brevity
- **Demo**: Default port changed to 3001 to avoid conflicts

### Fixed
- **MDI icons**: Corrected import issues with Material Design Icons
- **Build**: Updated exports to include all new sidebar utilities

## [0.4.0] - 2025-12-01

### Added
- **CanaryList Component**: Container component for lists with drag-and-drop, animations, and state management
  - Drag-and-drop reordering with @dnd-kit/sortable
  - Smooth animations with framer-motion
  - Loading, empty, and error states with customizable content
  - Optional outer border styling
  - Support for both controlled (items prop) and uncontrolled (children) modes
- **CanaryListItem Component**: Flexible list item with extensive customization options
  - Support for title, subtitle, description
  - Icon and leftContent/rightContent slots
  - Full children override for custom layouts
  - Click handling with onClick and href support
  - Draggable items with automatic drag handle
  - Selection states with customizable colors
  - Flexible padding (normal/compact) and alignment (start/center)
  - Text wrapping control (wrap/truncate)
- **Selectable List Example**: Interactive demo showing selection state management
- **Complete API Documentation**: Added comprehensive prop tables and usage examples to README

### Fixed
- **Duplicate Drag Icons**: Removed duplicate drag icons when isDraggable={true} - component now handles it automatically
- **Border Separators**: Fixed border separators between list items
  - Added inline styles to motion.div wrappers in CanaryList
  - Added canary-list-item CSS rule to demo globals.css
  - Borders work in both CanaryList-wrapped and standalone scenarios
- **Icon Component API**: Changed from style={{ fill }} to color prop for @mdi/react compatibility
- **Optional Children**: Made children prop optional in CanaryListProps for state rendering

### Changed
- **All List Icons Use Outline Variants**: Updated all icons in CanaryList examples to use MDI outline variants
  - mdiAccount → mdiAccountOutline
  - mdiCheckCircle → mdiCheckCircleOutline
  - mdiViewDashboard → mdiViewDashboardOutline
  - mdiMessage → mdiMessageOutline
  - mdiHelpCircle → mdiHelpCircleOutline
  - mdiAlertCircle → mdiAlertCircleOutline

### Developer Experience
- Complete list components ready for production use

## [0.3.5] - 2025-11-21

### Fixed
- **CanaryTabs Hover States**: Fixed hover shadow effects for rounded and segmented tab variants using React state tracking
- **Phone Input Flag Icons**: Fixed `CanaryInputPhoneUnderline` flag icons not loading due to React Strict Mode cleanup issue
  - Properly reset `itiRef.current` to null in cleanup function
  - Fixed country container padding to match regular variant
- **CanaryTextArea Padding**: Improved text spacing by increasing padding from `py-[9px]` to `py-3` for better readability
- **Safari Select Styling**: Added `WebkitAppearance: 'none'` to both `CanarySelect` and `CanarySelectUnderline` for consistent cross-browser appearance
- **Phone Input CDN Assets**: Added CDN URLs for intl-tel-input flag icons to resolve broken relative paths in bundled library

### Changed
- Suppressed Chrome tap highlight on all tab variants for cleaner interaction
- Improved phone input component padding consistency across variants

### Developer Experience
- Components now work consistently across Chrome and Safari
- Phone input components properly initialize in React Strict Mode environments
- Better visual consistency across all browsers

## [0.3.4] - 2025-11-21

### Fixed
- **React Strict Mode Compatibility**: Fixed phone input components (`CanaryInputPhone`, `CanaryInputPhoneUnderline`) crashing when React Strict Mode is enabled
- **Opacity Class Prefixing**: Updated 18 components to use `canary-opacity-*` classes for consistent rendering across all button types and form components
- **Outline Button Padding**: Changed from arbitrary values to standard Tailwind classes (`px-4`, `px-6`)

### Added
- **Demo Site Link**: Added prominent link to [live demo](https://canary-prototype-foundation.vercel.app/) at top of README
- **API Reference**: Added prop tables for most-used components (CanaryButton, CanaryInput, CanarySidebar, CanaryCard, CanaryModal)
- **Icon Usage Guidelines**: Documented Material Design Icons from Pictogrammers as standard with outline variants as default

### Changed
- Enhanced version management documentation in README
- Improved "Keeping Up to Date" section with version history

### Developer Experience
- Components now work correctly with React Strict Mode enabled
- Better documentation for teammates with quick prop reference
- Clear icon usage standards (outline variants from Pictogrammers)

## [0.3.3] - 2025-11-21

### Fixed
- Added missing `.opacity-0` and `.opacity-50` utility classes to styles.css
- Fixed button rendering issues in external projects that were missing these utilities

### Changed
- Verified all CanaryButton CSS dependencies are present

## [0.3.2] - 2025-11-19

### Added
- **CanaryLogo component** with embedded logo asset (base64 PNG)
- Logo now appears automatically in CanarySidebar without requiring manual asset management
- **CHANGELOG.md** tracking all version history from v0.1.0 onwards
- **Common Patterns documentation** in README with practical examples:
  - Using standard sidebar sections
  - Using the icon system
  - Building forms
  - Working with modals
  - Accessing design tokens
- Icons section added to component categories in README

### Changed
- Enhanced README with real-world usage patterns
- Better documentation for teammates using the library

### Fixed
- Removed hardcoded `py-4` padding from CanaryTabs content areas (all variants)
- Users now have full control over spacing around tab content

### Developer Experience
- Teammates get Canary logo automatically without managing assets
- Better onboarding with practical code examples
- Clear version history for understanding changes

## [0.3.1] - 2025-11-19

### Added
- **Icon System**: Comprehensive `CanaryIcon` system with 50+ pre-configured Material Design Icons
- **Standard Sidebar Sections**: Pre-configured `standardMainSidebarSections` and `standardSettingsSidebarSections`
- **Automatic Font Loading**: Roboto font now loads automatically via Google Fonts CDN when library CSS is imported
- Exported `iconPaths` for advanced icon usage
- Exported `Icon` component re-export from @mdi/react

### Changed
- All sidebar icons now use consistent Material Design Icons
- Replaced custom SVG icons with MDI equivalents:
  - Upsells → `mdiCashMultiple`
  - Digital Tips → `mdiCurrencyUsd`
  - Authorizations → `mdiShieldCheckOutline`
  - Contracts → `mdiFileSign`
  - Clients on File → `mdiAccountBoxOutline`
  - Amenities → `mdiStoreOutline`

### Fixed
- Font consistency issue where Roboto wouldn't load in new prototype projects
- Icon inconsistency when using sidebar in new projects

### Developer Experience
- Teammates no longer need to manually configure icons for sidebar
- No additional font setup required in consuming projects
- Single source of truth for all icons

## [0.3.0] - 2025-11-19

### Changed
- **Major Refactor**: Complete library restructure following UI library best practices
- Self-contained CSS with pre-built Tailwind utilities (584 lines)
- No Tailwind configuration needed in consuming projects
- Library ships with all necessary styles bundled

### Added
- Proper package.json exports configuration
- Pre-built CSS file in dist/
- Tailwind preset file (optional for consumers)

### Improved
- Installation process simplified to 2 steps
- Better TypeScript type definitions
- Cleaner monorepo structure

## [0.2.2] - 2025-11-18

### Added
- Tailwind CSS configuration for library build process

## [0.2.1] - 2025-11-18

### Changed
- Updated to monorepo structure
- Separated demo application into `/demo` directory
- Library code remains at root for easier consumption

### Fixed
- Build configuration for monorepo setup
- Workspace dependencies

## [0.1.7] - 2025-11-18

### Added
- **CanarySwitch component** with three size variants:
  - Normal (Desktop): 28px × 16px
  - Large (Mobile): 44px × 24px
  - XLarge (Tablet): 56px × 30px
- Comprehensive switch demos with all states and size comparisons
- TypeScript support with proper onChange handler typing

### Changed
- Updated Settings sidebar variant layout
- Moved back button from bottom to top of Settings sidebar
- Removed Canary logo when back button is present in Settings variant
- Adjusted back button padding to 16px top/bottom
- Added 32px bottom padding to navigation area

### Fixed
- Fixed Compendium icon (changed to `mdiNewspaperVariantOutline`)
- Restored missing sidebar navigation demos

## [0.1.6] - 2025-11-17

### Added
- Additional form component variants
- Enhanced documentation

## [0.1.5] - 2025-11-17

### Added
- Form component improvements
- Better prop interfaces

## [0.1.4] - 2025-11-17

### Added
- Additional data display components
- Table component enhancements

## [0.1.3] - 2025-11-17

### Added
- CanaryTag component redesign matching Figma design system
- Updated README installation instructions

### Changed
- Tag component now fully matches Figma specifications
- Improved tag color variants

## [0.1.2] - 2025-11-17

### Added
- Enhanced component exports
- Better TypeScript definitions

## [0.1.1] - 2025-11-17

### Added
- Initial navigation components
- Sidebar variants (Main and Settings)

## [0.1.0] - 2025-11-17

### Added
- Initial release of Canary UI Component Library
- Core components:
  - Buttons (CanaryButton)
  - Forms (Input, TextArea, Select, Checkbox, Radio, RadioGroup)
  - Data Display (Tag, Table, Card)
  - Layout (Container, Grid, Modal)
  - Navigation (Tabs, Sidebar, Header)
  - Feedback (Toast, Alert)
  - Loading (CanaryLoading)
- Design tokens system
- TypeScript support
- Tailwind CSS integration
- Material Design Icons support

---

## Installation

```bash
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.4
```

## Usage

```tsx
import '@canary-ui/components/styles.css';
import { CanaryButton, CanarySidebar, standardMainSidebarSections } from '@canary-ui/components';

export default function App() {
  return (
    <>
      <CanarySidebar sections={standardMainSidebarSections} />
      <CanaryButton type="primary">Click me</CanaryButton>
    </>
  );
}
```

## Links

- [Repository](https://github.com/msantana-canary/canary-prototype-foundation)
- [Issues](https://github.com/msantana-canary/canary-prototype-foundation/issues)
