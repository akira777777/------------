import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable type checking for the build
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["http://localhost:3000"],
    },
  },
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
