/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
    loader: 'custom',
    loaderFile: './lib/CloudflareLoader.js',
  },
};

export default nextConfig;
