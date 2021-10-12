import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from "@vitejs/plugin-react-refresh";
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), checker({ typescript: true })],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    },
    host:true,
  }
})