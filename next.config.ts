
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aupuuovakgvivgchryri.supabase.co",
      },
    ],
  },
};

export default nextConfig;