import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    allowedDevOrigins: ['http://172.24.34.245:3000'], 
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production builds
  },
};

export default nextConfig;
