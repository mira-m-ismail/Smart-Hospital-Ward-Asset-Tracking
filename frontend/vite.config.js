import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: join(tmpdir(), `smart-hospital-vite-${process.pid}`),
})
