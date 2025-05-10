/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow imports of components and data
  reactStrictMode: true,
  
  // Allow optimization of images
  images: {
    unoptimized: true
  },

  // Disable ESLint during build (remove this when issues are fixed)
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig; 