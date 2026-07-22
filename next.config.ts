import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: isGithubActions ? "/BTV-System-Design" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
