// Generated content companion; keep the curated public/llms.txt overview in sync too.
import { writeFileSync } from 'node:fs'
import { club, beginnerFaqs } from '../src/data/club.js'
import { classOverrides } from '../src/data/classes.js'
import { events } from '../src/data/events.js'
import { blogPosts, getBlogPostUrl, getBlogAuthor } from '../src/data/blog.js'
import { getEventUrl, eventDateIso, instructorNames } from '../src/utils/events.js'
import { SITE_URL } from '../src/utils/seo.js'
import { getPages } from '../src/utils/pages.js'

const content = [
  '# Leicester Aikikai — extended content summary',
  '> Generated from the website’s published data. See /llms.txt for the curated overview. Event dates determine whether an event is past or upcoming; article text retains its original publication context.',
  `Canonical website: ${SITE_URL}`,
  '## Classes and first visit',
  `${club.day}, ${club.hours}. ${club.venue}, ${club.street}, ${club.city}, ${club.postcode}. First introductory lesson free. Advance booking is not required for the introductory class.`,
  'The home page shows the next class in Europe/London time, including confirmed cancellations or changed hours. Check the home page before travelling.',
  ...Object.entries(classOverrides).sort(([a], [b]) => a.localeCompare(b)).map(([date, change]) => `Class exception dated ${date}: ${change.cancelled ? 'cancelled' : `${change.start || club.start}–${change.end || club.end} (Europe/London)`}.${change.message ? ` ${change.message}` : ''}`),
  club.ageGuidance, club.clothing,
  ...club.fees.map(fee => `${fee.label}: £${fee.monthly} monthly training; £${fee.annual} separate annual UK Aikikai membership.`),
  `Guest session: £${club.guestFee}. Ask the instructor about registration, insurance cover and payment.`,
  `Contact: ${SITE_URL}/contact. Sending an enquiry does not reserve a class place. The form requires Netlify Forms to be enabled on the deployed site.`,
  '## Club',
  `Founded ${club.established}. Chief instructor and founder: ${club.instructor.name}, ${club.instructor.qualification}. United Kingdom Aikikai affiliation.`,
  '### Current instructor qualifications and certifications',
  ...club.instructor.credentials.map(credential => `- ${credential.title} (${credential.year})`),
  '## Beginner questions', ...beginnerFaqs.flatMap(faq => [`### ${faq.question}`, faq.answer]),
  '## Page directory', ...getPages().map(page => `- [${page.meta.title}](${SITE_URL}${page.path}): ${page.meta.description}`),
  '## Events — dated records',
  ...[...events].sort((a,b) => eventDateIso(b.date).localeCompare(eventDateIso(a.date))).flatMap(event => [
    `### ${event.title}`, `URL: ${SITE_URL}${getEventUrl(event)}`, `Date: ${eventDateIso(event.date)}. Time: ${event.time.start}–${event.time.end} (Europe/London).`,
    `Venue: ${event.location.name}, ${event.location.address}.`, event.description,
    `Instructors: ${instructorNames(event).join('; ')}.`, event.price ? `Published price information: ${event.price}` : ''
  ]),
  '## Blog articles — original publication context',
  ...blogPosts.flatMap(post => [
    `### ${post.title}`, `URL: ${SITE_URL}${getBlogPostUrl(post)}`, `Published: ${post.publishedDate}. Updated: ${post.lastUpdated || post.publishedDate}. Author: ${getBlogAuthor(post.authorId).name}.`,
    post.excerpt, post.introduction,
    ...post.sections.flatMap(section => [`#### ${section.heading}`, ...(section.paragraphs || [])]), post.conclusion,
    post.callToAction ? `${post.callToAction.heading}: ${post.callToAction.text} ${SITE_URL}${post.callToAction.buttonLink}` : ''
  ])
]
writeFileSync(new URL('../public/llms-full.txt', import.meta.url), content.filter(Boolean).join('\n\n') + '\n')
console.log('Generated llms-full.txt from published club, event and blog content.')
