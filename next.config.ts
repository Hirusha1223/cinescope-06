/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**", // imgur එකේ ඕනෑම image එකක් allow කරයි
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**", // Amazon media වල ඕනෑම image එකක් allow කරයි
      },
    ],
  },
};

export default nextConfig;
