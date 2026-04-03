import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  ...((!isVercel && !isGithubActions) && { output: 'standalone' }),
  basePath: isGithubActions ? '/deployment-labs' : '',
  assetPrefix: isGithubActions ? '/deployment-labs/' : '',
  images: {
    unoptimized: isGithubActions,
  },
};

export default nextConfig;
