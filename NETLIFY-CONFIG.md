# Netlify Configuration Guide

This document explains the Netlify configuration for the Leicester Aikikai website to ensure proper Vue Router functionality.

## Overview

The Leicester Aikikai website is a Single Page Application (SPA) built with Vue 3 and Vue Router using HTML5 history mode. This requires special server configuration to ensure all routes work correctly on Netlify.

## Files Configured

### 1. `netlify.toml` (Root Level)
Primary configuration file for Netlify. Located at project root.

**Key Features:**
- ✅ Build command configuration
- ✅ Publish directory specification
- ✅ SPA routing redirect (wildcard to index.html)
- ✅ Security headers
- ✅ Cache headers for static assets
- ✅ CORS configuration

### 2. `public/_redirects` (Backup Method)
Alternative/supplementary redirect configuration. Automatically copied to dist during build.

**Key Features:**
- ✅ Simple wildcard redirect to index.html
- ✅ Optional www → non-www redirect
- ✅ Optional HTTP → HTTPS redirect

## Why Both Files?

Both `netlify.toml` and `_redirects` serve similar purposes, but:

1. **netlify.toml** is more comprehensive (build config + headers + redirects)
2. **_redirects** is simpler and acts as a backup
3. Having both ensures maximum compatibility
4. Netlify prioritizes `netlify.toml` but will use `_redirects` if needed

## How SPA Routing Works

### The Problem:
```
User visits: https://leicesteraikikai.co.uk/events
Server looks for: /events.html (doesn't exist)
Result: 404 Error ❌
```

### The Solution:
```
User visits: https://leicesteraikikai.co.uk/events
Netlify redirects to: /index.html (with status 200)
Vue Router loads: Events component
Result: Page loads correctly ✅
```

## Configuration Breakdown

### netlify.toml Structure

```toml
[build]
  command = "npm run build"    # Build command
  publish = "dist"             # Output directory

[[redirects]]
  from = "/*"                  # Match all routes
  to = "/index.html"           # Serve index.html
  status = 200                 # Return 200 (not 301/302)
```

**Critical:** Status `200` is essential for SPA routing! 
- ❌ `301/302` would show in browser URL and break routing
- ✅ `200` keeps the URL and lets Vue Router handle it

### Security Headers

The configuration includes security headers:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Benefits:**
- Prevents clickjacking attacks
- Enables XSS protection
- Prevents MIME-type sniffing
- Controls referrer information

### Cache Headers

Optimizes performance with aggressive caching:

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Benefits:**
- Assets cached for 1 year (31536000 seconds)
- `immutable` flag tells browser file will never change
- Vite's hash-based filenames make this safe
- Significantly improves repeat visit performance

## Vue Router Configuration

The router is configured correctly for Netlify:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),  // ✅ Correct for Netlify
  routes,
  // ...
})
```

**Important:**
- ✅ `createWebHistory()` - Uses HTML5 history mode (clean URLs)
- ❌ `createWebHashHistory()` - Would use hash-based routing (#/events)

## Routes Configured

All routes are properly handled:

1. **Home:** `/` → Home.vue
2. **Events:** `/events` → Events.vue
3. **Syllabus:** `/syllabus` → Syllabus.vue
4. **Hash anchors:** `/#our-journey`, `/#location`, `/#costs`, `/#faq`

## Testing Locally

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Then test these URLs:
- http://localhost:4173/
- http://localhost:4173/events
- http://localhost:4173/syllabus

All should load correctly!

## Deployment Steps

### Method 1: Git Integration (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Netlify auto-detects `netlify.toml`
4. Deploy automatically

**Configuration:** Already set in `netlify.toml`!

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Method 3: Manual Deploy

```bash
# Build
npm run build

# Drag and drop /dist folder to Netlify Drop
# https://app.netlify.com/drop
```

## Verification Checklist

After deployment, verify:

### ✅ Direct URL Access
- [ ] https://yourdomain.com/ loads
- [ ] https://yourdomain.com/events loads (not 404)
- [ ] https://yourdomain.com/syllabus loads (not 404)

### ✅ Navigation
- [ ] Navbar links work
- [ ] Hash anchors work (/#our-journey)
- [ ] Back/forward browser buttons work

### ✅ Page Refresh
- [ ] Can refresh on /events (doesn't 404)
- [ ] Can refresh on /syllabus (doesn't 404)
- [ ] URL stays correct after refresh

### ✅ SEO & Meta Tags
- [ ] Each page has correct title
- [ ] Each page has correct meta description
- [ ] Open Graph tags update per route
- [ ] Canonical URLs are correct

### ✅ Performance
- [ ] Assets load quickly
- [ ] Images use proper caching
- [ ] No console errors

## Troubleshooting

### Issue: 404 on Direct URL Access

**Problem:** Visiting `/events` directly shows 404

**Solution:**
1. Check `netlify.toml` exists in repository root
2. Verify `_redirects` exists in `/public` folder
3. Confirm build output includes `_redirects` in `/dist`
4. Check Netlify deploy logs for errors

### Issue: Blank Page on Routes

**Problem:** Routes load but show blank page

**Solution:**
1. Check browser console for errors
2. Verify Vue Router is using `createWebHistory()`
3. Ensure component imports are correct
4. Check for JavaScript errors in components

### Issue: Assets Not Loading

**Problem:** Images/CSS don't load

**Solution:**
1. Check asset paths (should be absolute `/src/assets/...`)
2. Verify Vite build includes assets
3. Check browser network tab for 404s
4. Ensure no typos in asset filenames

### Issue: Meta Tags Not Updating

**Problem:** SEO meta tags same on all pages

**Solution:**
1. Check router's `beforeEach` hook is running
2. Verify `setMeta()` function is called
3. Open browser dev tools and inspect `<head>`
4. Check for JavaScript errors

## Best Practices

### ✅ DO:
- Use `createWebHistory()` for clean URLs
- Keep `netlify.toml` in repository root
- Keep `_redirects` in `/public` folder
- Test routes locally before deploying
- Use absolute paths for assets

### ❌ DON'T:
- Use `createWebHashHistory()` (creates # URLs)
- Remove or modify the redirect status (must be 200)
- Forget to commit `netlify.toml`
- Use relative paths for assets
- Deploy without testing locally

## Additional Resources

- [Netlify SPA Configuration](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
- [Vue Router HTML5 Mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- [Netlify Headers](https://docs.netlify.com/routing/headers/)
- [Vite Production Build](https://vitejs.dev/guide/build.html)

## Summary

✅ **Configuration Complete**
- `netlify.toml` created with full configuration
- `public/_redirects` created as backup
- Vue Router using correct history mode
- All routes tested and working
- Security headers configured
- Cache headers optimized
- SEO maintained across routes

The website is **fully compatible with Netlify** and ready for deployment!

---

**Last Updated:** November 20, 2025  
**Status:** ✅ Production Ready  
**Netlify Compatible:** ✅ Yes

