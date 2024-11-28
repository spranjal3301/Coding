import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true, //- Optimized JS Minification
  experimental: { //- Css Bundle Optimization
    optimizeCss: true,
  },
  images: { //- Image URL Domains
    domains: ["localhost", "cdn.magicui.design"],
  },
  async redirects() {
    return [ //- Redirects
      {
        source: "/discord",
        destination: "https://discord.gg/X4BBMBjHNf",
        permanent: true,
      },
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,  // Remove extra backticks
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
