/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Keep this one for the hero, if you re-add a working Unsplash URL later
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // ADD THIS NEW PATTERN
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;