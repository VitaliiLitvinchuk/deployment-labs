import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/deployment-labs' : '',
  assetPrefix: isGithubActions ? '/deployment-labs/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
