# Website modernisation — 19 October 2026

## Implementation plan

Keep Vue 3, Vue Router, Bootstrap and Netlify hosting. Preserve all existing event,
blog, instructor and syllabus URLs and technical content. Add `/beginners`,
`/classes`, `/about`, `/resources` and `/contact` around the existing pages.

Centralise practical club information, fees, beginner answers and navigation.
Build reusable first-class actions, venue details, prices, FAQs and an unpublished
testimonial component. Replace the homepage and navigation with a responsive,
charcoal/off-white/blue design using existing club photographs. Keep legacy home
anchors working. Use a protected enquiry form, without suggesting an enquiry is a booking.

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
  confirms class times, venue, monthly fees, 4th Dan Fukushidoin and publishes a club contact address. The receiving address now belongs only in Netlify notification settings, not site source or metadata.
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
- No analytics installed. The owner subsequently selected Netlify Forms using the existing host. No new tracking is introduced; form submissions require Netlify processing and account activation.

## Follow-up opportunities

Consider static rendering/prerendering for route HTML and sharing crawlers,
deployment-level canonical host redirects once domain ownership is confirmed,
and review of form spam and submission retention as enquiry volume grows.
Run field Core Web Vitals and assistive-technology testing after deployment.

## Delivered pages and behaviour

Primary navigation is Home (`/`), Start Aikido (`/beginners`), Classes & Prices
(`/classes`), About Us (`/about`), Student Resources (`/resources`), Events
(`/events`) and Contact (`/contact`). The free-class action goes to
`/beginners#first-class`, which explains attendance and links to the enquiry form and directions.
The original blog, instructor, syllabus, grade and event routes remain available.
The footer and resources hub keep the blog and technical resources discoverable.

The homepage introduces aikido, beginners, instruction, first-class steps, prices,
travel, FAQs and the next future event. Its hero exposes the class time, venue and
free lesson. New pages share club data, prices and FAQ answers. Testimonials remain
unpublished. Enquiries use a short protected contact form; they do not reserve a place in a class.

The visual system uses charcoal, warm off-white and subdued blue, genuine club photography,
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
- The original email mechanism was replaced by Netlify Forms in the follow-up below. Live Netlify acceptance and notification delivery remain unverified.
- Desktop and mobile screenshots were visually inspected. Original event and blog
  data and technical grading requirements are retained.

There were no existing automated tests, lint tasks or type-check tasks configured.
The added tests are dependency-free Node tests; browser checks use an existing
Playwright installation rather than adding it to the production project. Chrome
was tested; full assistive-technology and other-browser testing, field Core Web
Vitals, production hosting headers/redirects and non-JavaScript sharing-crawler
behaviour remain unverified. No deployment or public-domain change was performed.

## Protected contact form follow-up

Replaced public email links with `/contact` and removed the receiving mailbox from
shared data, JavaScript, JSON-LD and `public/llms.txt`. The form asks for name and
reply email, with optional preferred Friday and message. It includes native
validation, accessible labels/status/focus, duplicate-submit protection, preserved
input after errors, and a brief explanation of data handling. No marketing opt-in
or additional tracking is added.

`public/contact-form.html` registers `first-class-enquiry` with Netlify. The static
definition and visible form share the same fields, including the hidden honeypot.
Netlify's own spam filtering applies when the form is active. The UI checks for
Netlify's injected form-name and stripped registration attribute before enabling
submission. Static preview responses and ordinary SPA fallback HTML are rejected;
only an accepted form response triggers the confirmation. No enquiry is sent by
our tests: browser submission scenarios use intercepted responses.

### Hosting setup still required

1. In the site's Netlify dashboard, check the account's Forms allowance, usage and
   billing before activating. No account or billing changes have been made here.
2. Under **Forms**, enable form detection, then deploy this build. Verify the
   `first-class-enquiry` form appears with honeypot protection.
3. Under **Forms → Submission notifications**, add an email notification for this
   form using the club's receiving mailbox. Configure it in Netlify only; keep it
   out of source, public environment variables and form markup.
4. Send an authorised real enquiry after deployment. Verify it appears in verified
   submissions and reaches the intended inbox; check the spam folder too.
5. Restrict access to submissions to club organisers and remove old enquiries
   when no longer needed. Review spam periodically before adding a CAPTCHA.

References: [form setup](https://docs.netlify.com/manage/forms/setup/),
[spam protection](https://docs.netlify.com/manage/forms/spam-filters/),
[notifications](https://docs.netlify.com/manage/forms/notifications/),
[usage and billing](https://docs.netlify.com/manage/forms/usage-and-billing/).

Without active Netlify processing the form displays an unavailable notice, keeps
submission disabled, and offers the existing Facebook contact link and Friday
practice as alternatives. Netlify setup and real delivery cannot be verified from
this local checkout. No public deployment has been performed.

Follow-up verification: `npm run build`, all 13 Node tests and `git diff --check`
passed. The full browser check passed again for all 27 HTML routes at five widths
and 29 internal links. The dedicated contact browser checks passed for unavailable
processing, required/Friday validation, encoded submission, honeypot rejection,
pending state, simulated acceptance, HTTP/network failures, static fallback
responses and retained input. Desktop and mobile viewport screenshots were checked.
Receiving-address removal was checked against both public sources and built assets.
All form responses were intercepted locally; no real submission or notification
was sent. The hosting-account and delivery checks above remain outstanding.


## Homepage event visibility follow-up

The next upcoming event is highlighted immediately below the navigation, before
its introductory hero. The banner shows the next event's date, title, venue,
time and direct details link on desktop and mobile. It uses the shared chronological
upcoming-event selection and disappears when no future event is listed. The
community section remains lower down with links to events and dojo notes.
The original `/#latest-event` anchor is available again when an event is scheduled.


## Blog theme and social-link follow-up

Removed the Twitter profile from the shared social list (including organisation
schema), Twitter event-sharing links and account-specific sharing metadata.
Generic sharing-card metadata remains available. Fixed the beginner page's
lowercasing of the shared Friday day name; technical field identifiers keep their
existing lowercase names.

The blog index and original article routes now share the site's warm-white page
header, charcoal typography, red accents, restrained cards and first-class footer
section. A reusable post card presents the latest article prominently, with
publication/update dates, author and reading time. Article pages retain their
content, author profile, table of contents, CTA and structured data, with a
comfortable reading width and related posts shown only when available.

Verification: production build and all 13 existing tests passed. Chrome checks
passed for the blog, article, beginner and event-detail pages at 320, 375, 768,
1024 and 1440px. Checks covered overflow, images, Friday capitalisation, removed
Twitter links, article navigation, keyboard-operated contents links and metadata
reset on return to the listing. Desktop and mobile layouts were visually checked.


## Weapons disclosure follow-up

Bokken and jo topic headings remain visible, while all seven sections containing
technique details start collapsed. The shared SyllabusDisclosure component provides
Show details/Hide details buttons with matching expanded state and controlled-panel
IDs. Sections open independently and reset on a fresh page load. The heading-only
Jo awase item has no empty disclosure. All existing technique text, grading panels,
URLs and weapons anchors are preserved.

The production build and all 13 existing tests passed. Browser checks verified
initially collapsed panels, Enter/Space operation, expanded state, reload behaviour,
no horizontal overflow at 320, 375, 768, 1024 and 1440px, and all four grade routes.

## Main logo follow-up

The supplied `public/img/leicester-aikikai-main-logo.png` is the source for the
shared ClubLogo component used in the header and footer. The original is retained.
Web derivatives remove transparent outer margins, preserve the blue/black/white
artwork and alpha background, and provide 160, 320 and 512px optimised PNG sizes. Palette PNGs were smaller
and kept the line artwork cleaner than the WebP alternatives. The 512px PNG is
also used by structured-data consumers. Intrinsic dimensions
reserve the correct image shape. The footer uses a white panel to keep the black
wordmark legible against its dark background.

Favicons use the two-person pictorial mark from the same source, without the tiny
wordmark: 16/32px PNGs, a 16/32/48px ICO, and a 180px white-backed Apple touch icon.
The old `/img/favicon.ico` URL also serves the new icon. Organisation and blog
publisher schema and the booklet sharing fallback now reference the new logo.
The owner's renamed old logo files remain intact.

Validation: build, all 13 tests and diff checks passed. Browser checks at 320,
375, 768, 1024 and 1440px confirmed header/footer imagery, responsive selection,
working home links, no overflow, served favicon image types, and updated local
organisation/article publisher logo metadata. Desktop and mobile branding were
visually inspected. ICO size variants were checked with Pillow.


## Logo-aligned blue accents

Replaced decorative red with muted blue (`#24658f`) across primary buttons, links,
current-navigation indicators, dividers, topic labels, the event banner and weapons
controls. Pale blue (`#edf4f8`) is limited to the event and joining panels; the
warm-white backgrounds and charcoal typography remain. Darker blue hover/active
states and a blue focus outline keep interactions consistent.

Red remains for contact-form errors, important cancellation notices and the
existing red-belt grading information. Grading colours and all technical content
are unchanged. Blue text/buttons provide a calculated contrast ratio of 6.3:1
against white, with links also exceeding 4.5:1 on the warm and pale-blue surfaces.

## SEO, discovery files and responsive images (19 October 2026)

Route metadata now lives in `src/data/route-metadata.js`, with concrete event,
article and instructor pages assembled by `src/utils/pages.js` from the existing
content data. The client and build share titles, descriptions, canonicals,
sharing tags and base structured data. Instructor breadcrumbs now point to the
real About page. Blog dates use the recorded calendar dates rather than invented
midnight timestamps. Syllabus schedule data reads shared venue/times and includes
Europe/London.

After Vite builds, `scripts/build-seo.mjs` generates initial HTML heads for all 27
HTML routes. Exact Netlify rewrites precede the original SPA fallback. The PDF and
contact form remain ordinary static files. The generated pages contain metadata
and JSON-LD before JavaScript runs; Vue still renders page bodies in the browser.
This is not full server rendering. Internal `/_pages/` URLs are excluded from
crawling and point canonically to the public URLs. Netlify normalises trailing
slashes, so the rewrite list does not attempt slash-only HTTP redirects. Vue
normalises route paths while preserving query parameters and fragments. Vite's
preview middleware mirrors the known-page rewrites for local checks.

The sitemap is generated from the same concrete page registry: 28 unique public
URLs including the PDF. It includes discoverable image URLs. Only the blog's
recorded update date is emitted as lastmod; a deployment date is not substituted
for an unknown content update date. Priority and changefreq were removed. XML
values are escaped. Robots has a single universal crawler rule and the canonical
sitemap reference.

`public/llms.txt` has been refreshed, with a linked `public/llms-full.txt` generated
before each build from club, event and blog data. The extended file includes the
page directory, practical class information, dated event records and blog text.
It preserves the child eligibility caveat, publication context, and deployment
requirement for the enquiry form. It makes no promise of search/AI rankings.
The curated overview still needs reviewing when club policy or site structure
changes; event and blog detail text updates automatically.

`ResponsiveImage.vue` uses a generated manifest with 320/640/960/up-to-1280px
variants, intrinsic dimensions, lazy loading below the main content and priority
loading for prominent images. Hero crops and wide article images have tailored
sizes. Images with an already smaller original retain it as the largest source.
The 18 unique photographic/poster sources total 5,021,296 bytes in their originals;
the largest selected web variants total 2,463,897 bytes, about 51% less. This is an
aggregate asset comparison, not a measured page-speed or Core Web Vitals result.
JPEG sharing variants have recorded dimensions and image types. Fingerprinted
image assets receive immutable cache headers. All original assets, logos,
favicons and legacy image URLs remain intact.

Image maintenance is optional: run `SHARP_MODULE=/path/to/sharp npm run images`
using a local Sharp installation, then build. Generated assets and the manifest
are committed; ordinary builds require no new image-processing dependency.

Validation: `npm run build`, all 18 Node tests, XML parsing and `git diff --check`
passed. Browser regression checks covered all 27 HTML routes at 320, 375, 768,
1024 and 1440px plus 29 internal links, keyboard interactions, event calendars,
unknown routes, image decoding and enquiry fallback. No horizontal overflow,
broken images or console errors were found. Additional browser checks verified
initial metadata with JavaScript disabled and responsive hero image selection.
Desktop/mobile home and event/article layouts were visually inspected.

Production Netlify rewrite behaviour, CDN headers, search indexing, sharing-cache
refreshes and field performance still need verification after deployment. No
public deployment, sitemap submission or Netlify account change was performed.

References: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[Netlify redirect options](https://docs.netlify.com/manage/routing/redirects/redirect-options/).
