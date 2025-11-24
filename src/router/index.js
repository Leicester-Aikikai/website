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
      image: `${SITE_URL}/img/leicester-aikikai-aylestone-leisure-centre.jpeg`
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
      image: `${SITE_URL}/img/Leicester-Aikikai-Dojo-Logo.png`
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

