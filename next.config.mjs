/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: [
      "skartiocloud.sgp1.cdn.digitaloceanspaces.com",
      "skartiocloud.sgp1.digitaloceanspaces.com",
      "skartio.ams3.digitaloceanspaces.com",
      "images.pexels.com",
      "img.freepik.com"
    ],
  }
};

export default nextConfig;
