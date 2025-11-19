import type { Config } from "tailwindcss";

export default {
  presets: [
    require("@canary-ui/components/tailwind.preset"),
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Scan the installed Canary UI library for Tailwind classes
    "../components/canary-ui/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config;
