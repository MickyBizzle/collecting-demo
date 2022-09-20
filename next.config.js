/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.collectingcars.com']
  },

  //Sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }

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
