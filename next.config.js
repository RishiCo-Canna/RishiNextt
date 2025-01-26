/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Configure host and port for Replit environment
  async rewrites() {
    return [];
  },
  // Ensure Next.js is properly configured for Replit
  webpack: (config, { isServer }) => {
    return config;
  },
  // Disable telemetry for Replit environment
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  }
};

module.exports = nextConfig;