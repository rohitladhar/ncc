import type { NextConfig } from "next";

const basePath = "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,

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