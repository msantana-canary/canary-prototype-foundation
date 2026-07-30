import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@canary-ui/components'],
  // The dev badge sits over the bottom-left of the viewport, which is exactly
  // where the app shell's account footer lives.
  devIndicators: false,
};

export default nextConfig;
