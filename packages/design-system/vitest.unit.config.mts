import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

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
    pool: 'vmThreads',
    threads: false,
    environment: 'jsdom',
    setupFiles: ['.vitest-setup.ts'],
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'coverage/',
        '**/*.d.ts',
        '**/stories.{ts,tsx,mdx}',
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
  },
});
