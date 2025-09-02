import { nextJsConfig } from '@hfsa/eslint-config/next';

export default [
  ...nextJsConfig,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      '**/*.d.ts',
      'public/**',
      '.env*',
      'coverage/**',
    ],
  },
];

