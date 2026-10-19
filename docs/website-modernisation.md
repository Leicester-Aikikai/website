# Website modernisation — 19 October 2026

## Implementation plan

Keep Vue 3, Vue Router, Bootstrap and Netlify hosting. Preserve all existing event,
blog, instructor and syllabus URLs and technical content. Add `/beginners`,
`/classes`, `/about`, `/resources` and `/contact` around the existing pages.

Centralise practical club information, fees, beginner answers and navigation.
Build reusable first-class actions, venue details, prices, FAQs and an unpublished
testimonial component. Replace the homepage and navigation with a responsive,
charcoal/off-white/red design using existing club photographs. Keep legacy home
anchors working. Use email enquiries, without suggesting an enquiry is a booking.

Unify metadata and schema on the existing `.com` canonical domain, include new
routes in the sitemap and llms.txt, optimise new prominent photographs, and retain
the announcement system. Verify the production build, routes, links, syllabus
disclosures, calendar exports, responsive layouts and metadata.

## Content sources and owner confirmation

- Repository `Home.vue` and `Instructor.vue` before this change: Friday 19:00–21:00,
  free first class with attendance invited directly, loose exercise clothing
  covering the knees, monthly fees £25/£20/£15, annual UKA fees £35/£27/£20,
  £8 guest session, May 2013 founding and instructor milestones.
- https://ukaikikai.org.uk/club/leicester-aikikai/ (checked 19 October 2026):
  confirms class times, venue, monthly fees, 4th Dan Fukushidoin and publishes
  `leicester.aikikai@gmail.com`. No enquiry has been sent as part of this work.
- https://ukaikikai.org.uk/membership/ (checked 19 October 2026): confirms annual
  fees and states liability insurance is included. The site refers visitors to the
  instructor for cover and joining details, without promising trial-class cover.
- **Age eligibility needs confirmation:** the original club page says children
  aged 12 and under may train only with a training parent. The UKA directory says
  minimum age 13, with limited spaces for children aged 7+ with a training parent.
  Preserve the club's parent condition and ask families to enquire before coming;
  do not turn the directory's lower age into a new club policy.
- Confirm current availability for younger students, concession eligibility,
  payment arrangements and insurance/registration timing with the instructor.
- Existing site says free venue parking and a nearby bus stop. Retained as
  published information; visitors should check the venue for current arrangements.
- No consented testimonials found. Component remains unused pending quotations
  and publication permission; no ratings or reviews are added to schema.
- No analytics or supported submission backend found. Use a verified mailto link;
  no new tracking or hosted form service is introduced.

## Follow-up opportunities

Consider static rendering/prerendering for route HTML and sharing crawlers,
deployment-level canonical host redirects once domain ownership is confirmed,
and a properly managed enquiry backend only if email becomes insufficient.
Run field Core Web Vitals and assistive-technology testing after deployment.

## Delivered pages and behaviour

Primary navigation is Home (`/`), Start Aikido (`/beginners`), Classes & Prices
(`/classes`), About Us (`/about`), Student Resources (`/resources`), Events
(`/events`) and Contact (`/contact`). The free-class action goes to
`/beginners#first-class`, which explains attendance and links to email and directions.
The original blog, instructor, syllabus, grade and event routes remain available.
The footer and resources hub keep the blog and technical resources discoverable.

The homepage introduces aikido, beginners, instruction, first-class steps, prices,
travel, FAQs and the next future event. Its hero exposes the class time, venue and
free lesson. New pages share club data, prices and FAQ answers. Testimonials remain
unpublished. Email contact uses the UKA-published address; there is no booking form.

The visual system uses charcoal, warm off-white and red, genuine club photography,
system fonts, responsive grids and native FAQ disclosures. Navigation supports
keyboard operation, Escape, current-page indication and a skip link. Route changes
focus the new content; reduced-motion preferences are respected.

SEO uses `.com` canonical and social URLs, unique route metadata, local organisation,
website, person, breadcrumb and event data. Unsupported ratings were removed with
the old homepage. Unknown routes receive a helpful noindex page; Netlify's SPA
fallback still serves HTTP 200, so a server-level 404 remains a future improvement.
The sitemap runs before Vite builds so the published copy includes the new routes.
The LLM-facing summary now reflects the new structure without dated upcoming claims.

Optimised WebP derivatives are used for the prominent photographs. The original
assets remain intact. The homepage has responsive image sources and a priority hero;
other new photos load lazily with reserved dimensions. Secondary views, syllabus
collapse code and icon fonts load on demand. No new dependency or tracking was added.

## Verification results

- `npm run build`: passed; Vite build and prebuild sitemap generation, 28 sitemap
  entries. Initial JavaScript approximately 136.7 KB / 49.9 KB gzip; technical pages
  are separate chunks. These are build sizes, not field performance measurements.
- `npm test`: 8 passed. Checks cover unsorted event input, UK date boundaries,
  summer/winter event offsets, escaped/folded calendar exports, event URLs, sitemap
  coverage, deployed sitemap parity, public assets and the enquiry destination.
- `git diff --check`: passed.
- `scripts/check-browser.mjs` with the existing bundled Playwright and installed
  Chrome: passed against the production preview. Checks all 27 HTML routes at
  320, 375, 768, 1024 and 1440px, plus 29 internal links and anchors. No overflow,
  broken images, missing image alt attributes, unnamed controls or console/page
  errors were found. Metadata, canonical URLs and JSON-LD were inspected.
- Keyboard checks passed for the mobile menu (Enter/Escape and focus return), native
  FAQs, and Bootstrap syllabus disclosures. All four original grade routes opened
  the corresponding panel with matching ARIA state. Event ordering, detail-page
  navigation, calendar file download and BST/GMT behaviour were verified.
- The contact mechanism's mailto destination was checked. No email was sent and
  inbox delivery has not been tested. No submission-success claim is shown.
- Desktop and mobile screenshots were visually inspected. Original event and blog
  data and technical grading requirements are retained.

There were no existing automated tests, lint tasks or type-check tasks configured.
The added tests are dependency-free Node tests; browser checks use an existing
Playwright installation rather than adding it to the production project. Chrome
was tested; full assistive-technology and other-browser testing, field Core Web
Vitals, production hosting headers/redirects and non-JavaScript sharing-crawler
behaviour remain unverified. No deployment or public-domain change was performed.
