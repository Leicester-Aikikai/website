import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Syllabus from '../views/Syllabus.vue'
import { setMeta, SITE_URL } from '../utils/seo.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Leicester Aikikai Dojo :: Traditional Aikido in the East Midlands :: レスター 合気会',
      description: 'Leicester Aikikai is a UK Aikikai Aikido dojo based in Leicester teaching traditional aikido. Learn this non-competitive martial art. First class FREE.',
      keywords: 'Leicester Aikido, Aikikai, traditional aikido, martial arts Leicester, aikido classes, self-defence, UKA, East Midlands',
      image: `${SITE_URL}/src/assets/img/leicester-aikikai-aylestone-leisure-centre.jpeg`
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
      image: `${SITE_URL}/src/assets/img/antonis-pavlakis-with-iain-cooper.webp`
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
      image: `${SITE_URL}/src/assets/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp`
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
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // Set dynamic meta tags for SEO
  const meta = to.meta || {}
  const url = `${SITE_URL}${to.path}`

  setMeta({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    image: meta.image,
    url: url,
    type: 'website'
  })

  next()
})

export default router

