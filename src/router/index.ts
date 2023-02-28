import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperiencePage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'nav-bar__link--active'
})

export default router
