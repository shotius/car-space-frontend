import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';
import checker from 'vite-plugin-checker';
import { dependencies } from './package.json';

// this is for vendor chunk spliting
function renderChunks(deps) {
  var chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [reactRefresh(), tsconfigPaths(), checker({ typescript: true })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      },
    },
    host: true,
  },
  // during build vendor chunk will be split
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
