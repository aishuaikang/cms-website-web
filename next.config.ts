import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
    images: {
        remotePatterns: [new URL("https://dummyimage.com/**")],
    },
};

export default nextConfig;
