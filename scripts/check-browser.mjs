// Optional browser checks: use an existing Playwright installation; no production dependency.
// PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs CHROME_PATH=/path/to/chrome node scripts/check-browser.mjs
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { events } from '../src/data/events.js'
import { blogPosts, getBlogPostUrl } from '../src/data/blog.js'
import { getEventUrl, splitEvents } from '../src/utils/events.js'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = process.env.BASE_URL || 'http://127.0.0.1:4173'
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
const errors = []
page.on('pageerror', error => errors.push(error.message))
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
await page.clock.install({ time: new Date('2026-10-19T12:00:00Z') })
const urls = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>https:\/\/leicesteraikikai.com([^<]+)<\/loc>/g)].map(match => match[1]).filter(url => !url.endsWith('.pdf'))
const problems = []
const links = new Set()
for (const width of [320, 375, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 1000 })
  for (const path of urls) {
    await page.goto(base + path)
    await page.locator('h1').waitFor()
    await page.locator('img').evaluateAll(async images => { await Promise.all(images.map(img => { img.loading = 'eager'; return img.decode().catch(() => {}) })) })
    const result = await page.evaluate(() => {
      const body = document.documentElement
      return {
        overflow: body.scrollWidth > innerWidth + 1,
        offenders: [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(el => el.tagName + '.' + el.className),
        h1: document.querySelectorAll('h1').length,
        main: document.querySelectorAll('main').length,
        broken: [...document.images].filter(img => !img.complete || !img.naturalWidth).map(img => img.src),
        missingAlt: [...document.images].filter(img => !img.hasAttribute('alt')).map(img => img.src),
        unnamed: [...document.querySelectorAll('a, button, summary')].filter(el => !el.innerText.trim() && !el.getAttribute('aria-label') && !el.querySelector('img[alt]:not([alt=""])') && el.getAttribute('aria-hidden') !== 'true').map(el => el.outerHTML.slice(0, 150)),
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        description: document.querySelector('meta[name="description"]')?.content,
        robots: document.querySelector('meta[name="robots"]')?.content,
        schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent)),
        links: [...document.querySelectorAll('a[href^="/"]')].map(el => el.getAttribute('href'))
      }
    })
    if (result.overflow || result.h1 !== 1 || result.main !== 1 || result.broken.length || result.missingAlt.length || result.unnamed.length) problems.push({ width, path, ...result, schema: undefined, links: undefined })
    assert.equal(result.canonical, 'https://leicesteraikikai.com' + path, `Canonical ${path}`)
    assert.ok(result.description, `Description ${path}`)
    assert.ok(!result.robots.includes('noindex'), path)
    assert.ok(!JSON.stringify(result.schema).includes('AggregateRating'), path)
    assert.equal(result.schema.filter(schema => schema['@type'] === 'SportsActivityLocation').length, 1, path)
    if (width === 1440) result.links.forEach(link => links.add(link))
  }
  console.log(`Checked ${urls.length} routes at ${width}px`)
}
assert.deepEqual(problems, [])
// Check all discovered internal destinations and anchor targets on the production server.
for (const href of links) {
  if (href.endsWith('.pdf')) {
    const response = await page.request.get(base + href)
    assert.equal(response.headers()['content-type'], 'application/pdf')
    continue
  }
  await page.goto(base + href)
  assert.ok(!(await page.locator('meta[name="robots"]').getAttribute('content')).includes('noindex'), href)
  if (href.includes('#')) {
    const id = decodeURIComponent(href.split('#')[1])
    assert.equal(await page.locator(`[id="${id}"]`).count(), 1, href)
  }
}
console.log(`Checked ${links.size} internal links and anchors`)
await page.setViewportSize({ width: 375, height: 850 })
await page.goto(base + '/')
const menu = page.getByRole('button', { name: 'Menu' })
await menu.focus()
await page.keyboard.press('Enter')
assert.equal(await page.getByRole('button', { name: 'Close' }).getAttribute('aria-expanded'), 'true')
await page.keyboard.press('Escape')
assert.equal(await menu.getAttribute('aria-expanded'), 'false')
assert.ok(await menu.evaluate(el => document.activeElement === el))
await menu.click()
await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'Start Aikido', exact: true }).click()
assert.equal(new URL(page.url()).pathname, '/beginners')
assert.equal(await menu.getAttribute('aria-expanded'), 'false')
const faq = page.getByText('Do I need previous martial arts experience?', { exact: true })
await faq.focus()
await page.keyboard.press('Enter')
assert.ok(await faq.evaluate(el => el.parentElement.open))
for (const grade of ['6th', '5th', '4th', '3rd']) {
  await page.goto(`${base}/syllabus/${grade}-kyu`)
  await page.locator(`#collapse${grade}Kyu.show`).waitFor()
  assert.equal(await page.locator(`[data-bs-target="#collapse${grade}Kyu"]`).getAttribute('aria-expanded'), 'true')
}
await page.goto(`${base}/syllabus#grading-syllabus`)
const syllabusButton = page.locator('[data-bs-target="#collapse5thKyu"]')
await syllabusButton.focus()
await page.keyboard.press('Enter')
assert.equal(await syllabusButton.getAttribute('aria-expanded'), 'true')
await page.setViewportSize({ width: 1440, height: 1000 })
const upcoming = splitEvents(events, new Date('2026-10-19T12:00:00Z')).upcoming
await page.goto(base + '/events')
const upcomingTitles = await page.locator('#upcoming-events .event-card h3').allTextContents()
assert.deepEqual(upcomingTitles, upcoming.map(event => event.title))
await page.getByRole('link', { name: upcoming[0].title, exact: true }).click()
assert.equal(await page.locator('meta[property="og:type"]').getAttribute('content'), 'article')
const downloadPromise = page.waitForEvent('download')
await page.getByRole('button', { name: 'Add to calendar' }).click()
const download = await downloadPromise
const calendarPath = await download.path()
assert.match(readFileSync(calendarPath, 'utf8'), /DTSTART:20261121T120000Z/)
await page.getByRole('link', { name: 'All events' }).click()
assert.equal(await page.locator('meta[property="og:type"]').getAttribute('content'), 'website')
assert.equal(await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(node => JSON.parse(node.textContent)).filter(item => item['@type'] === 'Event').length), 0)
if (blogPosts.length) {
  await page.goto(base + getBlogPostUrl(blogPosts[0]))
  await page.getByRole('link', { name: 'Classes & Prices', exact: true }).first().click()
  assert.equal(await page.locator('meta[property="article:published_time"]').count(), 0)
}
for (const path of ['/does-not-exist', '/events/2026-11-21/wrong-slug', '/instructors/unknown', '/blog/2026-01-01/unknown']) {
  await page.goto(base + path)
  assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex, follow')
  assert.ok((await page.locator('h1').innerText()).includes('back on the mat'))
}
await page.goto(base + '/contact')
await page.getByText('Online enquiries are temporarily unavailable.', { exact: false }).waitFor()
assert.ok(await page.getByRole('button', { name: 'Send enquiry', exact: true }).isDisabled())
assert.equal(await page.locator('a[href^="mailto:"]').count(), 0)
await page.goto(base + '/')
await page.screenshot({ path: '/tmp/aikikai-home-desktop.png', fullPage: true })
await page.setViewportSize({ width: 375, height: 850 })
await page.screenshot({ path: '/tmp/aikikai-home-mobile.png', fullPage: true })
assert.deepEqual(errors, [])
console.log('PASS: responsive routes, links, images, landmarks, control names, metadata, schema, mobile keyboard menu, FAQs, syllabus, event ordering, calendar download and unavailable-form handling. No console/page errors.')
await browser.close()
