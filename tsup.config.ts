import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "components/canary-ui/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false, // Don't clean dist since CSS is built separately
  external: ["react", "react-dom"],
  treeshake: false, // Disable treeshaking to preserve "use client"
  minify: false,
  outDir: "dist",
  banner: {
    js: '"use client";',
  },
});
