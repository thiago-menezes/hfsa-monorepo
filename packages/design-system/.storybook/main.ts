import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../src/assets'],
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const tailwindcss = await import('@tailwindcss/postcss');
    const autoprefixer = await import('autoprefixer');

    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [tailwindcss.default, autoprefixer.default],
        },
      },
    });
  },
};

export default config;
