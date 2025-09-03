/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable styled-components support natively
  compiler: {
    styledComponents: true,
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['res.cloudinary.com'],
  },

  // Security Headers for Production
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production' 
              ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com https://plausible.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https:; connect-src 'self' https://api.oniodev.com https://res.cloudinary.com; frame-src 'none'; object-src 'self' data:;"
              : "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plausible.io https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; media-src 'self' https://res.cloudinary.com; connect-src 'self' ws: http://localhost:* https://localhost:* https://res.cloudinary.com; frame-src 'none'; object-src 'self' data:;"
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
        ],
      },
    ]
  },

  // Webpack configuration for optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Security optimizations
    config.resolve.fallback = {
      ...config.resolve.fallback,
      dns: false, 
      stream: false, 
      ioredis: false, 
      crypto: false,
      './redis/index.js': false, 
      net: false, 
      tls: false, 
      'querystring': false,
      fs: false,
    }
    
    // Use Next.js defaults for optimization/minification
    
    return config
  },
}

module.exports = nextConfig
