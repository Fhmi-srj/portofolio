import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Generate static files to /out
  trailingSlash: true,   // Ensures /about/ instead of /about (better for cPanel)
  images: {
    unoptimized: true,   // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
