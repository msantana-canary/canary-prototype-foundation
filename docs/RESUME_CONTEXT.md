# 🚨 Emergency Resume Context - Canary Prototype Projects

**If you need to restart a conversation with Claude Code about these projects, copy-paste this:**

---

## Quick Context Restore Prompt

```
I'm working on Canary prototype projects. Here's the context:

PROJECTS:
1. /Users/miguelsantana/Documents/Claude-Projects/canary-prototype-foundation/
   - Complete React component library (30+ components)
   - Next.js 15 + React 19 + TypeScript + Tailwind CSS
   - Matches Canary design system
   - Status: ✅ COMPLETE, BUILD PASSING

2. /Users/miguelsantana/Documents/Claude-Projects/survey-design/
   - Clone of foundation for building survey feature
   - Ready for Figma MCP integration
   - Status: ✅ READY FOR DEVELOPMENT

WHAT WAS BUILT:
- All Canary UI components: Buttons, Forms (Input, Select, Checkbox, Radio),
  Tables, Cards, Tags, Modals, Tabs, Sidebar, Header, Alerts, Toasts, Loading
- Design tokens extracted from /Documents/Canary/canary/frontend/packages/canary-ui/
- Component showcase at app/page.tsx
- Full TypeScript types and documentation

TECH STACK:
- Next.js 15 (App Router) + React 19 + TypeScript 5 + Tailwind 4 + pnpm

CURRENT GOAL:
Build survey feature prototype using Figma MCP in the survey-design project.

Please read SESSION.md in either project for complete details.
```

---

## Emergency File Locations

- **Foundation**: `/Users/miguelsantana/Documents/Claude-Projects/canary-prototype-foundation/`
- **Survey Project**: `/Users/miguelsantana/Documents/Claude-Projects/survey-design/`
- **Original Canary UI**: `/Documents/Canary/canary/frontend/packages/canary-ui/`
- **Setup Prompt**: `/Users/miguelsantana/Documents/Claude-Projects/CANARY_PROTOTYPE_FOUNDATION_SETUP_PROMPT.md`
- **Full Session Details**: Read `SESSION.md` in either project

## Quick Commands

```bash
# Foundation
cd /Users/miguelsantana/Documents/Claude-Projects/canary-prototype-foundation
pnpm dev  # http://localhost:3000

# Survey (current work)
cd /Users/miguelsantana/Documents/Claude-Projects/survey-design
pnpm install
pnpm dev
```

## What Components Exist

All in `/components/canary-ui/`:
- `CanaryButton` - buttons/CanaryButton.tsx
- `CanaryInput, CanaryTextArea, CanarySelect, CanaryCheckbox, CanaryRadio` - forms/
- `CanaryTag, CanaryTable, CanaryCard` - data-display/
- `CanaryContainer, CanaryGrid, CanaryModal` - layout/
- `CanaryTabs, CanarySidebar, CanaryHeader` - navigation/
- `CanaryAlert, CanaryToast, CanaryLoading` - feedback/ and loading/
- Design tokens in `design-tokens.ts`

All exported from `@/components/canary-ui`

---

**Save this file! It's your lifeline to restore context quickly.**
