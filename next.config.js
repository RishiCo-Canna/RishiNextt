/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '',
  assetPrefix: '',
  // Handle static file serving for TinaCMS
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/:path*',
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  }
}

module.exports = nextConfig