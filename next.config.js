/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: process.env.API_PROTOCOL,
        hostname: process.env.API_DOMAIN,
      },
    ],
  },
};

module.exports = nextConfig;
