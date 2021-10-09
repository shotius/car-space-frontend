import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    },
    host:true
  }
})