import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  optimizeDeps: {
    include: ['@testing-library/react'],
  },
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['.vitest-setup.ts'],
    globals: true,
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'coverage/',
        '**/*.d.ts',
        '**/*stories.{ts,tsx}',
        '**/*.config.{js,ts,mjs,mts}',
        '**/types.ts',
      ],
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    projects: [
      // Regular unit tests
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['src/**/.spec.ts', 'src/**/.spec.tsx'],
          exclude: [
            'src/**/.integration.spec.ts',
            'src/**/.integration.spec.tsx',
          ],
        },
      },
      // Integration tests with Prism mock server
      {
        extends: true,
        test: {
          name: 'integration',
          exclude: ['src/**/.spec.ts', 'src/**/.spec.tsx'],
          include: [
            'src/**/.integration.spec.ts',
            'src/**/.integration.spec.tsx',
          ],
          globalSetup: ['vitest.integration.setup.ts'],
        },
      },
    ],
  },
});
