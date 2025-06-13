import { defineConfig } from 'astro/config';

// Update these values for your GitHub Pages setup
export default defineConfig({
  output: 'static',
  site: 'https://pinion.build',
  base: '/',
  // For user/organization sites: https://username.github.io
  // site: 'https://username.github.io',
  // base: '/',
  
  // For project sites: https://username.github.io/repository-name
  // site: 'https://username.github.io',
  // base: '/repository-name/',
});
