# 🚀 New Canary Prototype - Quick Start Prompt

**Use this prompt to start a new prototype project with Claude Code**

---

## Instructions

1. **Choose your project name** (e.g., `reporting-dashboard`, `guest-journey-builder`, `analytics-dashboard`)
2. **Replace `[YOUR_PROJECT_NAME]` below** with your actual project name
3. **Copy the entire prompt**
4. **Paste into a new Claude Code conversation**

---

## 📋 PROMPT TEMPLATE (Copy from here)

```
I want to create a new Canary prototype project using the existing foundation.

CONTEXT:
There's a complete Canary UI component library (foundation) at:
/Users/miguelsantana/Documents/Claude-Projects/canary-prototype-foundation/

This foundation contains:
- 30+ React components matching Canary design system
- Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4
- All design tokens from Canary UI
- Components: Buttons, Forms, Tables, Cards, Modals, Tabs, Navigation, Alerts, etc.
- Build tested and passing

WHAT I NEED:
1. Clone the foundation to a new project called "[YOUR_PROJECT_NAME]"
2. Clean it up (remove .git, node_modules, .next)
3. Initialize fresh git repo
4. Install dependencies with pnpm
5. Verify it builds successfully
6. Create a SESSION.md file documenting this new project
7. Tell me it's ready so I can start building

NEW PROJECT LOCATION:
/Users/miguelsantana/Documents/Claude-Projects/[YOUR_PROJECT_NAME]/

TECH STACK (already in foundation, don't change):
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- pnpm package manager

The foundation has a SESSION.md file with complete documentation. Read it for context on what components are available.

After setup, I'll give you Figma designs to build using the pre-built Canary UI components.
```

---

## 📝 Example Usage

**If building a "Reporting Dashboard":**

1. Replace `[YOUR_PROJECT_NAME]` with `reporting-dashboard`
2. Paste into Claude Code
3. Claude creates: `/Users/miguelsantana/Documents/Claude-Projects/reporting-dashboard/`
4. All 30+ Canary UI components ready to use!

**If building a "Guest Journey Builder":**

1. Replace `[YOUR_PROJECT_NAME]` with `guest-journey-builder`
2. Paste into Claude Code
3. Claude creates: `/Users/miguelsantana/Documents/Claude-Projects/guest-journey-builder/`
4. Start building immediately!

---

## ✅ What You Get

After running this prompt, you'll have:

- ✅ New project with all Canary UI components
- ✅ Clean git history
- ✅ Dependencies installed
- ✅ Build verified and passing
- ✅ Ready for Figma MCP integration
- ✅ SESSION.md documenting the project

---

## 🎨 Available Components

Your new project will have immediate access to:

### Buttons
- `CanaryButton` - 6 types, 5 sizes, loading/disabled states

### Forms
- `CanaryInput` - Text input with validation
- `CanaryTextArea` - Multi-line text
- `CanarySelect` - Dropdown with options
- `CanaryCheckbox` - Checkbox
- `CanaryRadio` - Radio button
- `CanaryRadioGroup` - Radio group

### Data Display
- `CanaryTag` - Status tags (OK, WARNING, ERROR, INFO, DARK)
- `CanaryTable` - Data table with custom renderers
- `CanaryCard` - Card with header/footer

### Layout
- `CanaryContainer` - Responsive container
- `CanaryGrid` - Responsive grid (1-12 columns)
- `CanaryModal` - Modal dialog

### Navigation
- `CanaryTabs` - Tabbed interface
- `CanarySidebar` - Sidebar navigation
- `CanaryHeader` - Application header

### Feedback
- `CanaryAlert` - Inline alerts
- `CanaryToast` - Toast notifications
- `CanaryLoading` - Loading spinner

### Design Tokens
- `colors` - All Canary color palettes
- `typography` - 11 type classifications
- `spacing` - 0-24 scale
- `shadows`, `borderRadius`, `zIndex`, etc.

---

## 💡 Quick Commands (For After Setup)

```bash
# Navigate to your new project
cd /Users/miguelsantana/Documents/Claude-Projects/[YOUR_PROJECT_NAME]

# Start development server
pnpm dev

# Build for production
pnpm build

# View at
http://localhost:3000
```

---

## 🔧 Next Steps After Setup

1. **Get Figma designs** - Obtain node ID from Figma URL
2. **Use Claude with Figma MCP** to build from designs
3. **Use pre-built components** from `@/components/canary-ui`
4. **Deploy to Vercel** when ready to share

---

## 📚 Additional Resources

- **Foundation README**: `/canary-prototype-foundation/README.md`
- **Foundation SESSION**: `/canary-prototype-foundation/SESSION.md`
- **Resume Context**: `/Claude-Projects/RESUME_CONTEXT.md`
- **Original Canary UI**: `/Documents/Canary/canary/frontend/packages/canary-ui/`

---

**Save this file! Use it every time you start a new prototype.**
