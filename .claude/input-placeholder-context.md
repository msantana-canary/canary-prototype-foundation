# Input Placeholder Visibility Issue - Context Document

## Problem Statement

The placeholder text is not visible in the regular (boxed) input variants:
- CanaryInputPassword
- CanaryInputSearch
- CanaryInputCreditCard

Despite placeholder props being passed correctly (e.g., `placeholder="Enter your password"`), the inputs are rendering with just icons and no visible placeholder text.

## Figma References

### Password Input Default State
- URL: https://www.figma.com/design/1E2JSWsD6VPGhJtFakmH7Q/%F0%9F%A7%A9-Component-Library?node-id=7076-11281&t=TxRZgjZxPkxPdbr3-11
- Expected: Shows "Password" as visible placeholder text inside the input field
- Current: Empty input with just the eye icon visible

### Search Input Default State
- URL: https://www.figma.com/design/1E2JSWsD6VPGhJtFakmH7Q/%F0%9F%A7%A9-Component-Library?node-id=7076-11308&t=TxRZgjZxPkxPdbr3-11
- Expected: Shows "Text" as visible placeholder text inside the input field
- Current: Empty input with just the search icon visible

## Demo Page Usage Examples

### CanaryInputPassword (app/page.tsx:681-684)
```tsx
<CanaryInputPassword
  label="Password"
  placeholder="Enter your password"
/>
```

### CanaryInputSearch (app/page.tsx:720-723)
```tsx
<CanaryInputSearch
  label="Search"
  placeholder="Search for anything..."
/>
```

### CanaryInputCreditCard (app/page.tsx:758-761)
```tsx
<CanaryInputCreditCard
  label="Credit Card Number"
  placeholder="Enter credit card number"
  helperText="We accept Visa, Mastercard, American Express, and Discover"
/>
```

## What We've Tried So Far

### Attempt 1: Dynamic Tailwind Classes with Template Literals
**Problem**: Used template literals like `` `border-[${colors.error}]` `` which don't work with Tailwind's JIT compiler.

**Fix Applied**: Switched to inline styles for colors.

### Attempt 2: Added Placeholder Tailwind Classes
```tsx
"placeholder:text-gray-500 placeholder:opacity-100"
```
**Result**: Still not visible.

### Attempt 3: Added Text Color to Inline Styles
```tsx
const inputStyles = {
  borderColor: error ? colors.error : (isDisabled ? colors.black1 : colors.black3),
  backgroundColor: isDisabled ? colors.black6 : (isReadonly ? colors.black8 : 'white'),
  color: colors.black1, // Ensure text is visible
  // ... other styles
}
```
**Result**: Still not visible.

## Current Component Structure

### CanaryInputPassword.tsx
```tsx
"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

// Component has:
// 1. inputClasses with "placeholder:text-gray-500 placeholder:opacity-100"
// 2. inputStyles object with color: colors.black1
// 3. Input element: <input style={inputStyles} className={inputClasses} {...inputProps} />
```

### CanaryInputSearch.tsx
```tsx
// Similar structure to CanaryInputPassword
// Has search icon positioned absolutely: left-2 with pointer-events-none
// Input has left padding: pl-[40px] to accommodate icon
```

### CanaryInputCreditCard.tsx
```tsx
// Similar structure
// Has credit card icon positioned absolutely: left-2 with pointer-events-none
// Input has left padding: pl-[40px] to accommodate icon
```

## Design Token Colors

From `components/canary-ui/design-tokens.ts`:
```typescript
export const colors = {
  black1: "#000000", // $color-black-1
  black2: "#333333", // $color-black-2
  black3: "#666666", // $color-black-3
  black4: "#999999", // $color-black-4
  // ... etc
} as const;
```

## Key Issues to Investigate

1. **Placeholder Pseudo-Element Styling**: Tailwind's `placeholder:` modifier might not work when combined with inline styles
2. **Stacking Context**: User mentioned "z-index issue" similar to what we had with underline inputs
3. **Icon Positioning**: Absolutely positioned icons might be covering the placeholder text
4. **CSS Specificity**: Inline styles might be preventing Tailwind placeholder classes from applying
5. **Global CSS Reset**: There might be a global CSS rule affecting placeholders

## Successful Pattern from Underline Inputs

The underline variants (CanaryInputUnderline, CanaryInputPasswordUnderline) work correctly because they use a different pattern:
- Label conditionally renders above the input
- When not focused/filled, the label text becomes the placeholder
- Uses `placeholder={!showLabelAbove ? (label as string) : inputProps.placeholder}`

## Potential Solutions to Try

### Option 1: Use CSS Module or Styled Component
Create a CSS module or use styled-components to properly style the `::placeholder` pseudo-element.

### Option 2: CSS Custom Properties
```tsx
const inputStyles = {
  '--placeholder-color': colors.black3,
  // Then in CSS: input::placeholder { color: var(--placeholder-color); }
}
```

### Option 3: Global CSS
Add to `app/globals.css`:
```css
input::placeholder {
  color: #666666;
  opacity: 1;
}
```

### Option 4: Wrapper with CSS
Wrap input in a div with a unique class and add specific CSS rules.

### Option 5: Check Browser DevTools
Inspect the actual input element in browser to see:
- What computed styles are applied to `::placeholder`
- Whether the placeholder attribute is present
- Whether any conflicting styles exist

## Files Modified in This Session

1. `components/canary-ui/design-tokens.ts` - Updated color token names to match Figma
2. `app/page.tsx` - Updated color token display names
3. `components/canary-ui/forms/CanaryInput.tsx` - Added inline styles for colors
4. `components/canary-ui/forms/CanaryInputPassword.tsx` - Added inline styles + placeholder classes
5. `components/canary-ui/forms/CanaryInputSearch.tsx` - Added inline styles + placeholder classes
6. `components/canary-ui/forms/CanaryInputCreditCard.tsx` - Added inline styles + placeholder classes
7. `components/canary-ui/forms/CanaryInputUnderline.tsx` - Fixed floating label pattern (earlier)
8. `components/canary-ui/forms/CanaryInputPasswordUnderline.tsx` - Fixed floating label pattern (earlier)
9. Underline variants for Search and CreditCard - Updated with design tokens

## Environment

- Next.js 16.0.1 (Turbopack)
- React with TypeScript
- Tailwind CSS (JIT mode)
- Working directory: `/Users/miguelsantana/Documents/Claude-Projects/canary-prototype-foundation`

## What to Do Next

1. **Inspect in Browser DevTools**: Check the actual rendered input to see computed styles
2. **Try Global CSS Approach**: Add placeholder styles to `app/globals.css`
3. **Check for CSS Conflicts**: Look for any global resets or conflicting styles
4. **Test Without Inline Styles**: Temporarily remove inline styles to see if Tailwind classes work alone
5. **Check Icon z-index**: Verify icons aren't covering placeholder text
6. **Compare with Working Components**: Check how other inputs (like CanaryInput with no icon) handle placeholders

## Important Notes

- The placeholder prop IS being passed correctly from the demo page
- The input element IS receiving the placeholder attribute via `{...inputProps}`
- The Tailwind classes ARE being applied to the className
- The issue is specifically with VISIBILITY, not with the attribute being missing
- User mentioned this is similar to a "z-index issue" from earlier work
