# Vercel Deployment Guide

## Configuration

The project is now configured for Vercel deployment with the new monorepo structure.

### vercel.json Configuration

```json
{
  "framework": "nextjs",
  "buildCommand": "cd .. && pnpm install && pnpm build && cd demo && pnpm build",
  "outputDirectory": ".next",
  "installCommand": "pnpm install",
  "rootDirectory": "demo"
}
```

### Key Settings

- **rootDirectory**: `demo` - Tells Vercel the Next.js app is in the demo subdirectory
- **buildCommand**: Builds the library first, then the demo site
- **outputDirectory**: `.next` - Standard Next.js output (relative to rootDirectory)

## Build Process

When Vercel deploys, it will:

1. Install pnpm dependencies at the root (creates workspace links)
2. Build the library with `pnpm build` (creates `dist/` folder)
3. Navigate to demo directory
4. Build the demo site with `pnpm build`
5. Deploy the demo site from `demo/.next`

## Vercel Dashboard Settings

You may need to update these settings in the Vercel dashboard:

### Project Settings
- **Framework Preset**: Next.js
- **Root Directory**: demo (should be set automatically from vercel.json)
- **Build Command**: Use the one from vercel.json
- **Output Directory**: .next (relative to root directory)
- **Install Command**: pnpm install

### Environment Variables
No special environment variables needed for this setup.

## Testing the Build

To test the build process locally before deploying:

```bash
# From project root
pnpm install
pnpm build
cd demo
pnpm build
```

This mimics what Vercel will do.

## Troubleshooting

### If build fails with "Cannot find module '@canary-ui/components'"

This means the workspace link isn't working. Ensure:
1. `pnpm-workspace.yaml` is in the root
2. Root `pnpm install` runs before demo build
3. Library is built before demo

### If styles are missing

Ensure the demo's `layout.tsx` imports:
```tsx
import '@canary-ui/components/styles.css';
```

### If components are not found

Check that all library exports are properly defined in `components/canary-ui/index.ts`

## Current Deployment URL

The demo should be deployed at: https://canary-prototype-foundation.vercel.app/

## Next Steps

1. Push changes to GitHub (already done ✅)
2. Vercel should auto-deploy from the `source-reference` branch
3. Check deployment logs in Vercel dashboard
4. Verify the site loads correctly at the deployment URL
5. Once verified, merge to `main` branch for production deployment
