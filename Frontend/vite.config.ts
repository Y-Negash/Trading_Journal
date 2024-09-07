import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Force polling to detect file changes
    },
    hmr: {
      protocol: 'ws', // WebSocket protocol for HMR
    },
  },
})
