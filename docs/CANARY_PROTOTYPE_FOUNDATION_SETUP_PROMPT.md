# Canary Prototype Foundation Setup

I need you to create/update the Canary prototype foundation project. This is a template repository used for building high-fidelity prototypes of Canary features for customer demos.

## Context
- **Company**: Canary (SaaS product)
- **Purpose**: Build high-fidelity, non-production prototypes for customer demos
- **Deployment**: Vercel (shareable links for customers to interact with)
- **Design System Location**: `/Documents/Canary/canary/frontend/packages/canary-ui/`
- **Design System Info**: 136+ Vue 2 components using Buefy, SCSS, @mdi icons

## Requirements

### Tech Stack (MUST USE)
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Zustand or Jotai (state management)
- @mdi/react or @mdi/js (icons)
- pnpm (package manager)

### Project Structure
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (component showcase)
│   └── globals.css
├── components/
│   └── canary-ui/
│       ├── buttons/
│       ├── forms/
│       ├── data-display/
│       ├── layout/
│       ├── navigation/
│       ├── feedback/
│       └── design-tokens.ts
├── lib/
└── public/
```

### Tasks

1. **Extract Design Tokens** from `/Documents/Canary/canary/frontend/packages/canary-ui/`
   - Colors (especially Canary Blue: #2858c4)
   - Typography
   - Spacing
   - Border radius
   - Shadows
   - Create `components/canary-ui/design-tokens.ts`

2. **Build Canary UI Component Library**
   - Recreate components from `/Documents/Canary/canary/frontend/packages/canary-ui/src/` in React/TypeScript
   - Match the Vue components' props, behavior, and styling
   - Organize by category (buttons, forms, data-display, etc.)
   - Essential components to build:
     - **Buttons**: CanaryButton
     - **Forms**: CanaryInput, CanarySelect, CanaryTextArea, CanaryCheckbox, CanaryRadio, CanaryRadioGroup
     - **Data Display**: CanaryTag, CanaryTable, CanaryList
     - **Layout**: CanaryContainer, CanaryCard, CanaryGrid
     - **Navigation**: CanarySidebar, CanaryHeader, CanaryTabs
     - **Feedback**: CanaryToast, CanaryModal, CanaryLoading

3. **Component Requirements**
   - Use Tailwind CSS for styling
   - TypeScript interfaces for all props
   - Match Canary's visual design exactly (colors, spacing, typography)
   - Support common states: disabled, loading, error, etc.
   - Use @mdi icons where applicable

4. **Create Example/Showcase Page**
   - Build a page showcasing all components
   - Useful for visual QA and component reference
   - Shows different states and variants

5. **Setup Configuration**
   - Tailwind config with Canary design tokens
   - TypeScript config
   - ESLint + Prettier
   - README with setup instructions
   - .gitignore

6. **Figma MCP Readiness**
   - Ensure component names match Figma design system
   - Components should be easily mappable to Figma designs
   - Include comments about Figma component equivalents

## Deliverables
- Complete, runnable Next.js project
- All Canary UI components built and functional
- Design tokens extracted and documented
- Example page showing all components
- README with:
  - How to clone and start a new prototype
  - How to use Figma MCP with these components
  - Component documentation

## Additional Notes
- This is a TEMPLATE repository - it should be clean, well-organized, and ready to clone
- Focus on visual fidelity and component completeness
- Mock data is fine - no real backend integration needed
- Prioritize components that appear frequently in prototypes (buttons, forms, tables, tags)

## Usage Instructions

To use this prompt:
1. Open a new conversation with Claude Code
2. Ensure you have access to the Canary repository at `/Documents/Canary/`
3. Paste this entire prompt
4. Claude will build the complete foundation from scratch

## For Updates
If the foundation already exists and you need to update specific components:
- Reference this prompt but specify which components to update
- Example: "Using the Canary Prototype Foundation setup guidelines, update the CanaryButton component to include a new 'danger' variant"
