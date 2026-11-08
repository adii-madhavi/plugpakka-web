import type { NextConfig } from "next";

// Static site: `npm run build` writes plain HTML/CSS/JS to out/, which is uploaded to GoDaddy's public_html.
const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
