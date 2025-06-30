/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
    ],
  },
  env: {
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
  },
}

module.exports = nextConfig
