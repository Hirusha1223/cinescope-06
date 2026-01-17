import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://i.imgur.com/yXOvdOSs.jpg")],
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://i.imgur.com/MK3eW3Am.jpg")],
  },
};

export default nextConfig;
