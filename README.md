# Leicester Aikikai Dojo Website

Official website for Leicester Aikikai (レスター 合気会) - Traditional Aikido in the East Midlands, UK.

## 🥋 About

Leicester Aikikai is a UK Aikikai Aikido dojo based in Leicester teaching traditional aikido. This website provides information about our classes, events, syllabus, and instructors.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate sitemap
npm run sitemap
```

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Router:** Vue Router 4 (HTML5 History Mode)
- **Build Tool:** Vite 5
- **Styling:** Bootstrap 5 + Custom CSS
- **SEO:** JSON-LD Structured Data, Dynamic Meta Tags

## 📁 Project Structure

```
├── public/               # Static assets
│   ├── _redirects       # Netlify SPA routing
│   ├── robots.txt       # Search engine directives
│   └── sitemap.xml      # Generated sitemap
├── src/
│   ├── assets/          # Images and styles
│   ├── components/      # Vue components (Navbar, Footer)
│   ├── router/          # Vue Router configuration
│   ├── utils/           # Utilities (SEO helpers)
│   └── views/           # Page components (Home, Events, Syllabus)
├── scripts/             # Build scripts
│   └── generate-sitemap.mjs
├── netlify.toml         # Netlify configuration
└── index.html           # Entry point
```

## 🌐 Deployment

### Netlify (Recommended)

The project is **pre-configured for Netlify** with:
- ✅ `netlify.toml` for build settings and redirects
- ✅ `public/_redirects` for SPA routing fallback
- ✅ Security and cache headers
- ✅ Automatic sitemap generation

**Deploy Steps:**
1. Push to GitHub/GitLab
2. Connect repository to Netlify
3. Netlify auto-detects configuration
4. Deploy!

**Documentation:**
- Quick Reference: `NETLIFY-QUICK-REF.md`
- Full Guide: `NETLIFY-CONFIG.md`
- General Deployment: `DEPLOYMENT.md`

## 🔍 SEO Optimization

Fully optimized for search engines and AI/LLM crawlers:
- ✅ Dynamic meta tags per route
- ✅ Open Graph & Twitter Cards
- ✅ JSON-LD structured data (12+ schema types)
- ✅ Sitemap & robots.txt
- ✅ Semantic HTML & ARIA labels
- ✅ Performance optimized (fetchpriority, lazy loading)

**Documentation:**
- SEO Guide: `SEO.md`
- Quick Summary: `SEO-SUMMARY.md`
- Validation Checklist: `SEO-CHECKLIST.md`

## Website modernisation

See [implementation notes](docs/website-modernisation.md) for the 2026 redesign,
content sources, owner-confirmation items and verification limits.

Shared practical information is maintained in `src/data/club.js`.
Run `npm test` for content, event and contact-form regression checks. The optional
`scripts/check-browser.mjs` uses an existing Playwright/Chrome installation; see
its opening comments. `scripts/check-contact-browser.mjs` tests form validation,
spam-trap handling and simulated service responses without sending real enquiries.
See the implementation notes for the required Netlify Forms and notification setup.
No test or browser packages are required in production.

## 🎯 Routes

- `/` - Home and first-class introduction
- `/beginners` - Start Aikido and first-class instructions
- `/classes` - Class times, venue and membership fees
- `/about` - Club history and instructor background
- `/resources` - Student resources hub
- `/contact` - Protected contact form and directions
- `/blog` - Articles and dojo notes
- `/instructors/antonis-pavlakis` - Original instructor profile
- `/events` - Events & Courses
- `/syllabus` - Aikido Syllabus & Grading

**Hash Anchors:**
- `/#our-journey` - Our Journey Section
- `/#location` - Location & Times
- `/#costs` - Pricing Information
- `/#faq` - Frequently Asked Questions

## 📦 Scripts

```bash
npm run dev        # Start dev server (port 3000)
npm run build      # Build for production + generate sitemap
npm run preview    # Preview production build
npm run sitemap    # Generate sitemap only
```

## 🧪 Testing

Test the production build locally:

```bash
npm run build
npm run preview

# Test routes:
# http://localhost:4173/
# http://localhost:4173/events
# http://localhost:4173/syllabus
```

## 📝 Documentation

- **Quick Start:** `QUICK-START.md`
- **Deployment:** `DEPLOYMENT.md`
- **Netlify Setup:** `NETLIFY-CONFIG.md` & `NETLIFY-QUICK-REF.md`
- **SEO Guide:** `SEO.md`, `SEO-SUMMARY.md`, `SEO-CHECKLIST.md`
- **Image Fix:** `IMAGE-PRELOAD-FIX.md`
- **Vue Info:** `README-VUEJS.md`

## 🔧 Configuration Files

- `netlify.toml` - Netlify build, redirects, headers
- `public/_redirects` - SPA routing fallback
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts

## 🌟 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (search engines + AI/LLMs)
- ✅ Fast performance (Vite + optimized assets)
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Social media ready (OG tags, Twitter Cards)
- ✅ SPA with clean URLs (Vue Router history mode)
- ✅ Automatic sitemap generation
- ✅ Structured data (JSON-LD)

## 📞 Contact

**Leicester Aikikai Dojo**
- Website: https://leicesteraikikai.co.uk
- Facebook: [@LeicesterAikikai](https://www.facebook.com/LeicesterAikikai)
- Instagram: [@leicesteraikikai](https://www.instagram.com/leicesteraikikai/)
- TikTok: [@leicesteraikikai](https://www.tiktok.com/@leicesteraikikai)

## 📄 License

Copyright © 2025 Leicester Aikikai Dojo. All rights reserved.

---

**Built with ❤️ for the Leicester Aikido Community**
