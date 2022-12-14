/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgs.xkcd.com']
  },
  swcMinify: true
}

module.exports = nextConfig
