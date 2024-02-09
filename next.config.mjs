/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.gamezop.com",
      },
      {
        protocol: "https",
        hostname: "youtu.be",
      },
    ],
  },
};

export default nextConfig;
