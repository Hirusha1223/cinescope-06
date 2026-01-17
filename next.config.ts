import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**", // මේකෙන් අදහස් වෙන්නේ imgur එකේ ඕනෑම image එකක් allow කරනවා කියන එකයි
      },
    ],
  },
};

export default nextConfig;
