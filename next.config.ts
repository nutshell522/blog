import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = withContentlayer({
  reactStrictMode: true, // Enable React strict mode
  experimental: {
    reactCompiler: true, // Enable the new React compiler
    turbo: {},
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
});

export default nextConfig;
