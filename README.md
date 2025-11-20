# @canary-ui/components

A comprehensive React component library implementing the Canary design system for building high-fidelity prototypes. Built with React 19, TypeScript, and Tailwind CSS.

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
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.1
# or
yarn add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.1
# or
pnpm add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.1
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

## Maintenance

### Updating to Latest Version

To update the library in your project:

```bash
# Update to latest release
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#latest

# Or update to a specific version (current: v0.3.1)
npm install git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.3.1
```

**After updating**, clear your build cache if needed: `rm -rf .next` (Next.js) or equivalent. The library CSS is automatically updated.

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
