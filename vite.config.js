import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';
import checker from 'vite-plugin-checker';
import { dependencies } from './package.json';

console.log(dependencies);
function renderChunks(deps) {
  var chunks = {};
  Object.keys(deps).forEach((key) => {
    if (
      [
        'react',
        'react-router-dom',
        'react-dom',
        '@testing-library/jest-dom',
        '@testing-library/react',
        '@testing-library/user-event',
        '@types/node',
        '@types/react',
        '@types/react-dom',
        '@types/react-swipe'
      ].includes(key)
    )
      return;
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
