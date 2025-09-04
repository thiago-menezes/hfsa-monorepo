import type { StorybookConfig } from '@storybook/react-vite';

import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure CSS Modules support
    if (config.css) {
      config.css.modules = {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]--[hash:base64:5]',
      };
    } else {
      config.css = {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[name]__[local]--[hash:base64:5]',
        },
      };
    }
    return config;
  },
};
export default config;
