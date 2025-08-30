import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { defineConfig } from 'vitest/config';

const dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: resolve(dirname, '.storybook'),
      storybookScript: 'npm run storybook',
      storybookUrl: 'http://localhost:6006',
    }),
  ],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
    environment: 'happy-dom',
  },
});
