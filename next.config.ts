import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.drhittich.com",
      },
    ],
  },
};

export default nextConfig;
