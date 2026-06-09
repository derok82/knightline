import type { NextConfig } from "next";
import path from "node:path";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/knightline" : undefined,
  assetPrefix: isGithubPages ? "/knightline/" : undefined,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
