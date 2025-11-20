#!/usr/bin/env node

/**
 * Generate sitemap.xml for Leicester Aikikai website
 */

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://leicesteraikikai.com'
const OUTPUT_PATH = resolve(__dirname, '../public/sitemap.xml')

// Define routes with priority and change frequency
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/events', priority: '0.9', changefreq: 'weekly' },
  { path: '/syllabus', priority: '0.8', changefreq: 'monthly' },
  { path: '/syllabus/6th-kyu', priority: '0.7', changefreq: 'monthly' },
  { path: '/syllabus/5th-kyu', priority: '0.7', changefreq: 'monthly' },
  { path: '/syllabus/4th-kyu', priority: '0.7', changefreq: 'monthly' },
  { path: '/syllabus/3rd-kyu', priority: '0.7', changefreq: 'monthly' }
]

// Get current date in ISO format (YYYY-MM-DD)
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0]
}

// Generate sitemap XML
const generateSitemap = () => {
  const lastmod = getCurrentDate()

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  routes.forEach(route => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${SITE_URL}${route.path}</loc>\n`
    sitemap += `    <lastmod>${lastmod}</lastmod>\n`
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
    sitemap += `    <priority>${route.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>\n'

  return sitemap
}

// Write sitemap to file
try {
  const sitemapXml = generateSitemap()
  writeFileSync(OUTPUT_PATH, sitemapXml, 'utf8')
  console.log('✅ Sitemap generated successfully:', OUTPUT_PATH)
  console.log(`📍 ${routes.length} URLs included in sitemap`)
} catch (error) {
  console.error('❌ Error generating sitemap:', error)
  process.exit(1)
}

