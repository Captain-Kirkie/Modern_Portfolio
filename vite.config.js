import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages - repo: Kirk_Hietpas_Portfolio
  base: '/Kirk_Hietpas_Portfolio/',
})
