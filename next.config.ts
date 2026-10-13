import type { NextConfig } from "next";

// Static export so the site can be hosted for free on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
