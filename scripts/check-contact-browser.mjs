// Uses the same optional Playwright/Chrome configuration as check-browser.mjs.
// Responses are intercepted locally. No enquiry is sent to a real service.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = process.env.BASE_URL || 'http://127.0.0.1:4173'
const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const page = await browser.newPage({ reducedMotion: 'reduce' })
const errors = []
page.on('pageerror', error => errors.push(error.message))
await page.clock.install({ time: new Date('2026-10-19T12:00:00Z') })
const source = readFileSync('public/contact-form.html', 'utf8')
const registered = source.replace('data-netlify="true"', '').replace('netlify-honeypot="bot-field"', '').replace('<input name="bot-field"', '<input type="hidden" name="form-name" value="first-class-enquiry"><input name="bot-field"')
let mode = 'unavailable'
let posts = []
let completeRequest
await page.route('**/contact-form.html', async route => {
  const request = route.request()
  if (request.method() === 'GET') {
    return route.fulfill({ status: 200, contentType: 'text/html', body: mode === 'unavailable' ? source : registered })
  }
  posts.push(new URLSearchParams(request.postData()))
  if (mode === 'network-error') return route.abort('failed')
  if (mode === 'server-error') return route.fulfill({ status: 500, body: 'Unavailable' })
  if (mode === 'static-fallback') return route.fulfill({ status: 200, contentType: 'text/html', body: registered })
  if (mode === 'pending') await new Promise(resolve => { completeRequest = resolve })
  return route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>Thank you</body></html>' })
})
async function load() {
  await page.goto(base + '/contact')
  await page.locator('form[name="first-class-enquiry"]').waitFor()
}
async function ready() {
  await load()
  await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled)
}
async function fill() {
  await page.getByLabel('Name (required)', { exact: true }).fill('Local Test')
  await page.getByLabel('Email address (required)', { exact: true }).fill('test@example.com')
  await page.getByLabel('Message (optional)', { exact: true }).fill('A locally intercepted test.')
}
const send = () => page.getByRole('button', { name: 'Send enquiry', exact: true })
await load()
await page.getByText('Online enquiries are temporarily unavailable.', { exact: false }).waitFor()
assert.ok(await send().isDisabled())
assert.equal(posts.length, 0)
assert.equal(await page.locator('a[href^="mailto:"]').count(), 0)
for (const width of [320, 375, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 1000 })
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px`)
}
mode = 'pending'
await ready()
await send().click()
assert.equal(posts.length, 0, 'native validation blocks empty required fields')
await fill()
await page.getByLabel('Preferred Friday (optional)', { exact: true }).fill('2026-11-05')
assert.ok(await page.locator('#contact-friday').evaluate(input => !input.checkValidity()))
await send().click()
assert.equal(posts.length, 0)
await page.getByLabel('Preferred Friday (optional)', { exact: true }).fill('2026-11-06')
await send().click()
await page.getByRole('button', { name: 'Sending…' }).waitFor()
assert.equal(posts.length, 1)
assert.ok(await page.getByRole('button', { name: 'Sending…' }).isDisabled())
assert.equal(await page.getByText('Thank you — your enquiry has been submitted.', { exact: true }).count(), 0)
assert.equal(posts[0].get('bot-field'), '')
assert.equal(posts[0].get('form-name'), 'first-class-enquiry')
assert.equal(posts[0].get('preferred-friday'), '2026-11-06')
completeRequest()
await page.getByText('Thank you — your enquiry has been submitted.', { exact: true }).waitFor()
assert.equal(await page.locator('form').count(), 0)
assert.ok(await page.locator('.form-success').evaluate(el => document.activeElement === el))
for (mode of ['server-error', 'network-error', 'static-fallback']) {
  await ready()
  await fill()
  await send().click()
  await page.locator('[role="alert"]').waitFor()
  assert.equal(await page.getByLabel('Name (required)', { exact: true }).inputValue(), 'Local Test')
  assert.equal(await page.getByLabel('Message (optional)', { exact: true }).inputValue(), 'A locally intercepted test.')
  assert.equal(await page.locator('.form-success').count(), 0)
  assert.ok(await send().isEnabled())
}
mode = 'success'
await ready()
await fill()
await page.locator('#contact-bot-field').evaluate(input => { input.value = 'bot' })
const previous = posts.length
await send().click()
await page.locator('[role="alert"]').waitFor()
assert.equal(posts.length, previous, 'filled honeypot does not send or display success')
await ready()
await page.setViewportSize({ width: 1440, height: 1000 })
await page.screenshot({ path: '/tmp/aikikai-contact-desktop.png', fullPage: true })
await page.setViewportSize({ width: 375, height: 1000 })
await page.screenshot({ path: '/tmp/aikikai-contact-mobile.png' })
await page.locator('#contact-message').scrollIntoViewIfNeeded()
await page.screenshot({ path: '/tmp/aikikai-contact-mobile-form.png' })
assert.equal(await page.locator('h1').count(), 1)
assert.equal(await page.locator('.site-header').count(), 1)
assert.deepEqual(errors, [])
console.log('PASS: unavailable service, native validation, optional Friday validation, encoded request, honeypot, pending and confirmed success, error recovery and retained fields, static fallback rejection, keyboard focus and five viewport widths. All submissions were intercepted; none sent.')
await browser.close()
