# @canary-ui/components

A comprehensive React component library implementing the Canary design system for building high-fidelity prototypes. Built with React 19, TypeScript, and Tailwind CSS.

**📚 [View Live Demo & Component Gallery](https://canary-prototype-foundation.vercel.app/)**

---

## For AI Agents (Claude, Cursor, Copilot, etc.)

> **STOP! Before generating any code using this library, read [`AI_REFERENCE.md`](./AI_REFERENCE.md) first.**

The `AI_REFERENCE.md` file contains:
- Complete list of all available components and their exact names
- All TypeScript enums and their values
- Every available icon name (don't guess - use only what's listed)
- All color tokens and their hex values
- Pre-built sidebar tabs and utility functions
- Copy-paste code examples for common patterns

**Why this matters:** This library uses specific component names, enums, and icon names. Guessing will result in errors. The reference file gives you everything you need to generate working code on the first try.

```bash
# Quick reference location (relative to project root):
./AI_REFERENCE.md
```

---

## Features

- ✨ **Complete Component Library** - 30+ pre-built components matching Canary UI
- 🎨 **Design System** - Extracted design tokens (colors, typography, spacing)
- 🚀 **Modern Stack** - Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4
- 📱 **Responsive** - Mobile-first design with responsive components
- 🎯 **Type-Safe** - Full TypeScript support with proper interfaces
- 🔧 **Figma MCP Ready** - Designed to work seamlessly with Figma MCP
- 🚢 **Vercel Optimized** - Ready for instant deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand (for complex state needs)
- **Icons**: @mdi/react
- **Package Manager**: pnpm

## Installation

The library ships with pre-built CSS, so you don't need to configure Tailwind to scan the library's components. All styles are self-contained in the library's CSS file.

### Step 1: Install the library

```bash
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.4.5
# or
yarn add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.4.5
# or
pnpm add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.4.5
```

Or install from npm (once published):

```bash
npm install @canary-ui/components
# or
yarn add @canary-ui/components
# or
pnpm add @canary-ui/components
```

### Step 2: Import library styles

```tsx
// In your root layout (app/layout.tsx for Next.js App Router)
// or _app.tsx for Next.js Pages Router
import '@canary-ui/components/styles.css';
```

**That's it!** All component styles are included in the library's CSS file. You don't need to configure Tailwind or any build tools.

### Step 3: Use components

```tsx
import { CanaryButton, CanaryInput, CanaryCard } from '@canary-ui/components';

export default function MyPage() {
  return (
    <CanaryCard title="Welcome">
      <CanaryInput label="Email" type="email" placeholder="Enter your email" />
      <CanaryButton type="primary">Submit</CanaryButton>
    </CanaryCard>
  );
}
```

## Quick Start Summary

1. **Install library**: `npm install @canary-ui/components`
2. **Import styles**: Add `import '@canary-ui/components/styles.css'` to your root layout
3. **Use components**: Import and use any component

That's it! You're ready to build with Canary UI. No Tailwind configuration needed.

## Development Setup (For Contributors)

This is a monorepo containing:
- The component library (root)
- A demo/documentation site (`demo/`)

### 1. Clone this repository

```bash
git clone https://github.com/msantana-canary/canary-prototype-foundation.git
cd canary-prototype-foundation
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Build the library

```bash
pnpm build
```

### 4. Run the demo site

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component showcase.

## Component Categories

### Buttons
- `CanaryButton` - Full-featured button with types, sizes, icons, loading states

### Forms
- `CanaryInput` - Standard text input
- `CanaryInputUnderline` - Underline variant with floating label
- `CanaryTextArea` - Multi-line text input
- `CanarySelect` - Dropdown select with custom options
- `CanaryCheckbox` - Checkbox with label support
- `CanaryRadio` - Radio button
- `CanaryRadioGroup` - Radio button group container
- `CanarySwitch` - Toggle switch
- `CanaryInputPassword` - Password input with visibility toggle
- `CanaryInputSearch` - Search input with icon
- `CanaryInputCreditCard` - Credit card input with formatting
- `CanaryInputPhone` - International phone input
- `CanaryInputDate` - Date picker
- `CanaryInputDateRange` - Date range picker

### Data Display
- `CanaryTag` - Status tags with color variants
- `CanaryTable` - Data table with sorting and custom renderers
- `CanaryCard` - Card container with header and footer
- `CanaryListItem` - Flexible list item with title, subtitle, description, icons
- `CanaryList` - List container with drag-and-drop, animations, and state management

### Layout
- `CanaryContainer` - Responsive container with max-width options
- `CanaryGrid` - Responsive grid system
- `CanaryModal` - Modal dialog with overlay

### Navigation
- `CanaryTabs` - Tabbed navigation
- `CanarySidebar` - Sidebar navigation with icons and badges
- `CanaryHeader` - Application header with logo and actions

### Feedback
- `CanaryAlert` - Inline alert messages
- `CanaryToast` - Toast notifications
- `CanaryLoading` - Loading spinner

### Icons
- `CanaryIcon` - Pre-configured Material Design Icons (50+ icons)
- `CanaryLogo` - Embedded Canary logo component
- `Icon` - Base icon component from @mdi/react
- `iconPaths` - Raw MDI icon paths for advanced usage

## Common Patterns

### Using Standard Sidebar Sections

The library includes pre-configured sidebar sections that match the Canary product exactly:

```tsx
import { CanarySidebar, standardMainSidebarSections } from '@canary-ui/components';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar with pre-configured icons and sections */}
      <CanarySidebar sections={standardMainSidebarSections} />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
```

For settings pages, use `standardSettingsSidebarSections`:

```tsx
import { CanarySidebar, standardSettingsSidebarSections, CanaryButton } from '@canary-ui/components';
import { SidebarVariant, ButtonType, ButtonColor, IconPosition } from '@canary-ui/components';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

<CanarySidebar
  variant={SidebarVariant.SETTINGS}
  sections={standardSettingsSidebarSections}
  title="Settings"
  backButton={
    <CanaryButton
      type={ButtonType.TEXT}
      color={ButtonColor.WHITE}
      icon={<Icon path={mdiArrowLeft} size={1} />}
      iconPosition={IconPosition.LEFT}
      onClick={() => console.log('Back clicked')}
    >
      Back
    </CanaryButton>
  }
/>
```

### Using Icons

The library uses **Material Design Icons** from [Pictogrammers](https://pictogrammers.com/library/mdi/). All icons are included - you don't need to install anything extra.

**Important:** Always use **outline variants** of icons as the default style (e.g., `mdiHomeOutline`, `mdiAccountOutline`, `mdiCogOutline`).

```tsx
import Icon from '@mdi/react';
import { mdiHomeOutline, mdiCogOutline, mdiAccountOutline } from '@mdi/js';

export default function Dashboard() {
  return (
    <div>
      {/* Default size: 1 (24px) */}
      <Icon path={mdiHomeOutline} size={1} />

      {/* Custom size and color */}
      <Icon path={mdiCogOutline} size={0.8} color="#2858C4" />

      {/* Larger icon */}
      <Icon path={mdiAccountOutline} size={1.5} />
    </div>
  );
}
```

**Finding icons:**
1. Visit [pictogrammers.com/library/mdi](https://pictogrammers.com/library/mdi/)
2. Search for the icon you need
3. **Use the outline variant when available** (ends with `-outline`)
4. Import using camelCase: `home-outline` → `mdiHomeOutline`

**Common outline icons:**
- Navigation: `mdiHomeOutline`, `mdiMenuOutline`, `mdiCloseOutline`
- User: `mdiAccountOutline`, `mdiAccountCircleOutline`, `mdiAccountGroupOutline`
- Settings: `mdiCogOutline`, `mdiCogOutline`, `mdiDotsVerticalOutline`
- Files: `mdiFolderOutline`, `mdiFileOutline`, `mdiFileDocumentOutline`
- Communication: `mdiEmailOutline`, `mdiMessageOutline`, `mdiPhoneOutline`

**Alternative: Pre-configured icons**

For convenience, the library also provides 50+ pre-configured icons via `CanaryIcon`, but **direct import from Pictogrammers is preferred**:

```tsx
import { CanaryIcon } from '@canary-ui/components';

<CanaryIcon.Home size={24} />  // Uses outline variant by default
```

### Building a Form

```tsx
import {
  CanaryInput,
  CanarySelect,
  CanaryCheckbox,
  CanaryButton
} from '@canary-ui/components';
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    terms: false
  });

  return (
    <form className="space-y-4">
      <CanaryInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Enter your email"
      />

      <CanarySelect
        label="Country"
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' }
        ]}
      />

      <CanaryCheckbox
        label="I agree to the terms and conditions"
        checked={formData.terms}
        onChange={(checked) => setFormData({ ...formData, terms: checked })}
      />

      <CanaryButton type="primary" onClick={() => console.log(formData)}>
        Submit
      </CanaryButton>
    </form>
  );
}
```

### Using Modals

```tsx
import { CanaryModal, CanaryButton } from '@canary-ui/components';
import { useState } from 'react';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CanaryButton onClick={() => setIsOpen(true)}>
        Open Modal
      </CanaryButton>

      <CanaryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
      >
        <p>Are you sure you want to proceed?</p>
        <div className="flex gap-2 mt-4">
          <CanaryButton
            type="secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </CanaryButton>
          <CanaryButton
            type="primary"
            onClick={() => {
              // Handle confirmation
              setIsOpen(false);
            }}
          >
            Confirm
          </CanaryButton>
        </div>
      </CanaryModal>
    </>
  );
}
```

### Building Lists

```tsx
import { CanaryList, CanaryListItem } from '@canary-ui/components';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiDrag } from '@mdi/js';

// Simple list
<CanaryList hasOuterBorder>
  <CanaryListItem
    title="John Doe"
    subtitle="john@example.com"
    icon={<Icon path={mdiAccountOutline} size={1} />}
    onClick={() => console.log('Clicked')}
  />
  <CanaryListItem
    title="Jane Smith"
    subtitle="jane@example.com"
    icon={<Icon path={mdiAccountOutline} size={1} />}
  />
</CanaryList>

// Draggable list with state management
const [items, setItems] = useState([
  { id: '1', name: 'Task 1' },
  { id: '2', name: 'Task 2' },
  { id: '3', name: 'Task 3' }
]);

<CanaryList
  isDraggable
  items={items}
  onReorder={setItems}
  hasOuterBorder
>
  {items.map(item => (
    <CanaryListItem
      key={item.id}
      title={item.name}
      isDraggable
    />
  ))}
</CanaryList>

// List with loading/empty states
<CanaryList hasOuterBorder isLoading />
<CanaryList hasOuterBorder isEmpty emptyContent="No items found" />
```

### Working with Design Tokens

Access design tokens directly for custom styling:

```tsx
import { colors, typography, spacing } from '@canary-ui/components';

const customStyles = {
  backgroundColor: colors.colorBlueDark1, // #2858C4
  color: colors.colorWhite,
  fontSize: typography.fontSize.body,
  padding: spacing[4] // 1rem
};
```

## API Reference

Quick reference for the most commonly used components. For complete prop lists, use TypeScript IntelliSense or visit the [demo site](https://canary-prototype-foundation.vercel.app/).

### CanaryButton

```tsx
import { CanaryButton, ButtonType, ButtonSize, ButtonColor, IconPosition } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `ButtonType` | `PRIMARY` | Button variant: `PRIMARY`, `OUTLINED`, `SHADED`, `TEXT`, `ICON_PRIMARY`, `ICON_SECONDARY` |
| `size` | `ButtonSize` | `NORMAL` | Button size: `TABLET`, `LARGE`, `NORMAL`, `COMPACT` |
| `color` | `ButtonColor` | `NORMAL` | Color theme: `NORMAL`, `WHITE`, `DANGER`, `WARNING`, `SUCCESS` |
| `icon` | `ReactNode` | - | Icon element to display |
| `iconPosition` | `IconPosition` | `RIGHT` | Icon placement: `LEFT`, `RIGHT`, `TOP` |
| `isLoading` | `boolean` | `false` | Shows loading spinner, hides text |
| `isDisabled` | `boolean` | `false` | Disables button interaction |
| `isExpanded` | `boolean` | `false` | Makes button full-width |
| `isRounded` | `boolean` | `false` | Uses fully rounded corners |
| `onClick` | `function` | - | Click handler |
| `href` | `string` | - | Renders as `<a>` tag if provided |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Primary button with loading state
<CanaryButton type={ButtonType.PRIMARY} isLoading={isSubmitting}>
  Submit
</CanaryButton>

// Text button with icon (for dark backgrounds)
<CanaryButton
  type={ButtonType.TEXT}
  color={ButtonColor.WHITE}
  icon={<Icon path={mdiArrowLeft} size={1} />}
  iconPosition={IconPosition.LEFT}
>
  Back
</CanaryButton>

// Danger button
<CanaryButton type={ButtonType.PRIMARY} color={ButtonColor.DANGER}>
  Delete Account
</CanaryButton>
```

### CanaryInput

```tsx
import { CanaryInput, InputType, InputSize } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `type` | `InputType` | `TEXT` | HTML input type: `TEXT`, `EMAIL`, `PASSWORD`, `NUMBER`, `TEL`, `URL`, `SEARCH`, `DATE`, `TIME` |
| `size` | `InputSize` | `LARGE` | Input size: `TABLET`, `LARGE`, `NORMAL`, `COMPACT` |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled input value |
| `onChange` | `function` | - | Change handler |
| `isDisabled` | `boolean` | `false` | Disables input |
| `isReadonly` | `boolean` | `false` | Makes input read-only |
| `isRequired` | `boolean` | `false` | Adds required indicator |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `leftAddon` | `ReactNode` | - | Element on left side of input |
| `rightAddon` | `ReactNode` | - | Element on right side of input |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Email input with validation
<CanaryInput
  label="Email Address"
  type={InputType.EMAIL}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  isRequired
/>

// Input with icon addon
<CanaryInput
  placeholder="Search..."
  leftAddon={<Icon path={mdiMagnify} size={0.8} />}
/>
```

### CanarySidebar

```tsx
import { CanarySidebar, SidebarVariant, standardMainSidebarSections } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `SidebarVariant` | `MAIN` | Sidebar type: `MAIN`, `SETTINGS` |
| `sections` | `SidebarSection[]` | `[]` | Navigation sections with items |
| `title` | `string` | - | Title for Settings variant |
| `backButton` | `ReactNode` | - | Back button for Settings variant |
| `logo` | `ReactNode` | `<CanaryLogo />` | Custom logo component |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Main sidebar with standard sections
<CanarySidebar sections={standardMainSidebarSections} />

// Settings sidebar with back button
<CanarySidebar
  variant={SidebarVariant.SETTINGS}
  sections={standardSettingsSidebarSections}
  title="Settings"
  backButton={
    <CanaryButton
      type={ButtonType.TEXT}
      color={ButtonColor.WHITE}
      icon={<Icon path={mdiArrowLeft} size={1} />}
      iconPosition={IconPosition.LEFT}
      onClick={() => router.back()}
    >
      Back
    </CanaryButton>
  }
/>
```

### CanaryCard

```tsx
import { CanaryCard } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card header title |
| `headerActions` | `ReactNode` | - | Actions in header (buttons, etc.) |
| `footer` | `ReactNode` | - | Card footer content |
| `children` | `ReactNode` | - | Card body content |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Card with title and content
<CanaryCard title="User Profile">
  <CanaryInput label="Name" value={name} />
  <CanaryInput label="Email" value={email} />
</CanaryCard>

// Card with header actions and footer
<CanaryCard
  title="Payment Information"
  headerActions={
    <CanaryButton type={ButtonType.TEXT}>Edit</CanaryButton>
  }
  footer={
    <CanaryButton type={ButtonType.PRIMARY}>Save Changes</CanaryButton>
  }
>
  {/* Card content */}
</CanaryCard>
```

### CanaryModal

```tsx
import { CanaryModal } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls modal visibility |
| `onClose` | `function` | - | Called when modal should close |
| `title` | `string` | - | Modal title |
| `children` | `ReactNode` | - | Modal content |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Modal width |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Confirmation modal
const [isOpen, setIsOpen] = useState(false);

<CanaryModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Deletion"
>
  <p>Are you sure you want to delete this item?</p>
  <div className="flex gap-2 mt-4">
    <CanaryButton type={ButtonType.OUTLINED} onClick={() => setIsOpen(false)}>
      Cancel
    </CanaryButton>
    <CanaryButton type={ButtonType.PRIMARY} color={ButtonColor.DANGER}>
      Delete
    </CanaryButton>
  </div>
</CanaryModal>
```

### CanaryListItem

```tsx
import { CanaryListItem } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | - | Primary text content |
| `subtitle` | `ReactNode` | - | Secondary text content |
| `description` | `ReactNode` | - | Tertiary text content |
| `icon` | `ReactNode` | - | Icon element to display |
| `leftContent` | `ReactNode` | - | Custom content on the left |
| `rightContent` | `ReactNode` | - | Custom content on the right |
| `children` | `ReactNode` | - | Custom structure (overrides all convenience props) |
| `onClick` | `function` | - | Click handler |
| `href` | `string` | - | Navigation URL |
| `isClickable` | `boolean` | `true` | Whether item responds to clicks |
| `isDraggable` | `boolean` | `false` | Show drag handle |
| `isSelected` | `boolean` | `false` | Selected state |
| `padding` | `'normal' \| 'compact'` | `'normal'` | Vertical padding |
| `alignment` | `'start' \| 'center'` | `'center'` | Vertical alignment |
| `allowTextWrap` | `boolean` | `false` | Allow text to wrap vs truncate |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Simple list item
<CanaryListItem
  title="John Doe"
  subtitle="john@example.com"
  icon={<Icon path={mdiAccountOutline} size={1} />}
  onClick={() => console.log('Clicked')}
/>

// List item with description and right content
<CanaryListItem
  title="Project Alpha"
  subtitle="Updated 2 hours ago"
  description="In progress - 3 tasks remaining"
  rightContent={<CanaryTag color="blue">Active</CanaryTag>}
/>

// Custom layout using children
<CanaryListItem>
  <div className="flex items-center gap-4">
    <img src="/avatar.jpg" className="w-10 h-10 rounded-full" />
    <div>
      <h4>Custom Content</h4>
      <p>Complete flexibility</p>
    </div>
  </div>
</CanaryListItem>
```

### CanaryList

```tsx
import { CanaryList } from '@canary-ui/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | List items (CanaryListItem components) |
| `items` | `any[]` | - | Array of items for controlled drag-and-drop |
| `isDraggable` | `boolean` | `false` | Enable drag-and-drop reordering |
| `onReorder` | `function` | - | Called when items are reordered |
| `hasOuterBorder` | `boolean` | `false` | Show border around list |
| `isLoading` | `boolean` | `false` | Show loading state |
| `loadingContent` | `ReactNode` | `'Loading...'` | Custom loading content |
| `isEmpty` | `boolean` | `false` | Show empty state |
| `emptyContent` | `ReactNode` | `'No items to display'` | Custom empty content |
| `hasError` | `boolean` | `false` | Show error state |
| `errorContent` | `ReactNode` | `'Error loading list'` | Custom error content |
| `className` | `string` | - | Additional CSS classes |

**Common patterns:**
```tsx
// Static list
<CanaryList hasOuterBorder>
  <CanaryListItem title="Item 1" />
  <CanaryListItem title="Item 2" />
  <CanaryListItem title="Item 3" />
</CanaryList>

// Draggable list with state
const [items, setItems] = useState([
  { id: '1', name: 'Task 1' },
  { id: '2', name: 'Task 2' }
]);

<CanaryList
  isDraggable
  items={items}
  onReorder={setItems}
  hasOuterBorder
>
  {items.map(item => (
    <CanaryListItem key={item.id} title={item.name} isDraggable />
  ))}
</CanaryList>

// List with loading/empty states
<CanaryList hasOuterBorder isLoading />
<CanaryList
  hasOuterBorder
  isEmpty
  emptyContent={
    <div>
      <Icon path={mdiInboxOutline} size={2} />
      <p>No tasks yet</p>
    </div>
  }
/>
```

## Usage Example

```tsx
import {
  CanaryButton,
  CanaryInput,
  CanaryCard,
} from "@canary-ui/components";

export default function MyPage() {
  return (
    <CanaryCard title="Sign Up">
      <CanaryInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <CanaryButton type="primary">
        Submit
      </CanaryButton>
    </CanaryCard>
  );
}
```

## Design Tokens

All design tokens are centralized and exported from the library:

```typescript
import { colors, typography, spacing } from "@canary-ui/components";

// Use in your custom components
const myStyle = {
  color: colors.blueDark1,
  fontSize: typography.fontSize.body,
  padding: spacing[4],
};
```

## Working with Figma MCP

This foundation is optimized for use with Figma MCP:

1. **Open your Figma design** in the Figma desktop app
2. **Get the node ID** from the Figma URL (e.g., `node-id=123-456`)
3. **Use Claude Code with Figma MCP** to generate components

Example prompt for Claude:
```
Using the Figma design at node 123:456, build a survey creation page using the Canary UI components from this foundation.
```

## Project Structure

```
canary-prototype-foundation/
├── components/
│   └── canary-ui/           # Component library source
│       ├── design-tokens.ts # Design system tokens
│       ├── buttons/         # Button components
│       ├── forms/           # Form components
│       ├── data-display/    # Data display components
│       ├── layout/          # Layout components
│       ├── navigation/      # Navigation components
│       ├── feedback/        # Feedback components
│       ├── loading/         # Loading components
│       └── index.ts         # Main export
├── demo/                    # Demo site (consumes library)
│   ├── app/
│   └── package.json
├── dist/                    # Built library output
├── package.json             # Library configuration
└── pnpm-workspace.yaml      # Monorepo config
```

## Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use Vercel CLI:

```bash
npx vercel
```

## Component Documentation

Each component is fully typed with TypeScript. Use your IDE's IntelliSense to see available props:

```tsx
<CanaryButton
  type="primary"                // Button style variant
  size="medium"                 // Button size
  isLoading={false}             // Show loading state
  isDisabled={false}            // Disable button
  onClick={() => {}}            // Click handler
>
  Click me
</CanaryButton>
```

For full documentation, see the [demo site](https://canary-prototype-foundation.vercel.app/).

## Customization

### Extending Components

Create custom components that use Canary UI:

```tsx
import { CanaryButton, colors } from "@canary-ui/components";

export function MyCustomButton({ children, ...props }) {
  return (
    <CanaryButton
      className="custom-class"
      style={{ backgroundColor: colors.pink1 }}
      {...props}
    >
      {children}
    </CanaryButton>
  );
}
```

## Keeping Up to Date

### Current Version: v0.4.5

**📋 [View Changelog](./CHANGELOG.md)** - See what's new in each release

### Updating to Latest Version

To update the library in your project:

```bash
# Update to latest release
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#latest

# Or update to a specific version
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.4.5
```

**After updating:**
1. Clear your build cache: `rm -rf .next` (Next.js) or equivalent
2. The library CSS is automatically updated
3. Check the [Changelog](./CHANGELOG.md) for any breaking changes or new features

### Version History

- **v0.4.5** (Latest) - CanaryAppShell SETTINGS variant fix + viewport height fix
- **v0.4.4** - Settings sidebar fix + CLAUDE.md for AI agent scaffolding
- **v0.4.3** - Tailwind CSS 4 compatibility fix (replaced @import with @font-face)
- **v0.4.2** - CanaryPageHeader and CanaryAppShell components for complete app scaffolding
- **v0.4.1** - Flexible sidebar system with customization utilities, pre-built tabs, and hotel-focused examples
- **v0.4.0** - CanaryList and CanaryListItem components with drag-and-drop, animations, and comprehensive state management
- **v0.3.5** - Fixed CanaryTabs hover states, phone input flag icons, cross-browser compatibility improvements  
- **v0.3.4** - React Strict Mode fix, opacity class fixes, improved docs, outline button padding
- **v0.3.3** - Added standard opacity utilities to CSS
- **v0.3.2** - Logo update, settings sidebar improvements
- **v0.3.1** - Icon system, standard sidebar sections, auto font loading
- **v0.3.0** - Self-contained CSS, no Tailwind config needed
- See [full changelog](./CHANGELOG.md) for complete history

## Tips & Best Practices

1. **Keep components pure** - Use props for all configuration
2. **Use design tokens** - Always reference `design-tokens.ts` for colors, spacing
3. **Maintain type safety** - Let TypeScript guide you
4. **Mock data early** - Create realistic sample data for demos
5. **Test responsive** - Check mobile, tablet, and desktop views
6. **Deploy frequently** - Share Vercel URLs with stakeholders

## Troubleshooting

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Type errors

```bash
# Check TypeScript
pnpm typecheck
```

## Support

For questions or issues:
- Check the [component showcase](https://github.com/msantana-canary/canary-prototype-foundation) for examples
- Review component source code in `components/canary-ui/`
- Open an issue on [GitHub](https://github.com/msantana-canary/canary-prototype-foundation/issues)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT

---

**Ready to build?** Install the library and start using the components in your project!
