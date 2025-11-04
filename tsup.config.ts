import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "components/canary-ui/index.ts",
    styles: "components/canary-ui/styles.css",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  minify: false,
  outDir: "dist",
  loader: {
    ".css": "copy",
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
