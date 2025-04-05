/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc',
      },
    ],
  },
};

const withPWA = require( 'next-pwa' )( {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
} );

module.exports = withPWA( {
  ...nextConfig,
} );