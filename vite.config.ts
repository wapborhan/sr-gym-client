import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
port:3000
  },

  resolve:{
    alias:[{find:"@",replacement:path.resolve(__dirname,"src")}]
  },
  plugins: [react()],
})
