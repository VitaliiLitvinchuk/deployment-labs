import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/deployment-labs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
