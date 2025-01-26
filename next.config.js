/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '',
  assetPrefix: '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  }
}

module.exports = nextConfig