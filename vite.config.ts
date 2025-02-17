import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@/styles/variables.scss";',
      },
    },
    postcss: './postcss.config.js',
  },
})
