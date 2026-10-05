import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Avisa quando chunks forem > 500kB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Separa vue/vue-router em chunk próprio para melhor cache do browser
        manualChunks(id) {
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
