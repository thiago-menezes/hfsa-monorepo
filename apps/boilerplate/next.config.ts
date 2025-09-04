import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  reactStrictMode: true,
  transpilePackages: ['@hfsa/design-system'],
};

export default nextConfig;
