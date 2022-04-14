/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
const withImages = require("next-images");
module.exports = withImages();
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
