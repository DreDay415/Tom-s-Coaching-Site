import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true }
  }),
  site: 'https://tomcoaching.com',
  vite: {
    define: {
      'process.env.FOLK_API_KEY': JSON.stringify(process.env.FOLK_API_KEY),
      'process.env.GOOGLE_CALENDAR_API_KEY': JSON.stringify(process.env.GOOGLE_CALENDAR_API_KEY),
      'process.env.CALCOM_API_KEY': JSON.stringify(process.env.CALCOM_API_KEY),
    }
  }
});
