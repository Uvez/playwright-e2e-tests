import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: "https://automationintesting.online/",
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
    //screenshot: 'only-on-failure',
   // video: 'retain-on-failure',
   // trace: 'on-first-retry',
  },
});
