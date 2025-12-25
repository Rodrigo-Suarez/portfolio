import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Requerido para exportación estática
  },
};

export default nextConfig;
