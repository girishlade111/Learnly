import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (demo /api route removed for export compatibility)
  output: "export",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
