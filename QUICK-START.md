# Quick Start Guide - Leicester Aikikai Website

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
Output will be in the `dist` folder.

---

## 📝 What You Need to Know

### Project Structure
```
src/
├── components/     # Reusable components (Navbar, Footer)
├── views/         # Page components (Home, Events, Syllabus)
├── router/        # Vue Router configuration
├── assets/        # Global styles and assets
└── main.js        # Application entry point
```

### Adding a New Page

1. **Create the view component**:
```bash
touch src/views/NewPage.vue
```

2. **Add the component**:
```vue
<template>
  <div class="new-page">
    <h1>New Page</h1>
  </div>
</template>

<script>
export default {
  name: 'NewPage'
}
</script>
```

3. **Add route in `src/router/index.js`**:
```javascript
import NewPage from '../views/NewPage.vue'

const routes = [
  // ...existing routes
  {
    path: '/new-page',
    name: 'NewPage',
    component: NewPage,
    meta: {
      title: 'New Page Title'
    }
  }
]
```

4. **Add link in Navbar** (`src/components/Navbar.vue`):
```vue
<li class="nav-item">
  <router-link to="/new-page" class="nav-link">
    New Page
  </router-link>
</li>
```

### Editing Existing Content

#### Home Page Content
Edit: `src/views/Home.vue`

#### Events
Edit: `src/views/Events.vue`

#### Syllabus
Edit: `src/views/Syllabus.vue`

#### Navigation
Edit: `src/components/Navbar.vue`

#### Footer
Edit: `src/components/Footer.vue`

#### Global Styles
Edit: `src/assets/styles/main.css`

### Adding Images

1. Place images in `/public/img/` folder
2. Reference in components:

```vue
<img src="/src/assets/img/your-image.jpg" alt="Description"/>
```

### Changing Colors

Colors are defined in `src/assets/styles/main.css`:

```css
:root {
  --gradient-start: #2465c7;  /* Change this */
  --gradient-end: #525bd3;    /* Change this */
  --primary-color: #2465c7;
  --secondary-color: #525bd3;
}
```

### Using Bootstrap Components

Bootstrap 5 is already included. Use any Bootstrap component:

```vue
<template>
  <!-- Button -->
  <button class="btn btn-primary">Click Me</button>
  
  <!-- Card -->
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">Card content</p>
    </div>
  </div>
  
  <!-- Alert -->
  <div class="alert alert-info" role="alert">
    Information message
  </div>
</template>
```

Docs: https://getbootstrap.com/docs/5.3/

### Common Tasks

#### Update Social Media Links
File: `src/components/Footer.vue`

```vue
<a href="https://facebook.com/your-page">Facebook</a>
```

#### Change Navigation Links
File: `src/components/Navbar.vue`

#### Add Meta Tags
File: `index.html` (root) or `src/router/index.js` (per page)

#### Change Site Title
Files: `index.html` and `src/router/index.js`

## 🔧 Development Tips

### Hot Module Replacement (HMR)
Changes to `.vue` files are instantly reflected in the browser without refresh.

### Vue DevTools
Install the Vue DevTools browser extension for better debugging:
- Chrome: https://chrome.google.com/webstore
- Firefox: https://addons.mozilla.org/en-US/firefox/

### VS Code Extensions (Recommended)
- Volar (Vue Language Features)
- ESLint
- Prettier

### Console Warnings
Some warnings are normal during development. Production builds will be clean.

## 📱 Testing Responsive Design

### In Browser
1. Open browser DevTools (F12)
2. Click device toggle button
3. Test different screen sizes

### Common Breakpoints
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Images Not Showing
- Check file path (should start with `/public/`)
- Verify image exists in `/public/img/`
- Check browser console for 404 errors

## 📚 Learn More

- **Vue.js 3**: https://vuejs.org/guide/
- **Vue Router**: https://router.vuejs.org/
- **Bootstrap 5**: https://getbootstrap.com/docs/5.3/
- **Vite**: https://vitejs.dev/guide/

## 🆘 Need Help?

1. Check the browser console for errors (F12)
2. Check terminal for build errors
3. Review the documentation files:
   - `README-VUEJS.md` - Full documentation
   - `REFACTOR-SUMMARY.md` - What was changed
   - `DEPLOYMENT.md` - How to deploy

## ✅ Checklist for Going Live

- [ ] Test all pages and links
- [ ] Check mobile responsiveness
- [ ] Verify images load
- [ ] Test navigation
- [ ] Update contact information
- [ ] Build for production (`npm run build`)
- [ ] Test production build (`npm run preview`)
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Set up custom domain (if needed)
- [ ] Enable HTTPS
- [ ] Add analytics (optional)

---

**Quick Commands Reference:**

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

That's it! Happy coding! 🎉

