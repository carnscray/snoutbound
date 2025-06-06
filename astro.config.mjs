import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import astroExpressiveCode from 'astro-expressive-code';
import pagefind from "astro-pagefind";
import staticAdapter from '@astrojs/adapter-static'; // ✅ Add this

const expressiveCode = astroExpressiveCode({
  themes: ['github-dark'],
  styleOverrides: {
    borderRadius: '0.5rem',
    frames: {
      shadowColor: '#124',
    },
  },
});

export default defineConfig({
  site: 'https://stargarden.pages.dev',
  adapter: staticAdapter(), // ✅ Add this line
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), react(), pagefind(), expressiveCode]
});
