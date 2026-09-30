import type { NextConfig } from "next";

const basePath = "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  output: "export",
  images: {
    unoptimized: true,
  },

  devIndicators: false,
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;