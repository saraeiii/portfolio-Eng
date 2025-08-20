/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mode export statique
   images: {
    unoptimized: true, 
  },
  basePath: '/portfolio-Eng', 
  assetPrefix: '/portfolio-Eng/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
