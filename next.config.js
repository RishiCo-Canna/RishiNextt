/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  },
  // Ensure the app works with Replit's proxy
  async rewrites() {
    return [];
  },
  // Configure for Replit environment
  webpack: (config) => {
    // Add any custom webpack configuration here
    return config;
  },
  // Ensure we're binding to all network interfaces
  experimental: {
    serverListenSocket: true
  }
};

module.exports = nextConfig;