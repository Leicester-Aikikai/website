import { writeFileSync } from 'node:fs'
import { getPages } from '../src/utils/pages.js'
import { getSocialImage } from '../src/utils/images.js'
import { SITE_URL } from '../src/utils/seo.js'

const escapeXml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
// Only dates recorded with the content qualify as lastmod; builds are not edits.
const pages = [...new Map(getPages().map(page => [page.path, page])).values()]
const urls = pages.map(page => {
  const image = getSocialImage(page.meta.image).src
  return `  <url>\n    <loc>${escapeXml(SITE_URL + page.path)}</loc>${page.lastmod ? `\n    <lastmod>${escapeXml(page.lastmod)}</lastmod>` : ''}${image && !page.path.endsWith('.pdf') ? `\n    <image:image><image:loc>${escapeXml(image.startsWith('/') ? SITE_URL + image : image)}</image:loc></image:image>` : ''}\n  </url>`
})
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`)
console.log(`Sitemap generated with ${pages.length} canonical URLs.`)
