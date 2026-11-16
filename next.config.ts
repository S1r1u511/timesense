import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so it can be served as plain files on Cloudflare.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
