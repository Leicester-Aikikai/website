# Leicester Aikikai Website Guide

This document describes the project structure, content sources, and the standards to follow when updating the Leicester Aikikai website.

## Tech Stack

- **Frontend:** Vue 3
- **Routing:** Vue Router 4 with HTML5 history mode
- **Build tool:** Vite
- **Styling:** Bootstrap 5 plus project-specific CSS in `src/input.css`
- **Runtime:** Node.js 18+
- **Deployment:** Netlify with SPA fallback via `public/_redirects`
- **SEO utilities:** Central helpers in `src/utils/seo.js`

## Project Structure

Key directories and files:

- `src/App.vue` — root application shell
- `src/main.js` — application bootstrap
- `src/router/index.js` — application routes and route-level SEO metadata
- `src/utils/seo.js` — meta tags, canonical URLs, and JSON-LD helpers
- `src/data/events.js` — centralized event content
- `src/data/blog.js` — centralized blog content and helper functions
- `src/views/Home.vue` — home page with the latest event section
- `src/views/Events.vue` — events listing and event detail page
- `src/views/Blog.vue` — blog listing and blog detail page
- `src/views/Syllabus.vue` — grading and syllabus pages
- `src/views/Instructor.vue` — instructor profile pages
- `src/components/Navbar.vue` — primary navigation
- `src/components/Footer.vue` — footer and social links
- `scripts/generate-sitemap.mjs` — sitemap generator
- `public/sitemap.xml` — generated sitemap output
- `public/llms.txt` — LLM-facing site summary
- `public/_redirects` — Netlify SPA routing fallback

## Events Structure and Update Process

Events are defined as an array of objects in `src/data/events.js`. Each event object has the following structure:

```javascript
{
  date: 'DD.MM.YYYY',
  title: 'Event Title',
  description: 'A detailed description of the event.',
  type: 'course' | 'seminar' | 'other',
  id: 'event-YYYY-MM-DD',
  image: '/img/event-image.jpg',
  location: {
    name: 'Location Name',
    address: 'Location Address'
  },
  time: {
    start: 'HH:MM',
    end: 'HH:MM'
  },
  price: 'Event price information',
  instructors: [
    { name: 'Instructor Name', profile: '/instructors/instructor-profile-url' },
    'Instructor Name'
  ]
}
```

### Event Update Process

1. Update `src/data/events.js`.
2. `src/views/Home.vue` automatically shows the next upcoming event.
3. Regenerate the sitemap with:

```bash
node scripts/generate-sitemap.mjs
```

## Blog Structure and Update Process

Blog content is defined centrally in `src/data/blog.js`.

### Blog Post Structure

Each blog post should follow a structure similar to the following:

```javascript
{
  id: 'blog-YYYY-MM-DD-slug',
  slug: 'post-slug',
  title: 'Post Title',
  excerpt: 'Short summary for the blog index and SEO.',
  publishedDate: 'DD.MM.YYYY',
  lastUpdated: 'DD.MM.YYYY',
  authorId: 'antonis-pavlakis',
  readingTime: '6 min read',
  featuredImage: '/img/blog-image.jpg',
  imageAlt: 'Descriptive alt text for the featured image',
  category: 'Category Name',
  tags: ['tag-one', 'tag-two'],
  introduction: 'Opening paragraph for the article.',
  sections: [
    {
      heading: 'H2 Section',
      slug: 'h2-section',
      paragraphs: ['Paragraph one.', 'Paragraph two.']
    }
  ],
  conclusion: 'Closing summary.',
  callToAction: {
    heading: 'Call to Action',
    text: 'Invite the reader to take the next step.',
    buttonLabel: 'Button label',
    buttonLink: '/events'
  },
  relatedSlugs: ['related-post-slug']
}
```

### Blog Update Process

1. Add, update, or remove posts in `src/data/blog.js`.
2. `src/views/Blog.vue` reads from the centralized data file and renders:
   - the blog listing at `/blog`
   - article pages at `/blog/YYYY-MM-DD/post-slug`
3. Regenerate the sitemap with `node scripts/generate-sitemap.mjs`.

If there are no published posts, the `/blog` page should show a clear empty state instead of blank cards.

## SEO Standards

Follow these standards for every page and content update:

- Set meaningful titles, descriptions, keywords, canonical URLs, and social metadata through `src/utils/seo.js`.
- Use `type: 'website'` for list/home pages and `type: 'article'` for article pages.
- Include structured data (JSON-LD) where appropriate, especially for events and blog posts.
- Keep URLs human-readable and stable.
- Regenerate `public/sitemap.xml` after updating events or blog content.
- Keep `public/llms.txt` in sync with major structural changes so LLM-facing documentation stays accurate.

## Accessibility Standards

All new UI and content updates should follow these accessibility rules:

- Use semantic HTML elements first: `main`, `section`, `article`, `nav`, `header`, `footer`, `figure`, and `time`.
- Provide descriptive `alt` text for all meaningful images.
- Ensure all interactive elements are keyboard accessible and have visible focus states.
- Keep link text descriptive; avoid vague labels like "click here."
- Preserve a logical heading order and avoid skipping heading levels.
- Use proper landmarks and `aria-label` only when it adds clarity.
- Make sure decorative elements do not block pointer or keyboard interaction.
- Keep color contrast readable on text, buttons, and overlays.

## Responsive Design Standards

All views should remain usable across mobile, tablet, and desktop layouts:

- Build layouts mobile-first.
- Use Bootstrap grid and utility classes consistently.
- Avoid fixed widths that break on smaller screens.
- Ensure media scales with `img-fluid` and related responsive classes.
- Keep important buttons and links visible and reachable on narrow screens.
- Test hero sections, cards, and multi-column layouts at common breakpoints.
- Make long text blocks readable with comfortable spacing and line length.

## Netlify and Routing Notes

- SPA routes must continue to resolve through `public/_redirects`.
- The build should remain compatible with Netlify static hosting.
- Run the sitemap generator after content updates so search engines and crawlers see the latest URLs.

## Editing Guidance

- Treat `src/data/events.js` and `src/data/blog.js` as the single source of truth for content.
- Keep changes minimal and consistent with the existing code style.
- Preserve accessibility, SEO, and responsive behavior when adding features or editing page content.

## Quick Blog Post Checklist

When adding a new article:

1. Add the post object to `src/data/blog.js`.
2. Include a clear `excerpt`, `introduction`, `sections`, `conclusion`, `callToAction`, and `relatedSlugs`.
3. Provide descriptive `featuredImage` and `imageAlt` values.
4. Regenerate the sitemap with `node scripts/generate-sitemap.mjs`.
5. Verify the `/blog` page and article route render correctly and remain responsive.
