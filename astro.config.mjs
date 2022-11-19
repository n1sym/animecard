import { defineConfig } from 'astro/config';
//import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: 'server',
  adapter: vercel()//cloudflare()
});