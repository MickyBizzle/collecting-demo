/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
