import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  site: 'https://tomcoaching.com',
  build: {
    assets: 'assets'
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
