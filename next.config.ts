import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Node.js process on this machine can't reach Unsplash CDN, so let the
    // browser fetch images directly. Remove when migrating to a hosted CDN.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
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
};

export default nextConfig;
