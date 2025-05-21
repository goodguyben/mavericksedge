
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '629a8f5e-f04c-4437-a224-1b702aff5485-00-2mntk5k0605k0.picard.replit.dev',
      '.replit.dev', // Allow all replit.dev subdomains
      'localhost'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
