import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-hosting.com"], // If hosting images externally
  },
};

export default nextConfig;
