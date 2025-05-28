import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, options) {
    return config;
  },
};

export default nextConfig;
