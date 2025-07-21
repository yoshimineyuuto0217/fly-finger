// vite.config.ts
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'; 

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.tsx',
      ],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      Pages: path.resolve(__dirname, 'resources/js/Pages'),
      Components: path.resolve(__dirname, 'resources/js/Components'), // 例
    },
  },
  server: {
    port: 5177,
    cors: true,
    hmr: {
      host: 'localhost',
    },
  },

});
