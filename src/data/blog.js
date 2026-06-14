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

export const blogPosts = [
  {
    id: 'blog-2026-06-14-leicester-aikikai-aikido-guest-instructors-july-2026',
    slug: 'leicester-aikikai-aikido-guest-instructors-july-2026',
    title: 'Leicester Aikikai Aikido guest instructors July 2026',
    excerpt: 'In July 2026, Leicester Aikikai will welcome guest instructors from British Aikikai, British Birankai, and United Kingdom Aikikai for Friday night training sessions in the build-up to the UKA Summer School.',
    publishedDate: '14.06.2026',
    lastUpdated: '14.06.2026',
    authorId: 'antonis-pavlakis',
    readingTime: '4 min read',
    featuredImage: '/img/end-of-class-leicester-aikikai-and-guests.jpeg',
    imageAlt: 'Leicester Aikikai guests and instructors at the end of a training session',
    category: 'Guest instructors',
    tags: ['guest instructors', 'Leicester', 'summer school', 'aikido training'],
    introduction: 'In July 2026, in the build-up to the United Kingdom Aikikai Summer School, we will invite guest instructors to join us and teach alongside me. Following last year’s success, we are looking forward to sharing the mat with new and familiar faces once again.',
    sections: [
      {
        heading: 'A shared summer training tradition',
        slug: 'a-shared-summer-training-tradition',
        paragraphs: [
          'Guest instruction has become one of the best parts of our summer training calendar. It gives everyone a chance to experience different teaching styles, different approaches to movement, and a fresh atmosphere on the mat while staying grounded in traditional Aikikai practice.',
          'Last year’s guest instructor sessions were a success, and they showed how much can be gained when local dojo and visiting teachers come together in one place.'
        ]
      },
      {
        heading: 'Confirmed instructors for July 2026',
        slug: 'confirmed-instructors-for-july-2026',
        paragraphs: [
          'So far, we have confirmations from instructors from British Aikikai, British Birankai, and United Kingdom Aikikai. That mix of backgrounds should make for lively and valuable training sessions, with each guest bringing their own perspective to the mat.',
          'As more details are confirmed, we will continue to share the plan with the dojo so everyone knows what to expect from the July sessions.'
        ]
      },
      {
        heading: 'Training Aikido in Leicester',
        slug: 'training-aikido-in-leicester',
        paragraphs: [
          'If you are training aikido in Leicester, guest instructor evenings are a great way to stay motivated and expand your understanding of the art. They also offer a chance to meet other practitioners, exchange ideas, and keep your training fresh.',
          'We hold our Friday night classes at 7pm, and if you want to join us you are always welcome to drop by and take part.'
        ]
      }
    ],
    conclusion: 'July 2026 should be another exciting month of training at Leicester Aikikai. We are grateful to the guest instructors who will join us, and we look forward to welcoming everyone onto the mat.',
    callToAction: {
      heading: 'Join us on a Friday night',
      text: 'If you want to join us, drop by on a Friday night at 7pm and take part in the class.',
      buttonLabel: 'View class details',
      buttonLink: '/#location'
    },
    relatedSlugs: []
  }
]

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

