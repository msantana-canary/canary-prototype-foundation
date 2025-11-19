# Migration Guide: Source Reference Optimization

This document outlines the changes made to optimize the Canary UI library for external consumption.

## Summary of Changes

The project has been restructured from a single-package Next.js app to a proper library + demo monorepo setup that follows best practices for UI library development.

### Before
```
canary-prototype-foundation/
├── app/                    # Next.js app
├── components/canary-ui/   # Component source
├── package.json           # Mixed Next.js + library deps
└── tsconfig.json
```

### After
```
canary-prototype-foundation/
├── components/canary-ui/   # Component source (library)
├── demo/                   # Demo site (separate package)
│   ├── app/
│   ├── package.json
│   └── tsconfig.json
├── dist/                   # Built library output
├── package.json            # Library-focused
├── pnpm-workspace.yaml     # Workspace configuration
└── tsup.config.ts          # Library build config
```

## Key Changes

### 1. Separated Demo from Library

The Next.js demo site has been moved to a `demo/` directory and now consumes the library as a proper package dependency.

**Demo package.json:**
```json
{
  "name": "@canary-ui/demo",
  "dependencies": {
    "@canary-ui/components": "workspace:*"
  }
}
```

### 2. Updated Import Paths

All imports in the demo site now use the package name instead of local paths:

**Before:**
```tsx
import { CanaryButton } from '@/components/canary-ui';
```

**After:**
```tsx
import { CanaryButton } from '@canary-ui/components';
import '@canary-ui/components/styles.css';
```

### 3. Workspace Configuration

Added `pnpm-workspace.yaml` to manage the monorepo:

```yaml
packages:
  - '.'
  - 'demo'
```

### 4. Updated Scripts

Root `package.json` scripts now focus on library building:

```json
{
  "scripts": {
    "dev": "pnpm --filter @canary-ui/demo dev",
    "dev:demo": "pnpm --filter @canary-ui/demo dev",
    "build": "tsup",
    "build:demo": "pnpm --filter @canary-ui/demo build",
    "start:demo": "pnpm --filter @canary-ui/demo start"
  }
}
```

### 5. Cleaned Up Dependencies

The root `package.json` now only includes dependencies needed for the library itself, removing Next.js-specific packages.

## Benefits

1. **True Library Testing** - The demo site consumes the library exactly as external users would
2. **Better Separation** - Clear distinction between library code and demo/documentation
3. **Easier Publishing** - Library can be published without demo site code
4. **Improved DX** - Other developers can install and use the library without confusion
5. **Standard Structure** - Follows common UI library patterns (similar to Material-UI, Chakra UI, etc.)

## For External Users

When installing `@canary-ui/components` from npm, users will get:

```bash
npm install @canary-ui/components
```

```tsx
import { CanaryButton, CanaryInput } from '@canary-ui/components';
import '@canary-ui/components/styles.css';

function App() {
  return <CanaryButton type="primary">Click Me</CanaryButton>;
}
```

## Development Workflow

### Building the Library
```bash
pnpm build
```

### Running the Demo Site
```bash
pnpm dev
```

### Building the Demo Site
```bash
pnpm build:demo
```

## Migration Checklist

- [x] Move demo app to `demo/` directory
- [x] Update import paths to use `@canary-ui/components`
- [x] Create workspace configuration
- [x] Update root `package.json` scripts
- [x] Clean up dependencies
- [x] Test library build
- [ ] Install dependencies with pnpm
- [ ] Test demo site locally
- [ ] Update deployment configuration (Vercel)
- [ ] Update README with new structure

## Next Steps

1. Run `pnpm install` in the root directory to set up the workspace
2. Build the library: `pnpm build`
3. Run the demo: `pnpm dev`
4. Update Vercel deployment settings to build from `demo/` directory
