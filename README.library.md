# Canary UI Component Library

A comprehensive React component library implementing the Canary design system for building high-fidelity prototypes.

## Installation

```bash
npm install @canary-ui/components
# or
yarn add @canary-ui/components
# or
pnpm add @canary-ui/components
```

## Setup

### 1. Install Peer Dependencies

This library requires React 18+ or React 19+:

```bash
npm install react react-dom
```

### 2. Import Styles

Import the Tailwind CSS styles in your app's main CSS file or entry point:

```tsx
// app/layout.tsx or app/globals.css
import '@canary-ui/components/styles.css';
```

### 3. Configure Tailwind CSS

Since this library uses Tailwind CSS for styling, ensure you have Tailwind CSS installed in your project:

```bash
npm install -D tailwindcss @tailwindcss/postcss
```

## Usage

### Basic Example

```tsx
import { CanaryButton, ButtonType, ButtonSize } from '@canary-ui/components';

function App() {
  return (
    <CanaryButton
      type={ButtonType.PRIMARY}
      size={ButtonSize.LARGE}
      onClick={() => console.log('Clicked!')}
    >
      Click Me
    </CanaryButton>
  );
}
```

### Available Components

#### Buttons
```tsx
import { CanaryButton, ButtonType, ButtonSize } from '@canary-ui/components';

<CanaryButton type={ButtonType.PRIMARY}>Primary</CanaryButton>
<CanaryButton type={ButtonType.OUTLINED}>Outlined</CanaryButton>
<CanaryButton type={ButtonType.SHADED}>Shaded</CanaryButton>
<CanaryButton type={ButtonType.TEXT}>Text</CanaryButton>
<CanaryButton isLoading>Loading...</CanaryButton>
<CanaryButton isDisabled>Disabled</CanaryButton>
```

#### Form Components
```tsx
import {
  CanaryInput,
  CanaryTextArea,
  CanarySelect,
  CanaryCheckbox,
  CanaryRadio,
  CanaryRadioGroup,
  CanarySegmentedControl,
  InputSize,
  InputType
} from '@canary-ui/components';

// Input
<CanaryInput
  label="Email"
  type={InputType.EMAIL}
  size={InputSize.LARGE}
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// TextArea
<CanaryTextArea
  label="Message"
  rows={4}
  placeholder="Enter your message"
/>

// Select
<CanarySelect
  label="Country"
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" }
  ]}
/>

// Checkbox
<CanaryCheckbox label="I agree to terms" />

// Radio Group
<CanaryRadioGroup label="Choose an option">
  <CanaryRadio name="option" label="Option 1" />
  <CanaryRadio name="option" label="Option 2" />
</CanaryRadioGroup>

// Segmented Control
<CanarySegmentedControl
  options={[
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

#### Data Display
```tsx
import {
  CanaryTag,
  CanaryTable,
  CanaryCard,
  TagColor
} from '@canary-ui/components';

// Tags
<CanaryTag label="Success" color={TagColor.OK} />
<CanaryTag label="Warning" color={TagColor.WARNING} />
<CanaryTag label="Error" color={TagColor.ERROR} />

// Table
<CanaryTable
  columns={[
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" }
  ]}
  data={[
    { id: 1, name: "John", email: "john@example.com" }
  ]}
  onRowClick={(row) => console.log(row)}
/>

// Card
<CanaryCard title="Card Title">
  <p>Card content goes here</p>
</CanaryCard>
```

#### Layout Components
```tsx
import {
  CanaryContainer,
  CanaryGrid,
  CanaryModal
} from '@canary-ui/components';

// Container
<CanaryContainer maxWidth="lg" padding="large">
  {/* Your content */}
</CanaryContainer>

// Grid
<CanaryGrid columns={3} gap="medium">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</CanaryGrid>

// Modal
<CanaryModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<CanaryButton onClick={() => setIsOpen(false)}>Close</CanaryButton>}
>
  <p>Modal content</p>
</CanaryModal>
```

#### Navigation
```tsx
import {
  CanaryTabs,
  CanarySidebar,
  CanaryHeader
} from '@canary-ui/components';

// Tabs
<CanaryTabs
  tabs={[
    { id: "1", label: "Tab 1", content: <div>Content 1</div> },
    { id: "2", label: "Tab 2", content: <div>Content 2</div> }
  ]}
/>

// Header
<CanaryHeader
  title="My App"
  actions={<CanaryButton>Action</CanaryButton>}
/>

// Sidebar
<CanarySidebar
  items={[
    { label: "Dashboard", href: "/dashboard", isActive: true },
    { label: "Settings", href: "/settings" }
  ]}
/>
```

#### Feedback Components
```tsx
import {
  CanaryAlert,
  CanaryToast,
  CanaryLoading
} from '@canary-ui/components';

// Alert
<CanaryAlert
  type="success"
  title="Success!"
  message="Operation completed successfully"
/>

// Toast
<CanaryToast
  message="Saved successfully"
  type="success"
  isOpen={showToast}
  onClose={() => setShowToast(false)}
/>

// Loading Spinner
<CanaryLoading size={32} color="#0066cc" />
```

### Design Tokens

Access Canary design system colors and shadows:

```tsx
import { colors, shadows } from '@canary-ui/components';

// Use in your custom components
<div style={{
  backgroundColor: colors.blueCanary3,
  boxShadow: shadows.md
}}>
  Custom component
</div>
```

Available color palettes:
- Status: `ok`, `warning`, `danger`
- Black Scale: `black1` through `black8`
- Blue Canary: `blueCanary1` through `blueCanary5`
- Blue Dark: `blueDark1` through `blueDark5`
- Other palettes: Pink, Light Green, Dark Green, Wheat, Purple, Red

## TypeScript Support

This library is written in TypeScript and includes type definitions. All component props are fully typed.

```tsx
import type { CanaryButtonProps, CanaryInputProps } from '@canary-ui/components';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a library for internal use. For issues or feature requests, please contact the development team.

## License

MIT

## Development

To build this library from source:

```bash
# Install dependencies
npm install

# Build the library
npm run build:lib

# Run the showcase app
npm run dev
```

## Credits

Built with Next.js, React, TypeScript, and Tailwind CSS.
