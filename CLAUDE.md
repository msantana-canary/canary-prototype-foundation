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
pnpm add git+https://github.com/msantana-canary/canary-prototype-foundation.git#v0.6.0
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

Use **`CanaryAppShellV2`** for complete app scaffolding. This is the current
design-system shell and the default for all new prototypes:

```tsx
'use client';

import { useState } from 'react';
import { CanaryAppShellV2 } from '@canary-ui/components';

export default function Home() {
  const [selectedId, setSelectedId] = useState('messages');

  return (
    <CanaryAppShellV2
      // Sidebar
      property={{ name: 'Days Inn & Suites by Wyndham Wausau', code: '38653' }}
      selectedSidebarItemId={selectedId}
      onSidebarItemClick={setSelectedId}
      teamChat={{ badge: 2 }}
      user={{ name: 'Theresa' }}
      // Top bar
      insight={{ label: '35 guests are arriving today' }}
      reservationStatus={{ isConnected: true }}
      copilot={{ message: '2 items need attention' }}
    >
      {/* Your page content here */}
      <h1>Welcome to your prototype</h1>
    </CanaryAppShellV2>
  );
}
```

**The top bar title is automatic.** It comes from the selected sidebar item, so
you never pass it twice and the two can't drift apart. Only pass `pageTitle`
when the page title genuinely differs from the nav label:

```tsx
<CanaryAppShellV2 selectedSidebarItemId="food-and-beverage" pageTitle="Food & Beverage">
```

**Content padding.** Defaults to `medium` (24px). Pass `contentPadding="none"`
for products that render their own full-bleed chrome (a tab strip, a split
pane) directly under the top bar.

**Settings pages.** Same component, different skin — pass
`sidebarVariant={SidebarVariant.SETTINGS}` and an `onSidebarBack` handler.

#### V1 vs V2

`CanaryAppShell`, `CanarySidebar` (V1) are **frozen, not removed**. Every
prototype built against them keeps working exactly as before. Do not migrate an
existing prototype to V2 unless explicitly asked — when you are asked, it is a
one-line import swap plus renaming the shell props listed above.

## Component Documentation

**IMPORTANT**: Before writing any component code, read the complete API reference.

The reference file location depends on your context:
- **In this repo:** [`./AI_REFERENCE.md`](./AI_REFERENCE.md)
- **In a project that installed the library:** `node_modules/@canary-ui/components/AI_REFERENCE.md`

📖 **AI_REFERENCE.md** - Complete component inventory, props, icons, color tokens, and page patterns

This file contains:
- **Component Selection Guide** — "I need X" → use this component (start here to pick the right component)
- **Bordered vs. Underline guidance** — when to use each input variant
- All 40+ available components with exact import names
- **Per-component usage guidance** — when to use, when NOT to use, and what to use instead
- TypeScript enums and types
- 50+ icon names (use ONLY these, do not guess)
- Color tokens and design values
- Pre-built sidebar configurations
- **Page Patterns** — 10 full-page layout patterns derived from the live Canary product (Data Table, Split View, Tabbed Content, Settings, Detail View, Form Builder, Editor with Preview, Guest Journey, Inbox, Modal Action Flow) — each with when-to-use guidance, component list, and a code skeleton

## Key Rules for AI Agents

1. **Never guess component names** - Use only components listed in AI_REFERENCE.md
2. **Never guess icon names** - Use only icons from the `iconPaths` export
3. **Use 'use client' directive** - Required for interactive components in Next.js App Router
4. **Import from '@canary-ui/components'** - Single import path for all components
5. **Use design tokens** - Import colors/spacing from the library, don't hardcode values

## Common Components

| Component | Purpose |
|-----------|---------|
| `CanaryAppShell` | V1 app scaffold — frozen, existing prototypes only |
| `CanaryButton` | Primary, secondary, outline, ghost buttons |
| `CanaryCard` | Content containers |
| `CanaryInput` | Text inputs (regular and underline variants) |
| `CanarySelect` | Dropdowns |
| `CanaryModal` | Dialog overlays |
| `CanaryTabs` | Tab navigation |
| `CanaryList` / `CanaryListItem` | Lists with optional drag-and-drop |
| `CanaryAppShellV2` | **Current** full app scaffold (sidebar + top bar + content) |
| `CanarySidebarV2` | **Current** 240px navigation sidebar |
| `CanaryTopBarV2` | **Current** top bar (title, insight link, Reservations, Copilot) |
| `CanarySidebar` | V1 navigation sidebar — frozen, existing prototypes only |
| `CanaryPageHeader` | Page-level header with title and optional action buttons |

## Project Context

Canary Technologies builds software for hotels. Prototypes typically involve:
- Guest check-in/check-out flows
- Room management dashboards
- Upsell and amenity interfaces
- Staff task management
- Payment and authorization screens
- Settings and configuration pages

When building prototypes, use hotel/hospitality terminology and realistic mock data.
