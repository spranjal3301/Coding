import { withContentCollections } from "@content-collections/next";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // your next.js config
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/installation",
        permanent: true,
      },
      {
        source: "/components/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/r/:name",
        destination: "/r/styles/default/:name.json",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
 
// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);