// Generate route-specific HTML heads for crawlers that do not execute JavaScript.
// Vue still renders page bodies in the browser; this is not full SSR.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { getPages } from '../src/utils/pages.js'
import { getMetaTags, getOrganizationSchema, getWebSiteSchema } from '../src/utils/seo.js'

export const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
export function renderHead(page) {
  const tags = Object.entries(getMetaTags(page.meta)).filter(([, value]) => value).map(([key, value]) => `<meta ${/^(og|article):/.test(key) ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}">`)
  const schemas = [getOrganizationSchema(), getWebSiteSchema(), ...page.schemas]
  return [`<title>${escapeHtml(page.meta.title)}</title>`, ...tags, `<link rel="canonical" href="${escapeHtml(page.meta.url)}">`, ...schemas.map(schema => `<script type="application/ld+json" data-dynamic="true">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`)].join('\n    ')
}

const template = readFileSync('dist/index.html', 'utf8').replace(/\s*<script type="application\/ld\+json" data-dynamic="true">[\s\S]*?<\/script>/g, '').replace(/\s*<title>[\s\S]*?<\/title>/g, '').replace(/\s*<meta (?:name="(?:title|description|keywords|robots|author|twitter:[^"]*)"|property="(?:og|article):[^"]*")[^>]*>/g, '').replace(/\s*<link rel="canonical"[^>]*>/g, '')
const rules = []
for (const page of getPages().filter(page => !page.path.endsWith('.pdf'))) {
  const output = page.path === '/' ? '/index.html' : `/_pages${page.path}.html`
  mkdirSync(dirname(`dist${output}`), { recursive: true })
  writeFileSync(`dist${output}`, template.replace('</head>', `    ${renderHead(page)}\n  </head>`))
  if (page.path !== '/') rules.push(`${page.path} ${output} 200`)
}
writeFileSync('dist/_redirects', rules.join('\n') + '\n' + readFileSync('public/_redirects', 'utf8'))
console.log(`Generated initial HTML metadata for ${rules.length + 1} routes.`)
