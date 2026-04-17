/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Vercel automatically converts to WebP/AVIF and serves the best format.
    // unoptimized was previously set to true — removed so optimization is active.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
