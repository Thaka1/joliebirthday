/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the preview URL to be used behind the Emergent proxy.
  experimental: {
    // Next.js App Router is enabled by default in 13+.
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets.mixkit.co' },
    ],
  },
  // Allow dev server behind proxies
  async headers() {
    return [];
  },
};

module.exports = nextConfig;
