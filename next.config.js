/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'images.ctfassets.net',
      'downloads.ctfassets.net',
    ],
  },
};

module.exports = nextConfig;
