import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

export default nextConfig;
