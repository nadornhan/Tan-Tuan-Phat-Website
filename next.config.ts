import type { NextConfig } from "next";

// Static hosting for the current catalog. Remove output: 'export' when adding a server/payment backend.
const nextConfig: NextConfig = { output: "export", trailingSlash: true };
export default nextConfig;
