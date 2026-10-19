import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Events = () => import('../views/Events.vue')
const Blog = () => import('../views/Blog.vue')
const Syllabus = () => import('../views/Syllabus.vue')
const Instructor = () => import('../views/Instructor.vue')
import { setMeta, setJsonLd, getBreadcrumbSchema, getPersonSchema, SITE_URL } from '../utils/seo.js'
import { events } from '../data/events.js'
import { club } from '../data/club.js'
import { blogPosts, getBlogPostUrl } from '../data/blog.js'
import { getEventUrl, getEventSchema } from '../utils/events.js'
const Beginners = () => import('../views/Beginners.vue')
const Classes = () => import('../views/Classes.vue')
const About = () => import('../views/About.vue')
const Resources = () => import('../views/Resources.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/beginners', name: 'Beginners', component: Beginners, meta: { title: 'Beginner Aikido Classes Leicester | First Class Free', description: 'Start aikido in Leicester with a free introductory lesson. Find out what to wear, what to expect and how to join our friendly Friday class.', label: 'Start Aikido' } },
  { path: '/classes', name: 'Classes', component: Classes, meta: { title: 'Aikido Classes & Prices Leicester | Leicester Aikikai', description: 'Friday aikido classes, 7:00pm–9:00pm at Aylestone Leisure Centre. See monthly training fees, annual UKA membership and free first-class information.', label: 'Classes & Prices' } },
  { path: '/about', name: 'About', component: About, meta: { title: 'About Leicester Aikikai | Traditional Aikido Since 2013', description: 'Meet Leicester Aikikai, founded in May 2013, and chief instructor Antonios Pavlakis, 4th Dan Fukushidoin. Learn about our history and UKA affiliation.', label: 'About Us' } },
  { path: '/resources', name: 'Resources', component: Resources, meta: { title: 'Aikido Student Resources & Grading | Leicester Aikikai', description: 'Find Leicester Aikikai’s grading syllabus, bokken and jo training, aikido terminology, beginner booklet and dojo notes in one place.', label: 'Student Resources' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact Leicester Aikikai | First-Class Enquiries', description: 'Ask about your first free aikido class at Leicester Aikikai. Send the club an enquiry, find Aylestone Leisure Centre and check Friday training information.', label: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { title: 'Page Not Found | Leicester Aikikai', description: 'Find your way back to Leicester Aikikai classes, beginner information and student resources.', noindex: true } },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Aikido Classes in Leicester | Leicester Aikikai Dojo',
      description: 'Learn traditional Japanese aikido in Leicester. Friendly classes for beginners and experienced students every Friday. First class free at Aylestone Leisure Centre.',
      keywords: 'Leicester Aikido, Aikikai, traditional aikido, martial arts Leicester, aikido classes, self-defence, UKA, East Midlands',
      image: `${SITE_URL}/img/training-1280.webp`
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      title: 'Aikido Events & Courses :: Leicester Aikikai Dojo',
      description: 'Upcoming and past aikido events, courses, and seminars at Leicester Aikikai. Join our dojo courses with guest instructors from UK Aikikai and beyond.',
      keywords: 'aikido events Leicester, aikido courses, aikido seminars, martial arts events, aikido training Leicester',
      image: `${SITE_URL}/img/antonis-pavlakis-with-iain-cooper.webp`
    }
  },
  {
    path: '/events/:date/:title',
    name: 'EventDetail',
    component: Events,
    meta: {
      title: 'Aikido Event :: Leicester Aikikai Dojo',
      description: 'Aikido event details at Leicester Aikikai. Join our dojo courses with guest instructors from UK Aikikai and beyond.',
      keywords: 'aikido events Leicester, aikido courses, aikido seminars, martial arts events, aikido training Leicester',
      image: `${SITE_URL}/img/antonis-pavlakis-with-iain-cooper.webp`
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog | Leicester Aikikai Dojo',
      description: 'Aikido articles, beginner guidance, and dojo notes from Leicester Aikikai. Read practical posts about training, ukemi, consistency, and life on the mat.',
      keywords: 'Leicester Aikikai blog, aikido blog, aikido training, ukemi, beginner aikido, traditional aikido, martial arts Leicester',
      image: `${SITE_URL}/img/aylestone-leisure-centre-mat-space.jpeg`
    }
  },
  {
    path: '/blog/:date/:title',
    name: 'BlogDetail',
    component: Blog,
    meta: {
      title: 'Aikido Blog Article :: Leicester Aikikai Dojo',
      description: 'Read aikido articles and dojo notes from Leicester Aikikai. Practical guidance for beginners, training insights, and traditional aikido reflections.',
      keywords: 'Leicester Aikikai blog article, aikido training article, ukemi, beginner aikido, traditional aikido, martial arts Leicester',
      image: `${SITE_URL}/img/aylestone-leisure-centre-mat-space.jpeg`,
      type: 'article'
    }
  },
  {
    path: '/instructors/:name',
    name: 'Instructor',
    component: Instructor,
    meta: {
      title: 'Instructor Profile :: Leicester Aikikai Dojo',
      description: 'Meet our aikido instructors at Leicester Aikikai. Learn about their experience, qualifications, and teaching background.',
      keywords: 'aikido instructor Leicester, aikido teacher, martial arts instructor, aikido sensei',
      image: `${SITE_URL}/img/leicester-aikikai-antonios-pavlakis-2016.jpg`
    }
  },
  {
    path: '/syllabus',
    name: 'Syllabus',
    component: Syllabus,
    meta: {
      title: 'Aikido Syllabus & Grading :: Leicester Aikikai Dojo',
      description: 'Complete aikido syllabus including taijutsu (body art), weapons training (bokken, jo), kyu grades, and examination requirements at Leicester Aikikai.',
      keywords: 'aikido syllabus, aikido grading, aikido kyu grades, aikido weapons, bokken, jo, aikido techniques',
      image: `${SITE_URL}/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`
    }
  },
  {
    path: '/syllabus/6th-kyu',
    name: 'Syllabus6thKyu',
    component: Syllabus,
    meta: {
      title: '6th Kyu Aikido Grading Syllabus :: Leicester Aikikai Dojo',
      description: 'Complete 6th kyu (red belt) aikido syllabus including solo exercises, partner movements, tachi waza, suwari waza techniques at Leicester Aikikai.',
      keywords: 'aikido 6th kyu, aikido red belt, aikido grading, aikido techniques, ikkyo, iriminage, shihonage',
      image: `${SITE_URL}/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`,
      grade: '6th-kyu'
    }
  },
  {
    path: '/syllabus/5th-kyu',
    name: 'Syllabus5thKyu',
    component: Syllabus,
    meta: {
      title: '5th Kyu Aikido Grading Syllabus :: Leicester Aikikai Dojo',
      description: '5th kyu (yellow belt) aikido syllabus with techniques including nikyo, kotegaeshi, shiho nage from various attacks at Leicester Aikikai.',
      keywords: 'aikido 5th kyu, aikido yellow belt, nikyo, kotegaeshi, shiho nage, aikido grading',
      image: `${SITE_URL}/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`,
      grade: '5th-kyu'
    }
  },
  {
    path: '/syllabus/4th-kyu',
    name: 'Syllabus4thKyu',
    component: Syllabus,
    meta: {
      title: '4th Kyu Aikido Grading Syllabus :: Leicester Aikikai Dojo',
      description: '4th kyu (orange belt) aikido syllabus featuring sankyo, yonkyo, rokkyo and advanced throwing techniques from multiple attacks.',
      keywords: 'aikido 4th kyu, aikido orange belt, sankyo, yonkyo, rokkyo, aikido grading',
      image: `${SITE_URL}/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`,
      grade: '4th-kyu'
    }
  },
  {
    path: '/syllabus/3rd-kyu',
    name: 'Syllabus3rdKyu',
    component: Syllabus,
    meta: {
      title: '3rd Kyu Aikido Grading Syllabus :: Leicester Aikikai Dojo',
      description: '3rd kyu (green belt) aikido syllabus including gokyo, hanmi handachi waza, and ushiro waza (attacks from behind) techniques.',
      keywords: 'aikido 3rd kyu, aikido green belt, gokyo, hanmi handachi, ushiro waza, aikido grading',
      image: `${SITE_URL}/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`,
      grade: '3rd-kyu'
    }
  },
  {
    path: '/docs/welcome-to-aikido-uka-booklet.pdf',
    name: 'WelcomeBooklet',
    beforeEnter() {
      window.location.href = '/docs/welcome-to-aikido-uka-booklet.pdf'
    },
    meta: {
      title: 'Welcome to Aikido - UKA Booklet :: Leicester Aikikai Dojo',
      description: 'Download the official UK Aikikai Welcome to Aikido booklet. An introduction to traditional aikido practice, etiquette, and philosophy.',
      keywords: 'aikido booklet, aikido guide, UK Aikikai, aikido introduction, aikido etiquette, aikido beginner guide',
      image: `${SITE_URL}${club.logo.image}`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(to => {
  const meta = { ...to.meta }
  let schemas = [getBreadcrumbSchema(to.path, meta.label || meta.title?.split(' :: ')[0].split(' | ')[0] || String(to.name))]
  if (to.name === 'EventDetail') {
    const event = events.find(event => getEventUrl(event) === to.path)
    if (!event) return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
    meta.title = `${event.title} | Leicester Aikikai Dojo`
    meta.description = event.description
    meta.image = `${SITE_URL}${event.image || '/img/training-1280.webp'}`
    meta.type = 'article'
    schemas = [getBreadcrumbSchema(to.path, event.title, { label: 'Events', path: '/events' }), getEventSchema(event, SITE_URL)]
  }
  if (to.name === 'BlogDetail' && !blogPosts.some(post => getBlogPostUrl(post) === to.path)) return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
  if (to.name === 'Instructor' && to.params.name !== 'antonis-pavlakis') return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
  setMeta({ ...meta, url: `${SITE_URL}${to.path}`, keywords: meta.keywords || 'aikido Leicester, beginner aikido Leicester, traditional aikido Leicester' })
  setJsonLd(to.path === '/' ? [getPersonSchema()] : meta.noindex ? [] : schemas)
})

router.afterEach(async (to, from) => {
  if (from.matched.length && to.path !== from.path) {
    await nextTick()
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }
})

export default router
