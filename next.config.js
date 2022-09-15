/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.collectingcars.com'],
  },
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: '/:path*',
  //         destination: `https://collectingcars.com`,
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;
