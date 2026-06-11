/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/interview/:slug",
        destination: "/deep-dives/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
