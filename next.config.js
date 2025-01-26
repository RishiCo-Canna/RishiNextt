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
  // Required for Replit - ensures proper host binding
  hostname: '0.0.0.0',
  port: 3000
};

module.exports = nextConfig;