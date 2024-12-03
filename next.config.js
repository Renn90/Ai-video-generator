import path from 'path';

const currentDir = new URL('.', import.meta.url).pathname;

const nextConfig = {
  webpack(config) {
    // Add alias for "@" to resolve your project path
    config.resolve.alias['@'] = path.resolve(currentDir);

    return config;
  },
};

export default nextConfig;
