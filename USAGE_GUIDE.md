# Canary UI Library - Usage Guide

This guide explains how to use the Canary UI component library in your new projects.

## Publishing the Library

### Option 1: Publish to npm Registry

1. **Update package.json metadata:**
   ```json
   {
     "name": "@your-org/canary-ui",
     "author": "Your Name",
     "repository": {
       "type": "git",
       "url": "https://github.com/your-org/canary-ui"
     }
   }
   ```

2. **Login to npm:**
   ```bash
   npm login
   ```

3. **Publish:**
   ```bash
   npm publish --access public
   ```

### Option 2: Use as a Local Dependency

You can use this library locally without publishing:

1. **Build the library:**
   ```bash
   npm run build:lib
   ```

2. **In your new project, install via file path:**
   ```bash
   npm install /path/to/canary-prototype-foundation
   ```

### Option 3: Use npm link (for development)

1. **In the library directory:**
   ```bash
   npm run build:lib
   npm link
   ```

2. **In your new project directory:**
   ```bash
   npm link @canary-ui/components
   ```

### Option 4: Private npm Registry

If you have a private npm registry (like Verdaccio or GitHub Packages):

1. **Configure registry:**
   ```bash
   npm config set @your-org:registry https://your-registry-url
   ```

2. **Publish:**
   ```bash
   npm publish
   ```

## Setting Up a New Project

### Step 1: Create a New Next.js Project

```bash
npx create-next-app@latest my-canary-app
cd my-canary-app
```

Choose:
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ App Router

### Step 2: Install Canary UI

```bash
# If published to npm
npm install @canary-ui/components

# If using locally
npm install /path/to/canary-prototype-foundation
```

### Step 3: Import Styles

In `app/layout.tsx` or `app/globals.css`:

```tsx
import '@canary-ui/components/styles.css';
```

### Step 4: Use Components

Create a new page in `app/page.tsx`:

```tsx
'use client';

import { CanaryButton, CanaryInput, ButtonType, InputSize } from '@canary-ui/components';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Canary App</h1>

      <CanaryInput
        label="Email"
        type="email"
        size={InputSize.LARGE}
        placeholder="Enter your email"
      />

      <CanaryButton type={ButtonType.PRIMARY} className="mt-4">
        Submit
      </CanaryButton>
    </main>
  );
}
```

## Continuous Development Workflow

If you're actively developing the library alongside your app:

1. **Watch mode in library (in a separate terminal):**
   ```bash
   cd /path/to/canary-prototype-foundation
   npx tsup --watch
   ```

2. **Use npm link for live updates:**
   ```bash
   # In library directory
   npm link

   # In your app directory
   npm link @canary-ui/components
   ```

3. **Restart your dev server when library changes**

## Tailwind Configuration

Make sure your project's `tailwind.config.js` is configured to scan the library:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@canary-ui/components/dist/**/*.{js,mjs}', // Add this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Versioning

When making changes to the library:

1. **Update version in package.json:**
   ```bash
   npm version patch  # 0.1.0 -> 0.1.1
   npm version minor  # 0.1.0 -> 0.2.0
   npm version major  # 0.1.0 -> 1.0.0
   ```

2. **Rebuild:**
   ```bash
   npm run build:lib
   ```

3. **Republish:**
   ```bash
   npm publish
   ```

4. **Update in your projects:**
   ```bash
   npm update @canary-ui/components
   ```

## Troubleshooting

### Components not styled correctly

- Make sure you've imported `@canary-ui/components/styles.css`
- Check that Tailwind is configured to scan the library
- Verify Tailwind CSS is installed in your project

### TypeScript errors

- Make sure you have `@types/react` and `@types/react-dom` installed
- Check that your `tsconfig.json` includes proper paths

### "use client" warnings

- These warnings are safe to ignore
- They ensure components work in Next.js App Router

### Module not found

- Run `npm run build:lib` in the library directory
- Check that `dist/` folder exists with built files
- Verify the package name matches in both package.json files

## Example Projects

Check the `app/` directory in this repository for a complete showcase of all components.

## Best Practices

1. **Keep the library updated:** Regularly rebuild and republish when making changes
2. **Version control:** Use semantic versioning for clear update paths
3. **Test before publishing:** Always test in the showcase app first
4. **Document changes:** Update README when adding new components
5. **Type safety:** Leverage TypeScript for better DX

## Next Steps

- Add new components to `components/canary-ui/`
- Update exports in `components/canary-ui/index.ts`
- Rebuild with `npm run build:lib`
- Update version and republish
