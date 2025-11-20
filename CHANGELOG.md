# Changelog

All notable changes to the Canary UI Component Library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- CanaryLogo component with embedded logo asset
- Logo now appears automatically in CanarySidebar without requiring manual asset management

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
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.1
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
