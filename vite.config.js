import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    proxy: {
      "/api": "http://192.162.100.10:3001"
    },
    host:true
  }
})