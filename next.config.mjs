/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.freepik.com"
      },
      {
        hostname: "www.invensislearning.com",
      },
      {
        hostname: "stagingalpha.invensislearning.com",
      },
      {
        hostname: "alpha.invensislearning.com",
      },
      {
        hostname: "stagingbeta.invensislearning.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
