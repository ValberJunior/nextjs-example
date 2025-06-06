import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "nextjs-example";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
