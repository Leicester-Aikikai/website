import { routeMetadata } from '../data/route-metadata.js'
import { getPage } from '../utils/pages.js'
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Events = () => import('../views/Events.vue')
const Blog = () => import('../views/Blog.vue')
const Syllabus = () => import('../views/Syllabus.vue')
const Instructor = () => import('../views/Instructor.vue')
import { setMeta, setJsonLd, SITE_URL } from '../utils/seo.js'
import { events } from '../data/events.js'
import { blogPosts, getBlogPostUrl } from '../data/blog.js'
import { getEventUrl } from '../utils/events.js'
const Beginners = () => import('../views/Beginners.vue')
const Classes = () => import('../views/Classes.vue')
const About = () => import('../views/About.vue')
const Resources = () => import('../views/Resources.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/beginners', name: 'Beginners', component: Beginners, meta: routeMetadata['/beginners'] },
  { path: '/classes', name: 'Classes', component: Classes, meta: routeMetadata['/classes'] },
  { path: '/about', name: 'About', component: About, meta: routeMetadata['/about'] },
  { path: '/resources', name: 'Resources', component: Resources, meta: routeMetadata['/resources'] },
  { path: '/contact', name: 'Contact', component: Contact, meta: routeMetadata['/contact'] },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: routeMetadata['/:pathMatch(.*)*'] },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: routeMetadata['/']
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: routeMetadata['/events']
  },
  {
    path: '/events/:date/:title',
    name: 'EventDetail',
    component: Events,
    meta: routeMetadata['/events/:date/:title']
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: routeMetadata['/blog']
  },
  {
    path: '/blog/:date/:title',
    name: 'BlogDetail',
    component: Blog,
    meta: routeMetadata['/blog/:date/:title']
  },
  {
    path: '/instructors/:name',
    name: 'Instructor',
    component: Instructor,
    meta: routeMetadata['/instructors/:name']
  },
  {
    path: '/syllabus',
    name: 'Syllabus',
    component: Syllabus,
    meta: routeMetadata['/syllabus']
  },
  {
    path: '/syllabus/6th-kyu',
    name: 'Syllabus6thKyu',
    component: Syllabus,
    meta: routeMetadata['/syllabus/6th-kyu']
  },
  {
    path: '/syllabus/5th-kyu',
    name: 'Syllabus5thKyu',
    component: Syllabus,
    meta: routeMetadata['/syllabus/5th-kyu']
  },
  {
    path: '/syllabus/4th-kyu',
    name: 'Syllabus4thKyu',
    component: Syllabus,
    meta: routeMetadata['/syllabus/4th-kyu']
  },
  {
    path: '/syllabus/3rd-kyu',
    name: 'Syllabus3rdKyu',
    component: Syllabus,
    meta: routeMetadata['/syllabus/3rd-kyu']
  },
  {
    path: '/docs/welcome-to-aikido-uka-booklet.pdf',
    name: 'WelcomeBooklet',
    beforeEnter() {
      window.location.href = '/docs/welcome-to-aikido-uka-booklet.pdf'
    },
    meta: routeMetadata['/docs/welcome-to-aikido-uka-booklet.pdf']
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
  const path = to.path === '/' ? '/' : to.path.replace(/\/+$/, '')
  if (path !== to.path) return { path, query: to.query, hash: to.hash, replace: true }
  if (to.name === 'EventDetail' && !events.some(event => getEventUrl(event) === to.path)) return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
  if (to.name === 'BlogDetail' && !blogPosts.some(post => getBlogPostUrl(post) === to.path)) return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
  if (to.name === 'Instructor' && to.params.name !== 'antonis-pavlakis') return { name: 'NotFound', params: { pathMatch: to.path.slice(1).split('/') }, replace: true }
  const page = getPage(to.path)
  setMeta(page?.meta || { ...to.meta, url: SITE_URL + to.path })
  setJsonLd(page?.schemas || [])
})

router.afterEach(async (to, from) => {
  if (from.matched.length && to.path !== from.path) {
    await nextTick()
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }
})

export default router
