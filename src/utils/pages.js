import { routeMetadata } from '../data/route-metadata.js'
import { club } from '../data/club.js'
import { events } from '../data/events.js'
import { blogPosts, getBlogPostUrl, getBlogAuthor, formatBlogDateForUrl } from '../data/blog.js'
import { getEventUrl, getEventSchema } from './events.js'
import { getBreadcrumbSchema, getPersonSchema, SITE_URL, SITE_IMAGE } from './seo.js'
import { getSocialImage } from './images.js'

const keywords = 'aikido Leicester, beginner aikido Leicester, traditional aikido Leicester'
export function getPages() {
  const pages = Object.entries(routeMetadata).filter(([path, meta]) => !path.includes(':') && !meta.noindex).map(([path, meta]) => ({
    path,
    meta: { ...meta, url: SITE_URL + path, keywords: meta.keywords || keywords },
    schemas: path === '/' ? [getPersonSchema()] : [getBreadcrumbSchema(path, meta.label || meta.title.split(' :: ')[0].split(' | ')[0])]
  }))
  for (const event of events) {
    const path = getEventUrl(event)
    pages.push({ path, meta: { title: `${event.title} | Leicester Aikikai Dojo`, description: event.description, image: SITE_URL + event.image, imageAlt: `${event.title} event poster or photograph`, type: 'website', keywords, url: SITE_URL + path }, schemas: [getBreadcrumbSchema(path, event.title, { label: 'Events', path: '/events' }), getEventSchema(event, SITE_URL)] })
  }
  for (const post of blogPosts) {
    const path = getBlogPostUrl(post)
    const author = getBlogAuthor(post.authorId)
    const publishedTime = formatBlogDateForUrl(post.publishedDate)
    const modifiedTime = formatBlogDateForUrl(post.lastUpdated || post.publishedDate)
    pages.push({ path, lastmod: modifiedTime, meta: { title: `${post.title} | Leicester Aikikai Blog`, description: post.excerpt, image: SITE_URL + post.featuredImage, imageAlt: post.imageAlt || post.title, type: 'article', keywords: post.tags.join(', '), author: author.name, publishedTime, modifiedTime, url: SITE_URL + path }, schemas: [getBreadcrumbSchema(path, post.title, { label: 'Blog', path: '/blog' }), {
      '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${SITE_URL}${path}#blogposting`, headline: post.title, description: post.excerpt,
      author: { '@type': 'Person', name: author.name, url: SITE_URL + author.profile }, publisher: { '@id': `${SITE_URL}/#organization` },
      datePublished: publishedTime, dateModified: modifiedTime, image: SITE_URL + getSocialImage(post.featuredImage).src,
      mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + path }, articleSection: post.category, keywords: post.tags, inLanguage: 'en-GB', isAccessibleForFree: true
    }] })
  }
  const path = club.instructor.profile
  pages.push({ path, meta: { title: `${club.instructor.name} - Instructor Profile | Leicester Aikikai Dojo`, description: `${club.instructor.name}, ${club.instructor.qualification}, founder and chief instructor at Leicester Aikikai. Read about his aikido training and teaching since 1997.`, image: SITE_URL + club.instructor.image, imageAlt: club.instructor.name, url: SITE_URL + path, keywords }, schemas: [getPersonSchema(), getBreadcrumbSchema(path, club.instructor.name, { label: 'About Us', path: '/about' })] })
  return pages.map(page => ({ ...page, meta: { image: SITE_IMAGE, type: 'website', ...page.meta } }))
}

export function getPage(path) {
  return getPages().find(page => page.path === path)
}
