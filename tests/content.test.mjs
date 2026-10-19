import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { events } from '../src/data/events.js'
import { blogPosts, getBlogPostUrl } from '../src/data/blog.js'
import { getEventUrl } from '../src/utils/events.js'
import { club } from '../src/data/club.js'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
test('sitemap covers new and preserved content and matches the deployed copy', () => {
  const sitemap = read('public/sitemap.xml')
  for (const path of ['/', '/beginners', '/classes', '/about', '/resources', '/contact', '/syllabus', '/syllabus/6th-kyu', '/syllabus/5th-kyu', '/syllabus/4th-kyu', '/syllabus/3rd-kyu', ...events.map(getEventUrl), ...blogPosts.map(getBlogPostUrl)]) assert.ok(sitemap.includes(`<loc>https://leicesteraikikai.com${path}</loc>`), path)
  if (existsSync(new URL('../dist/sitemap.xml', import.meta.url))) assert.equal(read('dist/sitemap.xml'), sitemap)
})

test('published content images and resources are real public files', () => {
  const files = [...events.map(event => event.image), ...blogPosts.map(post => post.featuredImage), club.instructor.image, '/img/training-640.webp', '/img/training-960.webp', '/img/training-1280.webp', '/img/instructor-800.webp', '/img/venue-960.webp', '/img/community-1280.webp', '/img/club-mark.webp', '/docs/welcome-to-aikido-uka-booklet.pdf']
  for (const file of files.filter(Boolean)) assert.ok(existsSync(new URL(`../public${file}`, import.meta.url)), file)
})

test('published training and association fees remain unchanged', () => {
  assert.deepEqual(club.fees.map(fee => [fee.monthly, fee.annual]), [[25, 35], [20, 27], [15, 20]])
})
