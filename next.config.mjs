/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.creazilla.com",
      },
    ],
  },
};

export default nextConfig;
