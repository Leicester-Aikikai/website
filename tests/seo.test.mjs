import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { getPages } from '../src/utils/pages.js'
import { getMetaTags, SITE_URL } from '../src/utils/seo.js'
import { images } from '../src/data/images.js'
import { blogPosts, getBlogPostUrl } from '../src/data/blog.js'
const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8')
const hasBuild = existsSync(new URL('../dist/_redirects', import.meta.url))
const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

test('every canonical HTML route has matching initial metadata and structured data in its build output', { skip: !hasBuild }, () => {
  const pages = getPages().filter(page => !page.path.endsWith('.pdf'))
  assert.equal(new Set(pages.map(page => page.path)).size, pages.length)
  assert.ok(pages.length > 20)
  for (const page of pages) {
    const html = read(page.path === '/' ? 'dist/index.html' : `dist/_pages${page.path}.html`)
    assert.equal((html.match(/<title>/g) || []).length, 1, page.path)
    assert.ok(html.includes(`<title>${escapeHtml(page.meta.title)}</title>`), page.path)
    assert.ok(html.includes(`<link rel="canonical" href="${SITE_URL}${page.path}">`), page.path)
    for (const [name,value] of Object.entries(getMetaTags(page.meta)).filter(([,value])=>value)) {
      const attribute = /^(og|article):/.test(name) ? 'property' : 'name'
      assert.ok(html.includes(`<meta ${attribute}="${name}" content="${escapeHtml(value)}">`), `${page.path}: ${name}`)
      assert.equal((html.match(new RegExp(`<meta ${attribute}="${name}"`, 'g')) || []).length,1)
    }
    const schemas = [...html.matchAll(/<script type="application\/ld\+json" data-dynamic="true">(.*?)<\/script>/g)].map(match => JSON.parse(match[1]))
    assert.equal(schemas.filter(item => item['@type'] === 'SportsActivityLocation').length,1)
    assert.equal(schemas.filter(item => item['@type'] === 'WebSite').length,1)
    assert.ok(!html.includes('https://leicesteraikikai.com/instructors"'), 'No nonexistent instructor index breadcrumb')
  }
})

test('Netlify serves specific metadata pages before its SPA fallback and preserves static files', { skip: !hasBuild }, () => {
  const rules = read('dist/_redirects').trim().split('\n').filter(line => line && !line.startsWith('#')).map(line => line.trim().replace(/\s+/g, ' '))
  assert.equal(rules.at(-1), '/* /index.html 200')
  for (const {path} of getPages().filter(page => page.path !== '/' && !page.path.endsWith('.pdf'))) {
    assert.ok(rules.includes(`${path} /_pages${path}.html 200`),path)
  }
  assert.ok(!rules.some(line => line.startsWith('/contact-form.html ')))
  assert.ok(!rules.some(line => line.startsWith('/docs/')))
  assert.ok(!existsSync(new URL('../dist/_headers',import.meta.url)), 'No noindex headers leaking through internal rewrites')
})

test('sitemap dates represent recorded article edits and include discoverable images', () => {
  const xml = read('public/sitemap.xml')
  assert.equal((xml.match(/<url>/g) || []).length, getPages().length)
  assert.equal((xml.match(/<lastmod>/g) || []).length, blogPosts.length)
  assert.ok(!xml.includes('<changefreq>'))
  assert.ok(!xml.includes('<priority>'))
  for (const post of blogPosts) assert.ok(xml.includes(`<loc>${SITE_URL}${getBlogPostUrl(post)}</loc>\n    <lastmod>`))
  assert.ok(xml.includes('<image:image>'))
})

test('responsive and sharing image references exist with reserved intrinsic sizes', () => {
  for (const image of Object.values(images)) {
    assert.ok(image.width > 0 && image.height > 0)
    assert.ok(image.socialWidth > 0 && image.socialHeight > 0)
    for (const file of [image.src,image.social,...image.srcset.split(', ').map(item=>item.split(' ')[0])]) {
      assert.ok(existsSync(new URL(`../public${file}`,import.meta.url)),file)
    }
    const widths = image.srcset.split(', ').map(item=>Number(item.split(' ')[1].slice(0,-1)))
    assert.deepEqual(widths,[...new Set(widths)].sort((a,b)=>a-b))
    assert.equal(widths.at(-1),image.width)
  }
})

test('extended LLM summary covers the same public URLs and dated content', () => {
  const content = read('public/llms-full.txt')
  for (const page of getPages()) assert.ok(content.includes(SITE_URL + page.path),page.path)
  assert.ok(content.includes('Children aged 12 and under'))
  assert.ok(content.includes('Europe/London'))
  assert.ok(!content.includes('mailto:'))
  assert.ok(!content.includes('[object Object]'))
})
