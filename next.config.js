/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  }
}

module.exports = nextConfig