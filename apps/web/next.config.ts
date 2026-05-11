import type { NextConfig } from "next";
import { config as loadDotenv } from "dotenv";
import path from "path";

// Load root .env when running outside of turbo (e.g. `next dev` directly)
loadDotenv({ path: path.resolve(__dirname, "../../.env"), override: false });

const config: NextConfig = {
  transpilePackages: ["@portfolio/ui", "@portfolio/sanity"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default config;
