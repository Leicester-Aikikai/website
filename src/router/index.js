import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Syllabus from '../views/Syllabus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Leicester Aikikai Dojo :: Traditional Aikido in the East Midlands :: レスター 合気会'
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {
      title: 'Leicester Aikikai Dojo :: Aikido Events'
    }
  },
  {
    path: '/syllabus',
    name: 'Syllabus',
    component: Syllabus,
    meta: {
      title: 'Leicester Aikikai Dojo :: Aikido Syllabus'
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
  document.title = to.meta.title || 'Leicester Aikikai Dojo'
  next()
})

export default router

