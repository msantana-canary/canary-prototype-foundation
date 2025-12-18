# Canary UI Component Library

This is the **Canary UI Component Library** - a React component library for building internal prototypes at Canary Technologies (hotel/hospitality SaaS).

## For AI Agents: Starting a New Prototype Project

If a user wants to build a prototype using this library and no project exists yet, create this scaffold:

### Required Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 18 or 19
- **Components**: Canary UI (this library)

### Project Setup Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest my-prototype --typescript --tailwind --app --src-dir=false --import-alias="@/*"

# 2. Navigate to project
cd my-prototype

# 3. Install Canary UI
pnpm add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.4.5
```

### Required Configuration

**app/layout.tsx** - Add the library CSS import:
```tsx
import '@canary-ui/components/styles.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Recommended Starting Point

Use `CanaryAppShell` for complete app scaffolding:

```tsx
'use client';

import {
  CanaryAppShell,
  SidebarVariant
} from '@canary-ui/components';

export default function Home() {
  return (
    <CanaryAppShell
      sidebarVariant={SidebarVariant.MAIN}
      propertyName="Hotel Canary"
      userProfile={{
        name: 'John Doe',
        role: 'Front Desk',
      }}
    >
      {/* Your page content here */}
      <h1>Welcome to your prototype</h1>
    </CanaryAppShell>
  );
}
```

## Component Documentation

**IMPORTANT**: Before writing any component code, read the complete API reference:

📖 **[AI_REFERENCE.md](./AI_REFERENCE.md)** - Complete component inventory, props, icons, and color tokens

This file contains:
- All 40+ available components with exact import names
- TypeScript enums and types
- 50+ icon names (use ONLY these, do not guess)
- Color tokens and design values
- Pre-built sidebar configurations
- Code examples for common patterns

## Key Rules for AI Agents

1. **Never guess component names** - Use only components listed in AI_REFERENCE.md
2. **Never guess icon names** - Use only icons from the `iconPaths` export
3. **Use 'use client' directive** - Required for interactive components in Next.js App Router
4. **Import from '@canary-ui/components'** - Single import path for all components
5. **Use design tokens** - Import colors/spacing from the library, don't hardcode values

## Common Components

| Component | Purpose |
|-----------|---------|
| `CanaryAppShell` | Full app scaffold (sidebar + header + content) |
| `CanaryButton` | Primary, secondary, outline, ghost buttons |
| `CanaryCard` | Content containers |
| `CanaryInput` | Text inputs (regular and underline variants) |
| `CanarySelect` | Dropdowns |
| `CanaryModal` | Dialog overlays |
| `CanaryTabs` | Tab navigation |
| `CanaryList` / `CanaryListItem` | Lists with optional drag-and-drop |
| `CanarySidebar` | Navigation sidebar |
| `CanaryPageHeader` | App header with property/user info |

## Project Context

Canary Technologies builds software for hotels. Prototypes typically involve:
- Guest check-in/check-out flows
- Room management dashboards
- Upsell and amenity interfaces
- Staff task management
- Payment and authorization screens
- Settings and configuration pages

When building prototypes, use hotel/hospitality terminology and realistic mock data.
