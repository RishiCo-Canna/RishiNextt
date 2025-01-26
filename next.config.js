/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  },
  // Configure for Replit environment
  async rewrites() {
    return [];
  }
};

module.exports = nextConfig;