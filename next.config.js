/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  distDir: "dist",
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'graph.facebook.com',
        pathname: '/**/picture'
      },
      {
        protocol: "https",
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/**'
      }
    ]
  }
  
}

module.exports = nextConfig
