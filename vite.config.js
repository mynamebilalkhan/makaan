import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/makaan/",
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: {
      '/api': {
        target: 'https://my-json-server.typicode.com/mynamebilalkhan/fake-json-api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
