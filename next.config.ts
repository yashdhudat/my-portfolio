import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // This should improve module resolution for path aliases
    turbo: {
      resolveAlias: {
        '@/components': './src/components',
        '@/data': './src/data',
        '@/utils': './src/utils',
      }
    }
  },
  // Ensure images are properly handled
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  }
};

export default nextConfig;
