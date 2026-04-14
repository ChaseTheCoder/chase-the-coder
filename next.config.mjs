/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/react-fontawesome',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-solid-svg-icons',
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
