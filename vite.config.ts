import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

const env = loadEnv('dev', process.cwd());

// expose .env as process.env instead of import.meta since jest does not import meta yet
const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
  return {
    ...prev,
    ['process.env.' + key]: `"${val}"`,
  };
}, {});

export default defineConfig({
  plugins: [svgr(), react()],
  define: envWithProcessPrefix,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@UI': resolve(__dirname, 'src/components/UI/index.ts'),
    },
  },
});
