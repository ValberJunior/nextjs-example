import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const safeBasePath = rawBasePath.startsWith("/")
  ? rawBasePath
  : `/${rawBasePath}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath: safeBasePath,
  assetPrefix: safeBasePath + "/",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: safeBasePath,
  },
};

export default nextConfig;
