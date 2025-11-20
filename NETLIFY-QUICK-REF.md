# Netlify Deployment Quick Reference

## ⚡ Quick Deploy

```bash
# Build and deploy in one step
npm run build
netlify deploy --prod

# OR just push to Git (if connected)
git push origin main
```

## 📋 Pre-Deployment Checklist

- [x] `netlify.toml` exists in root
- [x] `public/_redirects` exists
- [x] Vue Router uses `createWebHistory()`
- [x] Build command: `npm run build`
- [x] Publish directory: `dist`

## 🔧 Configuration Files

### netlify.toml (Root)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### public/_redirects
```
/*    /index.html   200
```

## ✅ Routes Configured

- `/` → Home
- `/events` → Events  
- `/syllabus` → Syllabus
- `/#*` → Hash anchors (our-journey, location, costs, faq)

## 🧪 Test Before Deploy

```bash
npm run build
npm run preview

# Test these URLs:
# http://localhost:4173/
# http://localhost:4173/events
# http://localhost:4173/syllabus
```

## 🚀 Deploy Methods

### 1. Git Integration (Auto-deploy)
```bash
git push origin main
# Netlify deploys automatically
```

### 2. CLI Deploy
```bash
netlify deploy --prod
```

### 3. Drag & Drop
```bash
npm run build
# Drag /dist to https://app.netlify.com/drop
```

## 🔍 Post-Deploy Verification

- [ ] Direct URL access works
- [ ] Navigation works
- [ ] Page refresh doesn't 404
- [ ] SEO meta tags update per page
- [ ] Assets load correctly
- [ ] No console errors

## 🛠️ Common Issues

**404 on routes?**
→ Check `netlify.toml` and `_redirects` are in repo

**Blank pages?**
→ Check browser console for errors

**Assets not loading?**
→ Use absolute paths: `/src/assets/img/...`

**Meta tags not updating?**
→ Check router's `beforeEach` hook

## 📚 Documentation

- Full Guide: `NETLIFY-CONFIG.md`
- Deployment: `DEPLOYMENT.md`
- SEO: `SEO.md`

---

**Status:** ✅ Ready for Netlify  
**Last Updated:** November 20, 2025

