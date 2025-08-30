import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../src/assets'],
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const autoprefixer = await import('autoprefixer');

    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [autoprefixer.default],
        },
      },
      define: {
        global: 'globalThis',
      },
      resolve: {
        alias: {
          react: require.resolve('react'),
          'react-dom': require.resolve('react-dom'),
        },
      },
      esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'react',
      },
    });
  },
};

export default config;
