import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { CONTACT_FORM_NAME, CONTACT_FORM_PATH, submitContactForm } from '../src/utils/contact.js'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
const data = () => new Map([['form-name', CONTACT_FORM_NAME], ['bot-field', ''], ['name', 'Test & Example'], ['email', 'test@example.com'], ['preferred-friday', '2026-11-06'], ['message', 'A question about practice.']])

test('Netlify static definition matches visible fields, including the honeypot', () => {
  const definition = read('public/contact-form.html')
  const view = read('src/views/Contact.vue')
  const fields = source => [...source.matchAll(/<(?:input|textarea|select)\b[^>]*\bname="([^"]+)"[^>]*>/g)].map(match => match[1]).filter(name => name !== 'form-name').sort()
  assert.deepEqual(fields(definition), fields(view))
  assert.ok(definition.includes(`name="${CONTACT_FORM_NAME}"`))
  assert.match(definition, /data-netlify="true"/)
  assert.match(definition, /netlify-honeypot="bot-field"/)
  assert.match(definition, /noindex, nofollow/)
  assert.ok(!definition.includes('name="form-name"'), 'form-name must be injected by Netlify to indicate processing')
})

test('submits URL-encoded fields to the same-origin form endpoint', async () => {
  await submitContactForm(data(), { fetcher: async (url, options) => {
    assert.equal(url, CONTACT_FORM_PATH)
    assert.equal(options.method, 'POST')
    assert.equal(options.headers['Content-Type'], 'application/x-www-form-urlencoded')
    const sent = new URLSearchParams(options.body)
    assert.equal(sent.get('name'), 'Test & Example')
    assert.equal(sent.get('bot-field'), '')
    assert.equal(sent.get('form-name'), CONTACT_FORM_NAME)
    assert.equal(sent.get('email'), 'test@example.com')
    return new Response('<html><body>Thank you</body></html>', { status: 200 })
  } })
})

test('rejects service errors and static hosts that return a success HTTP status', async () => {
  for (const response of [new Response('', { status: 404 }), new Response('', { status: 429 }), new Response('', { status: 500 }), new Response('<body data-contact-definition>'), new Response('<div id="app"></div>')]) {
    await assert.rejects(submitContactForm(data(), { fetcher: async () => response }))
  }
  await assert.rejects(submitContactForm(data(), { fetcher: async () => { throw new Error('Offline') } }))
})

test('passes cancellation to the submission request', async () => {
  const controller = new AbortController()
  await submitContactForm(data(), { signal: controller.signal, fetcher: async (_, options) => {
    assert.equal(options.signal, controller.signal)
    return new Response('', { status: 200 })
  } })
})

test('receiving address and mailto links are absent from public source and build output', () => {
  function check(folder) {
    for (const entry of readdirSync(new URL(`../${folder}`, import.meta.url), { withFileTypes: true })) {
      const path = `${folder}/${entry.name}`
      if (entry.isDirectory()) check(path)
      else if (/\.(?:js|vue|html|css|txt|xml|json)$/.test(entry.name)) {
        assert.doesNotMatch(read(path), /leicester\.aikikai@|mailto:/i, path)
      }
    }
  }
  for (const folder of ['src', 'public']) check(folder)
  if (existsSync(new URL('../dist', import.meta.url))) check('dist')
  assert.doesNotMatch(read('index.html'), /leicester\.aikikai@|mailto:/i)
})
