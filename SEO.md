# SEO Optimization Guide

This document describes the SEO optimizations implemented for the Leicester Aikikai website.

## Overview

The website has been optimized for both traditional search engines (Google, Bing) and AI/LLM crawlers (ChatGPT, Claude, etc.) to ensure maximum visibility and proper content understanding.

## Implemented Features

### 1. Meta Tags

#### Static Meta Tags (index.html)
- **Primary meta tags**: title, description, keywords, author
- **Robots directives**: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Open Graph tags**: For Facebook, LinkedIn, and other social platforms
- **Twitter Card tags**: For enhanced Twitter sharing
- **Theme color**: Brand color `#2465c7`
- **Canonical URL**: Proper canonical tags to avoid duplicate content

#### Dynamic Meta Tags (per route)
The router automatically updates meta tags when navigating between pages:
- Home page: Focus on aikido training and dojo introduction
- Events page: Highlighting upcoming courses and seminars
- Syllabus page: Technical content about aikido training curriculum

### 2. Structured Data (JSON-LD)

Comprehensive structured data for better search engine understanding:

#### Global (index.html)
- **SportsActivityLocation**: Main organization schema
- **WebSite**: Website-level information

#### Page-specific
- **Home page**:
  - Person schema (instructor information)
  - FAQPage schema (3 common questions)
  - LocalBusiness schema (pricing and payment info)

- **Events page**:
  - Event schema (for specific courses)
  - ItemList schema (list of events)

- **Syllabus page**:
  - Course schema (training program)
  - HowTo schema (weapons training guides)
  - ItemList schema (organized content)

### 3. Semantic HTML

- `<header>` tag wrapping navigation
- `<main>` tag for primary content
- `<footer>` tag with proper role
- `<nav>` tags with aria-labels
- `<article>` and `<section>` tags where appropriate
- Proper heading hierarchy (h1 → h2 → h3)

### 4. Accessibility (SEO-beneficial)

- ARIA labels on all interactive elements
- `role` attributes where needed
- `aria-hidden` on decorative SVGs
- Skip-to-content link
- Descriptive link text
- Alt text on all images
- `loading="lazy"` on below-fold images

### 5. Technical SEO

#### robots.txt
Location: `/public/robots.txt`

Allows all search engines and specifically welcomes AI crawlers:
- GPTBot (OpenAI)
- Claude-Web (Anthropic)
- CCBot (Common Crawl)
- Google-Extended
- Traditional crawlers (Googlebot, Bingbot, etc.)

#### Sitemap
Location: `/public/sitemap.xml`

Auto-generated sitemap with:
- All routes with proper priorities
- Change frequencies
- Last modification dates

**Generation**: 
```bash
npm run sitemap
```

The sitemap is automatically regenerated after each build via `postbuild` script.

### 6. Performance Optimization

- **Preconnect**: To external domains (fonts, CDNs)
- **DNS prefetch**: For faster resource loading
- **fetchpriority="high"**: Hero images marked as high priority for LCP (Largest Contentful Paint)
- **Lazy loading**: Images below the fold
- **Image optimization**: WebP format where supported

**Note**: In Vue SPAs, using `fetchpriority="high"` on critical images is preferred over `<link rel="preload">` to avoid preload warnings, since the image isn't rendered until Vue mounts the component.

### 7. AI/LLM Optimization

Special considerations for LLM crawlers:

1. **Clear content structure**: Semantic HTML helps LLMs understand content hierarchy
2. **Rich metadata**: Multiple description formats (meta, OG, structured data)
3. **Context clues**: Japanese text with HTML `title` attributes for translation
4. **Structured data**: JSON-LD provides explicit content relationships
5. **FAQ format**: Structured Q&A for easy extraction
6. **Explicit permissions**: robots.txt explicitly allows AI crawlers

## SEO Utility Module

Location: `/src/utils/seo.js`

### Functions

#### `setMeta(options)`
Dynamically set/update meta tags for a page:
```javascript
setMeta({
  title: 'Page Title',
  description: 'Page description',
  image: 'https://example.com/image.jpg',
  url: 'https://example.com/page',
  keywords: 'keyword1, keyword2',
  type: 'website' // or 'article'
})
```

#### `setJsonLd(data)`
Inject structured data (can pass single object or array):
```javascript
setJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Event',
  'name': 'Event Name',
  // ...
})
```

#### Schema Helpers
- `getOrganizationSchema()`: Returns organization/location schema
- `getWebSiteSchema()`: Returns website schema
- `getPersonSchema()`: Returns instructor schema

## Router Integration

The router (`/src/router/index.js`) automatically:
1. Sets page title
2. Updates meta description
3. Sets canonical URL
4. Updates Open Graph tags
5. Updates Twitter Card tags

Each route defines its SEO metadata:
```javascript
{
  path: '/example',
  component: Example,
  meta: {
    title: 'Page Title',
    description: 'Page description',
    keywords: 'relevant, keywords',
    image: 'https://...'
  }
}
```

## Best Practices

### Adding New Pages

1. Add route meta information in `/src/router/index.js`
2. Add structured data in component's `mounted()` hook
3. Ensure proper heading hierarchy (single h1, then h2, etc.)
4. Add descriptive alt text to images
5. Update sitemap generator script if needed
6. Run `npm run sitemap` after adding routes

### Images

- Use descriptive file names (e.g., `leicester-aikikai-training.jpg`)
- Always include alt text
- Use `loading="lazy"` for below-fold images
- Use `fetchpriority="high"` for hero/LCP images
- Optimize file sizes (use WebP where possible)
- Include in Open Graph image when relevant

### Content

- Use semantic HTML elements
- Include Japanese text translations in `title` attributes
- Structure content with proper headings
- Link to authoritative sources (UKA, JAC)
- Include location information with Schema markup

### Performance

- Keep JavaScript bundles small
- Lazy load components when possible
- Optimize images before uploading
- Use CDN for static assets
- Monitor Core Web Vitals

## Validation Tools

### Test Your SEO

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
5. **Lighthouse**: Built into Chrome DevTools
6. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### Key Metrics to Monitor

- **Core Web Vitals**: LCP, FID, CLS
- **Accessibility Score**: Lighthouse audit
- **SEO Score**: Lighthouse audit
- **Mobile Usability**: Google Search Console
- **Index Coverage**: Google Search Console
- **Structured Data**: Google Search Console

## Canonical URL

The site uses `https://leicesteraikikai.co.uk` as the canonical domain. If deploying to a different domain or staging environment, update:

1. `/src/utils/seo.js` → `SITE_URL` constant
2. `/scripts/generate-sitemap.mjs` → `SITE_URL` constant
3. `/public/robots.txt` → Sitemap URL
4. `/index.html` → Canonical URL

## Future Enhancements

Consider implementing:

1. **Prerendering**: Use `vite-plugin-ssr` or similar for static HTML generation
2. **Blog/News**: Add a blog with Article schema for fresh content
3. **Reviews**: Add review schema from student testimonials
4. **Video**: Add VideoObject schema for training videos
5. **Breadcrumbs**: Add BreadcrumbList schema for navigation
6. **Events Feed**: Dynamic event schema from a data file
7. **Multilingual**: Add hreflang tags for Japanese content
8. **AMP**: Consider AMP versions for mobile

## Support

For questions or issues related to SEO implementation, refer to:
- [Schema.org documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Last Updated**: November 2025  
**Maintained By**: Antonis Pavlakis

