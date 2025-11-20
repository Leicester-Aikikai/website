# Deployment Guide

This guide explains how to deploy the Leicester Aikikai Vue.js website to various hosting platforms.

## Build Process

Before deploying, always build the production version:

```bash
npm run build
```

This creates an optimized production build in the `/dist` directory.

## Deployment Options

### Option 1: Netlify (Recommended - Free Tier Available)

**Advantages:**
- Free hosting for static sites
- Automatic HTTPS
- Continuous deployment from Git
- Built-in CDN
- Simple setup

**Steps:**

1. **Via Netlify Drop (Easiest)**
   - Build the site: `npm run build`
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Done! Your site is live

2. **Via Git Integration (Best for continuous deployment)**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

**Configuration File** (`netlify.toml` - optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 2: Vercel (Free Tier Available)

**Advantages:**
- Free for personal projects
- Automatic HTTPS
- Git integration
- Edge network
- Simple deployment

**Steps:**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site is deployed!

**Configuration File** (`vercel.json` - optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option 3: GitHub Pages

**Advantages:**
- Free hosting
- Integrated with GitHub
- Simple workflow

**Steps:**

1. Install gh-pages: `npm install -D gh-pages`

2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/leicester-aikikai-website/', // Your repo name
  // ... rest of config
})
```

4. Deploy: `npm run deploy`

### Option 4: Traditional Web Hosting (cPanel, FTP, etc.)

**Steps:**

1. Build the site: `npm run build`
2. Upload the contents of the `dist` folder to your web host
3. Ensure the web server is configured to serve `index.html` for all routes

**Apache `.htaccess` file** (place in the root of your site):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx configuration**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Option 5: AWS S3 + CloudFront

**For larger scale deployments**

**Steps:**

1. Build: `npm run build`
2. Create S3 bucket
3. Enable static website hosting
4. Upload `dist` folder contents
5. Set up CloudFront distribution
6. Configure error pages to redirect to `index.html`

## Important Configuration for SPA Routing

Since this is a Single Page Application (SPA) using Vue Router with HTML5 history mode, you need to configure your server to redirect all routes to `index.html`. This is crucial for direct URL access and page refreshes to work correctly.

### Why is this needed?

When a user visits `/events` directly or refreshes the page, the server looks for an `events.html` file. Since we're using client-side routing, we need to serve `index.html` for all routes and let Vue Router handle the navigation.

## Environment Variables (if needed in future)

Create a `.env` file in the root:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Leicester Aikikai
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Custom Domain Setup

### For Netlify/Vercel:
1. Add custom domain in dashboard
2. Update DNS records as instructed
3. SSL is automatic

### For GitHub Pages:
1. Add `CNAME` file to `/public` folder with your domain
2. Configure DNS:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `<username>.github.io`

### DNS Records Example:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

## Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly (`/`, `/events`, `/syllabus`)
- [ ] Navigation works
- [ ] Images load properly
- [ ] Links work (internal and external)
- [ ] Mobile responsiveness
- [ ] HTTPS is enabled
- [ ] Social media links work
- [ ] Direct URL access works (test by visiting `/events` directly)
- [ ] Page refresh doesn't break the site
- [ ] Back/forward browser buttons work

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Enable Gzip/Brotli compression** (usually automatic on modern hosts)
2. **Set cache headers** for static assets
3. **Use a CDN** (Netlify/Vercel include this)
4. **Optimize images further** if needed

## Monitoring

Consider adding:
- Google Analytics
- Error tracking (Sentry)
- Uptime monitoring (UptimeRobot)

## Rollback Strategy

If something goes wrong:

1. **Netlify/Vercel**: Use the dashboard to rollback to a previous deployment
2. **GitHub Pages**: Revert the Git commit and redeploy
3. **Traditional Hosting**: Keep a backup of the previous `dist` folder

## Troubleshooting

### 404 Errors on Routes
- Ensure server redirects are configured
- Check `.htaccess` or nginx config

### Images Not Loading
- Verify `/public` folder contents are included in build
- Check file paths in components

### Blank Page
- Check browser console for errors
- Verify build completed successfully
- Check that `dist/index.html` exists

### Slow Loading
- Enable compression
- Check image sizes
- Verify CDN is working

## Quick Deploy Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Netlify (with Netlify CLI)
netlify deploy --prod

# Deploy to Vercel
vercel --prod

# Deploy to GitHub Pages
npm run deploy
```

## Support

If you encounter deployment issues:
- Check the hosting platform's documentation
- Verify the build completes successfully locally
- Test the production build locally with `npm run preview`
- Check server logs for errors

---

**Note**: The original site files are preserved in `/public` directory. The new Vue.js site is completely separate and doesn't affect the original files.

