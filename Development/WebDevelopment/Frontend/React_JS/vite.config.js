import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':"http://localhost:3000",//-backServer without CORS  fetch('/api') ---> fetch('http://localhost:3000/')
    },
    host: '0.0.0.0',//?any can access the frontend server
    port: 5173,
  },
  plugins: [react()],
})
