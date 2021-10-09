import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    proxy: {
      "/": "http://localhost:3001"
    },
    host: true
  }
})