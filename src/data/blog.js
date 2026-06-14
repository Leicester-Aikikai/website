const DATE_LOCALE = 'en-GB'

export const blogAuthors = {
  'antonis-pavlakis': {
    id: 'antonis-pavlakis',
    name: 'Antonis Pavlakis',
    title: 'Chief Instructor and Founder',
    profile: '/instructors/antonis-pavlakis',
    image: '/img/Antonis_Pavlakis.jpg',
    bio: 'Antonis founded Leicester Aikikai in 2013 and teaches traditional Aikikai aikido in Leicester. He focuses on clear fundamentals, safe training, and welcoming people of all experience levels.',
    shortBio: 'Chief instructor and founder of Leicester Aikikai, teaching traditional Aikido in Leicester since 2013.'
  }
}

export const blogPosts = []

export function parseBlogDate(dateStr) {
  const [day, month, year] = dateStr.split('.')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

export function formatBlogDate(dateStr) {
  return parseBlogDate(dateStr).toLocaleDateString(DATE_LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatBlogDateForUrl(dateStr) {
  const [day, month, year] = dateStr.split('.')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

export function createBlogSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getBlogPostUrl(post) {
  return `/blog/${formatBlogDateForUrl(post.publishedDate)}/${post.slug || createBlogSlug(post.title)}`
}

export function getBlogAuthor(authorId) {
  return blogAuthors[authorId] || null
}

export function getBlogPostByRoute(date, slug) {
  return blogPosts.find((post) => formatBlogDateForUrl(post.publishedDate) === date && post.slug === slug) || null
}

export function getBlogRelatedPosts(post, limit = 3) {
  if (!post) return []

  const related = (post.relatedSlugs || [])
    .map((slug) => blogPosts.find((candidate) => candidate.slug === slug))
    .filter(Boolean)

  if (related.length >= limit) {
    return related.slice(0, limit)
  }

  const fallback = blogPosts.filter((candidate) => candidate.slug !== post.slug && !related.some((item) => item.slug === candidate.slug))
  return [...related, ...fallback].slice(0, limit)
}

export function getBlogPostSummary(post) {
  if (!post) return ''
  const author = getBlogAuthor(post.authorId)
  const authorName = author ? author.name : 'Leicester Aikikai'
  return `${post.title} by ${authorName}. Published ${formatBlogDate(post.publishedDate)}. ${post.excerpt}`
}

