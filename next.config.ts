import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/My-professional-Portfolio",
  assetPrefix: "/My-professional-Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;