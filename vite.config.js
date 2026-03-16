import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Raise the inline limit so small assets get inlined instead of extra requests
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached independently, rarely changes
          'react-vendor': ['react', 'react-dom'],
          // Framer Motion is large (~130KB gz); isolated chunk improves caching
          'framer-motion': ['framer-motion'],
          // Lucide icon tree is large when many icons are used
          'lucide-react': ['lucide-react'],
        },
      },
    },
  },
})
