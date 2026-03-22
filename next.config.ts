import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "portfolio";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
