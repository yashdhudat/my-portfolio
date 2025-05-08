/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow imports of components and data
  reactStrictMode: true,
  swcMinify: true,
  
  // Allow optimization of images
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 