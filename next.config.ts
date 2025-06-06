import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const safeBasePath = basePath && basePath.startsWith("/") ? basePath : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: safeBasePath,
  assetPrefix: safeBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
};

export default nextConfig;
