import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.21st.dev",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/your introduction",
        destination: "/your-introduction",
      },
      {
        source: "/courses/:course/your introduction",
        destination: "/courses/:course/your-introduction",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/mofu",
        destination: "/your-introduction",
        permanent: true,
      },
      {
        source: "/courses/:course/mofu",
        destination: "/courses/:course/your-introduction",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
