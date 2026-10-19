import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'node:fs'
import { getPages } from './src/utils/pages.js'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), {
    name: 'preview-route-metadata',
    configurePreviewServer(server) {
      // Mirror the generated Netlify rewrites when checking a production build locally.
      const paths = new Set(getPages().map(page => page.path).filter(path => path !== '/' && !path.endsWith('.pdf')))
      server.middlewares.use((req, res, next) => {
        const path = new URL(req.url, 'http://localhost').pathname.replace(/\/+$/, '')
        if (!paths.has(path) || !['GET', 'HEAD'].includes(req.method)) return next()
        try {
          const html = readFileSync(new URL(`./dist/_pages${path}.html`, import.meta.url))
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(req.method === 'HEAD' ? undefined : html)
        } catch { next() }
      })
    }
  }],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})

