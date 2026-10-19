import { getSocialImage } from './images.js'
import { club } from '../data/club.js'

/**
 * SEO Utilities for dynamic meta tags and JSON-LD structured data
 */

const SITE_URL = 'https://leicesteraikikai.com'
const SITE_NAME = 'Leicester Aikikai Dojo'
const SITE_DESCRIPTION = 'Leicester Aikikai is a UK Aikikai Aikido dojo based in Leicester teaching traditional aikido in the East Midlands.'
const SITE_IMAGE = `${SITE_URL}/img/training-1280.webp`

/**
 * Set dynamic meta tags for SEO
 */
export function getMetaTags({ title = SITE_NAME, description = SITE_DESCRIPTION, image = SITE_IMAGE, imageAlt, url = SITE_URL + '/', type = 'website', keywords, author, publishedTime, modifiedTime, noindex = false }) {
  const social = getSocialImage(image)
  const imageUrl = social.src?.startsWith('/') ? SITE_URL + social.src : social.src
  const tags = { title, description, robots: noindex ? 'noindex, follow' : 'index, follow', keywords, author,
    'og:title': title, 'og:description': description, 'og:image': imageUrl,
    'og:image:width': social.width, 'og:image:height': social.height,
    'og:image:type': imageUrl?.endsWith('.jpg') ? 'image/jpeg' : undefined,
    'og:image:alt': imageAlt || title, 'og:url': url, 'og:type': type,
    'og:site_name': SITE_NAME, 'og:locale': 'en_GB',
    'article:published_time': type === 'article' ? publishedTime : undefined,
    'article:modified_time': type === 'article' ? modifiedTime : undefined,
    'article:author': type === 'article' ? author : undefined,
    'twitter:card': 'summary_large_image', 'twitter:title': title,
    'twitter:description': description, 'twitter:image': imageUrl, 'twitter:image:alt': imageAlt || title
  }
  return tags
}

export function setMeta(meta) {
  document.title = meta.title || SITE_NAME
  setLinkTag('canonical', meta.url || SITE_URL + window.location.pathname)
  for (const [name, content] of Object.entries(getMetaTags(meta))) {
    setMetaTag(name, content, /^(og|article):/.test(name) ? 'property' : 'name')
  }
}

/**
 * Helper to set or update meta tags
 */
function setMetaTag(name, content, attribute = 'name') {
  if (!content) {
    removeMetaTag(name, attribute)
    return
  }

  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function removeMetaTag(name, attribute = 'name') {
  const element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (element) {
    element.remove()
  }
}

/**
 * Helper to set or update link tags
 */
function setLinkTag(rel, href) {
  if (!href) return

  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/**
 * Add JSON-LD structured data to page
 */
export function setJsonLd(data) {
  // Remove existing JSON-LD
  const existing = document.querySelectorAll('script[type="application/ld+json"]')
  existing.forEach(el => {
    if (el.dataset.dynamic) el.remove()
  })

  const items = [getOrganizationSchema(), getWebSiteSchema(), ...(Array.isArray(data) ? data : [data])]
  const seen = new Set()
  items.filter(Boolean).forEach(item => {
    const key = item['@id'] || JSON.stringify(item)
    if (!seen.has(key)) { seen.add(key); addJsonLdScript(item) }
  })
}

/**
 * Helper to add JSON-LD script tag
 */
function addJsonLdScript(data) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.dataset.dynamic = 'true'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * Get base structured data for the organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${SITE_URL}/#organization`,
    name: `${club.name} Dojo`,
    alternateName: 'レスター 合気会',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}${club.logo.image}`,
    image: SITE_IMAGE,
    address: { '@type': 'PostalAddress', streetAddress: club.street, addressLocality: club.city, postalCode: club.postcode, addressCountry: 'GB' },
    geo: { '@type': 'GeoCoordinates', latitude: 52.6093325, longitude: -1.1334088 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/Friday', opens: club.start, closes: club.end },
    sameAs: club.social.map(social => social.url),
    memberOf: { '@type': 'Organization', name: 'United Kingdom Aikikai', url: 'https://ukaikikai.org.uk/' }
  }
}

/**
 * Get WebSite schema
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    'url': SITE_URL,
    'name': SITE_NAME,
    'description': SITE_DESCRIPTION,
    'publisher': {
      '@id': `${SITE_URL}/#organization`
    },
    'inLanguage': 'en-GB'
  }
}

/**
 * Get Person schema for the instructor
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Antonios Pavlakis',
    'alternateName': 'Antonis Pavlakis',
    'jobTitle': 'Chief Instructor',
    'description': '4th dan (yondan so-Hombu Fukushidoin 副指導員) and chief instructor at Leicester Aikikai dojo',
    'image': `${SITE_URL}${club.instructor.image}`,
    'worksFor': {
      '@id': `${SITE_URL}/#organization`
    }
  }
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_IMAGE }


export function getBreadcrumbSchema(path, label, parent) {
  const items = [{ name: 'Home', item: SITE_URL }]
  if (parent) items.push({ name: parent.label, item: `${SITE_URL}${parent.path}` })
  items.push({ name: label, item: `${SITE_URL}${path}` })
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })) }
}
