import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chintvm.edu.in',
      },
      {
        protocol: 'http',
        hostname: 'chintvm.edu.in',
      }
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
