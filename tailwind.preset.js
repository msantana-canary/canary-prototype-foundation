/**
 * Canary UI Tailwind Preset
 *
 * Import this preset in your Tailwind configuration to ensure
 * Canary UI components render correctly.
 *
 * Usage in your tailwind.config.js:
 *
 * module.exports = {
 *   presets: [require('@canary-ui/components/tailwind.preset')],
 *   content: [
 *     './app/**\/*.{js,ts,jsx,tsx}',
 *     './node_modules/@canary-ui/components/dist/**\/*.{js,mjs}',
 *   ],
 *   // ... your customizations
 * }
 */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Canary UI color palette
        // These match the design tokens in design-tokens.ts
        canary: {
          blue: {
            dark1: '#2858c4',
            dark2: '#1e429a',
            light1: '#bdd4f3',
            light2: '#e3edfb',
          },
          pink: {
            1: '#E40046',
            2: '#fce6ed',
          },
          gray: {
            1: '#000000',
            2: '#666666',
            3: '#E5E5E5',
            4: '#F5F5F5',
          },
        },
      },
      keyframes: {
        'slide-in': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
};
