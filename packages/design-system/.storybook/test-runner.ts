import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: '../src',
  testMatch: /.*\.stories\.spec\.(js|jsx|ts|tsx)$/,
  testIgnore: [
    /.*\.stories\.(js|jsx|ts|tsx)$/,
    /.*\.spec\.(js|jsx|ts|tsx)$/,
    /.*\.test\.(js|jsx|ts|tsx)$/,
    /.*\/node_modules\/.*/,
    /.*\/dist\/.*/,
    /.*\/styled-system\/.*/,
  ],
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run storybook -- --port 6006',
    url: 'http://localhost:6006',
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;
