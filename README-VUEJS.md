# Leicester Aikikai Website - Vue.js 3 + Bootstrap 5

This is a refactored version of the Leicester Aikikai website using Vue.js 3, Vue Router, and Bootstrap 5.

## Features

- ✅ **Vue.js 3** - Modern reactive framework with Composition API support
- ✅ **Vue Router** - Client-side routing for single-page application
- ✅ **Bootstrap 5** - Responsive mobile-first framework
- ✅ **Vite** - Fast build tool and development server
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap grid system
- ✅ **Same Color Scheme** - Maintains the original blue gradient (#2465c7 to #525bd3)
- ✅ **All Original Images** - Uses the same images from the original site

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── public/                 # Static assets (images, PDFs, etc.)
│   ├── img/               # All original images
│   └── docs/              # Documents
├── src/
│   ├── main.js            # Application entry point
│   ├── App.vue            # Root component
│   ├── router/
│   │   └── index.js       # Vue Router configuration
│   ├── components/
│   │   ├── Navbar.vue     # Navigation component
│   │   └── Footer.vue     # Footer component
│   ├── views/
│   │   ├── Home.vue       # Home page
│   │   ├── Events.vue     # Events page
│   │   └── Syllabus.vue   # Syllabus page
│   └── assets/
│       └── styles/
│           └── main.css   # Global styles
```

## Pages

- **Home** (`/`) - Welcome page with journey, instructor info, location, costs, and FAQ
- **Events** (`/events`) - List of dojo courses and events
- **Syllabus** (`/syllabus`) - Weapons and body art syllabus

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build for Production

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Accessibility Features

- Skip to main content link
- Semantic HTML5 elements (nav, main, section, article, footer)
- ARIA labels for interactive elements
- Proper heading hierarchy
- Keyboard navigation support
- Alt text for images
- High contrast colors
- Focus indicators

## Color Scheme

The website maintains the original gradient color scheme:
- Primary: #2465c7
- Secondary: #525bd3
- Gradient: linear-gradient(90deg, #2465c7 0%, #525bd3 100%)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Original Features Maintained

- Same visual design and layout
- Blue gradient color scheme
- All original images and content
- Wave dividers
- Navigation scroll effects
- Pricing cards
- Event timeline
- FAQ section
- Social media links

## License

Copyright © Antonis Pavlakis

