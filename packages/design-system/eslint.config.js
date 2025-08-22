import { config as reactConfig } from '@hfsa/eslint-config/react';

export default [
  ...reactConfig,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*.d.ts',
      'coverage/**',
      'storybook-static/**',
    ],
  },
];
