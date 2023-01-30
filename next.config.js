/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: '/:path*',
      destination: '/api/cra',
    },
  ],
}

module.exports = nextConfig
