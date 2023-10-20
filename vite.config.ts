import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@UI': resolve(__dirname, 'src/components/UI/index.ts'),
    },
  },
});
