import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/canary-ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
