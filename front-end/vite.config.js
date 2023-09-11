import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
        "/api":{
            ws:true,
            changeOrigin:true,
            secure:false,
            target:"https://www.imdb.com",
            rewrite: (path) => path.replace(/^\/api/, ""),
        }
    }
  }
})
