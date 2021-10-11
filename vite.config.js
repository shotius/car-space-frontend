import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    },
    host:true,
  }
})