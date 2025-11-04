# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Build the Library (First Time Only)

```bash
npm run build:lib
```

This creates the `dist/` folder with your compiled library.

### Step 2: Choose How to Use It

#### Option A: Use in a New Project (Recommended)

1. **Create a new Next.js project:**
```bash
npx create-next-app@latest my-app
cd my-app
```

2. **Install the library:**
```bash
# Using file path
npm install /path/to/canary-prototype-foundation

# Or using npm link (for active development)
cd /path/to/canary-prototype-foundation
npm link
cd /path/to/my-app
npm link @canary-ui/components
```

3. **Import styles in `app/layout.tsx`:**
```tsx
import '@canary-ui/components/styles.css';
```

4. **Use components in `app/page.tsx`:**
```tsx
'use client';

import { CanaryButton, ButtonType } from '@canary-ui/components';

export default function Home() {
  return (
    <main className="p-8">
      <CanaryButton type={ButtonType.PRIMARY}>
        Hello Canary!
      </CanaryButton>
    </main>
  );
}
```

5. **Run your app:**
```bash
npm run dev
```

#### Option B: Publish to npm (For Team Use)

1. **Update `package.json`:**
```json
{
  "name": "@your-company/canary-ui",
  "author": "Your Name",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-company/canary-ui"
  }
}
```

2. **Build and publish:**
```bash
npm run build:lib
npm login
npm publish --access public
```

3. **Install in any project:**
```bash
npm install @your-company/canary-ui
```

### Step 3: Start Building

That's it! You can now use all 30+ Canary UI components in your projects.

## 📚 Common Components

### Button
```tsx
import { CanaryButton, ButtonType, ButtonSize } from '@canary-ui/components';

<CanaryButton
  type={ButtonType.PRIMARY}
  size={ButtonSize.LARGE}
  onClick={() => alert('Clicked!')}
>
  Click Me
</CanaryButton>
```

### Input
```tsx
import { CanaryInput, InputSize, InputType } from '@canary-ui/components';

<CanaryInput
  label="Email"
  type={InputType.EMAIL}
  size={InputSize.LARGE}
  placeholder="you@example.com"
/>
```

### Card
```tsx
import { CanaryCard } from '@canary-ui/components';

<CanaryCard title="Welcome">
  <p>Your content here</p>
</CanaryCard>
```

### Modal
```tsx
import { CanaryModal, CanaryButton } from '@canary-ui/components';
import { useState } from 'react';

const [open, setOpen] = useState(false);

<>
  <CanaryButton onClick={() => setOpen(true)}>
    Open Modal
  </CanaryButton>

  <CanaryModal
    isOpen={open}
    onClose={() => setOpen(false)}
    title="My Modal"
  >
    <p>Modal content</p>
  </CanaryModal>
</>
```

## 🎨 Design Tokens

```tsx
import { colors, shadows } from '@canary-ui/components';

<div style={{
  backgroundColor: colors.blueCanary3,
  boxShadow: shadows.md,
  color: colors.black1
}}>
  Custom styled element
</div>
```

## 📖 Full Documentation

- **All Components**: See `README.library.md`
- **Publishing Guide**: See `USAGE_GUIDE.md`
- **Examples**: Run `npm run dev` to see the showcase

## 🛠️ Development Tips

### Watch Mode (Auto-rebuild on changes)
```bash
npx tsup --watch
```

### Update Library in Linked Project
```bash
# In library directory
npm run build:lib

# Your linked project will automatically pick up changes
# Just refresh the browser
```

### Add New Components
1. Create component in `components/canary-ui/[category]/`
2. Export from `components/canary-ui/[category]/index.ts`
3. Export from `components/canary-ui/index.ts`
4. Rebuild: `npm run build:lib`

## ❓ Troubleshooting

**Components not styled?**
→ Import `@canary-ui/components/styles.css` in your app

**TypeScript errors?**
→ Make sure you have `@types/react` installed

**Build fails?**
→ Run `npm install` and try again

**Can't find module?**
→ Run `npm run build:lib` first

## 🎯 Next Steps

1. Explore all components in the showcase app
2. Build your first page using Canary UI
3. Customize with design tokens
4. Share with your team!

---

Need help? Check the full docs in `README.library.md` or `USAGE_GUIDE.md`
