/**
 * SEO Utilities for dynamic meta tags and JSON-LD structured data
 */

const SITE_URL = 'https://leicesteraikikai.com'
const SITE_NAME = 'Leicester Aikikai Dojo'
const SITE_DESCRIPTION = 'Leicester Aikikai is a UK Aikikai Aikido dojo based in Leicester teaching traditional aikido in the East Midlands.'
const SITE_IMAGE = `${SITE_URL}/src/assets/img/leicester-aikikai-dojo-hall.jpg`

/**
 * Set dynamic meta tags for SEO
 */
export function setMeta({ title, description, image, url, type = 'website', keywords }) {
  // Title
  document.title = title || SITE_NAME

  // Standard meta
  setMetaTag('description', description || SITE_DESCRIPTION)
  if (keywords) {
    setMetaTag('keywords', keywords)
  }

  // Canonical URL
  setLinkTag('canonical', url || window.location.href)

  // Open Graph
  setMetaTag('og:title', title || SITE_NAME, 'property')
  setMetaTag('og:description', description || SITE_DESCRIPTION, 'property')
  setMetaTag('og:image', image || SITE_IMAGE, 'property')
  setMetaTag('og:url', url || window.location.href, 'property')
  setMetaTag('og:type', type, 'property')
  setMetaTag('og:site_name', SITE_NAME, 'property')
  setMetaTag('og:locale', 'en_GB', 'property')

  // Twitter Card
  setMetaTag('twitter:card', 'summary_large_image')
  setMetaTag('twitter:title', title || SITE_NAME)
  setMetaTag('twitter:description', description || SITE_DESCRIPTION)
  setMetaTag('twitter:image', image || SITE_IMAGE)
  setMetaTag('twitter:site', '@leicesterdojo')
}

/**
 * Helper to set or update meta tags
 */
function setMetaTag(name, content, attribute = 'name') {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
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

  // Add new JSON-LD
  if (Array.isArray(data)) {
    data.forEach(item => addJsonLdScript(item))
  } else {
    addJsonLdScript(data)
  }
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
    'name': 'Leicester Aikikai Dojo',
    'alternateName': 'レスター 合気会',
    'description': 'Traditional Aikido dojo in Leicester, UK, affiliated with United Kingdom Aikikai (UKA) and teaching Aikikai style aikido.',
    'url': SITE_URL,
    'logo': `${SITE_URL}/src/assets/img/Leicester-Aikikai-Dojo-Logo.png`,
    'image': SITE_IMAGE,
    'telephone': '',
    'email': '',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '2 Knighton Lane East',
      'addressLocality': 'Leicester',
      'postalCode': 'LE2 6LU',
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 52.6093325,
      'longitude': -1.1334088
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Friday',
      'opens': '19:00',
      'closes': '21:00'
    },
    'sameAs': [
      'https://www.facebook.com/LeicesterAikikai',
      'https://www.instagram.com/leicesteraikikai/',
      'https://twitter.com/leicesterdojo',
      'https://www.tiktok.com/@leicesteraikikai'
    ],
    'sport': 'Aikido',
    'memberOf': {
      '@type': 'Organization',
      'name': 'United Kingdom Aikikai',
      'url': 'https://ukaikikai.org.uk/'
    }
  }
}

/**
 * Get WebSite schema with search action
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
    'alternateName': 'Adoni',
    'jobTitle': 'Chief Instructor',
    'description': '4th dan (yondan so-Hombu Fukushidoin 副指導員) and chief instructor at Leicester Aikikai dojo',
    'image': `${SITE_URL}/src/assets/img/leicester-aikikai-antonios-pavlakis-2016.jpg`,
    'worksFor': {
      '@id': `${SITE_URL}/#organization`
    }
  }
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_IMAGE }

