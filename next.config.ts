import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // optional: future-safe config
    // allowedDevOrigins: ['http://localhost:3000']
  },
};

export default nextConfig;

