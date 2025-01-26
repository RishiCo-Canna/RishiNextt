/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_TELEMETRY_DISABLED: '1'
  },
  // Ensure the app works with Replit's proxy
  async rewrites() {
    return [];
  }
};

export default nextConfig;