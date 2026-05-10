import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://job-search-tracker-production-c3c9.up.railway.app/api/:path*',
      },
      {
        source: '/job-search-tracker',
        destination: 'https://job-search-tracker-delta.vercel.app/job-search-tracker',
      },
      {
        source: '/job-search-tracker/:path*',
        destination: 'https://job-search-tracker-delta.vercel.app/job-search-tracker/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
