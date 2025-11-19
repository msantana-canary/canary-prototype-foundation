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
  treeshake: true,
  minify: false,
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
