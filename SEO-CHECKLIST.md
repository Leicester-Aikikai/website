# SEO Validation Checklist

Use this checklist to validate the SEO implementation before deployment.

## Pre-Deployment Checklist

### ✅ Meta Tags
- [ ] Check `index.html` has all base meta tags
- [ ] Verify canonical URL is correct domain
- [ ] Open Graph image URL is absolute (includes domain)
- [ ] Twitter card type is `summary_large_image`
- [ ] Language set to `en-GB`
- [ ] Theme color matches brand (`#2465c7`)

### ✅ Structured Data
- [ ] Validate with https://validator.schema.org/
- [ ] Check Google Rich Results Test passes
- [ ] Organization schema has correct address
- [ ] GeoCoordinates are accurate
- [ ] Opening hours are current
- [ ] Social media links are active

### ✅ Technical Files
- [ ] `robots.txt` exists in `/public/`
- [ ] `robots.txt` allows all user agents
- [ ] Sitemap URL in `robots.txt` matches domain
- [ ] `sitemap.xml` exists in `/public/`
- [ ] All routes are in sitemap
- [ ] Sitemap URLs match canonical domain

### ✅ Dynamic SEO
- [ ] Router sets meta tags on navigation
- [ ] Each route has unique title
- [ ] Each route has unique description
- [ ] Canonical URL updates per route
- [ ] Home page has FAQ schema
- [ ] Events page has Event schema
- [ ] Syllabus page has Course schema

### ✅ Images
- [ ] All images have descriptive alt text
- [ ] Hero images have `fetchpriority="high"` attribute
- [ ] Below-fold images have `loading="lazy"`
- [ ] Image URLs in OG tags are absolute
- [ ] Favicon is present and correct

### ✅ Accessibility
- [ ] Navbar wrapped in `<header>`
- [ ] Main content in `<main id="main-content">`
- [ ] Footer uses `<footer role="contentinfo">`
- [ ] All links have descriptive text or aria-label
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Skip-to-content link present

### ✅ Performance
- [ ] Build completes successfully
- [ ] No console errors
- [ ] Images optimized (WebP where possible)
- [ ] Critical resources preloaded
- [ ] JavaScript bundles are reasonable size

### ✅ Content
- [ ] All contact information is accurate
- [ ] Social media links work
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Phone numbers/addresses are up to date
- [ ] Japanese text has English context

## Post-Deployment Checklist

### Search Engine Submission
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership in both platforms

### Social Media Validation
- [ ] Test Facebook sharing with Debugger
- [ ] Test Twitter card with Validator
- [ ] Check LinkedIn preview
- [ ] Share test post on each platform

### Testing Tools
- [ ] Run Google Lighthouse audit (aim for 90+ SEO score)
- [ ] Check mobile-friendliness
- [ ] Validate structured data with Google
- [ ] Test rich results preview
- [ ] Check page speed insights

### Monitoring Setup
- [ ] Enable Google Search Console monitoring
- [ ] Set up Bing Webmaster monitoring
- [ ] Configure Google Analytics (if using)
- [ ] Set up Core Web Vitals monitoring
- [ ] Monitor index coverage

## Quick Tests

### Manual Browser Test
```
1. Open site in incognito/private mode
2. Check page title in browser tab
3. View page source (Ctrl+U / Cmd+U)
4. Verify meta tags are present
5. Look for JSON-LD scripts
6. Check robots.txt: yourdomain.com/robots.txt
7. Check sitemap: yourdomain.com/sitemap.xml
```

### Social Media Preview Test
```
1. Copy any page URL
2. Paste into Facebook Sharing Debugger
3. Verify image, title, description show correctly
4. Repeat for Twitter Card Validator
5. Test with LinkedIn post preview
```

### Structured Data Test
```
1. Copy page URL
2. Paste into Google Rich Results Test
3. Verify no errors
4. Check which rich results are eligible
5. Test each page (home, events, syllabus)
```

### Mobile Test
```
1. Open site on mobile device
2. Check layout is responsive
3. Verify images load properly
4. Test navigation menu
5. Check social media links work
```

## Common Issues & Solutions

### Issue: Meta tags not updating between routes
**Solution**: Check router's `beforeEach` hook is calling `setMeta()`

### Issue: Structured data errors
**Solution**: Validate JSON-LD syntax at validator.schema.org

### Issue: Images not showing in social previews
**Solution**: Ensure image URLs are absolute (include full domain)

### Issue: Sitemap not found
**Solution**: Check `/public/sitemap.xml` exists and run `npm run sitemap`

### Issue: Robots.txt not working
**Solution**: Verify `/public/robots.txt` exists and sitemap URL is correct

### Issue: Canonical URL wrong
**Solution**: Update `SITE_URL` in `/src/utils/seo.js`

## Success Criteria

Your SEO implementation is successful when:

- ✅ All pages have unique, descriptive titles
- ✅ All pages have compelling meta descriptions
- ✅ Structured data validates with no errors
- ✅ Social media previews show correct image/text
- ✅ Sitemap is accessible and includes all pages
- ✅ Robots.txt allows crawlers
- ✅ Google Lighthouse SEO score is 90+
- ✅ Mobile-friendly test passes
- ✅ Pages start appearing in search results (within 1-2 weeks)
- ✅ Rich results appear (where eligible)

## Maintenance Schedule

### Weekly
- Check Search Console for indexing issues
- Monitor site performance
- Review any crawl errors

### Monthly
- Update sitemap if new pages added
- Review and update meta descriptions
- Check for broken links
- Update event structured data

### Quarterly
- Run full SEO audit
- Review keyword performance
- Update content based on insights
- Check competitor SEO

---

**Last Updated**: November 20, 2025  
**Next Review**: December 20, 2025

