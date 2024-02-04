/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.gamezop.com",
      },
    ],
  },
};

export default nextConfig;
