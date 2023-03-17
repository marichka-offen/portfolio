import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/WorkPage.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPage.vue')
  },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundPage.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'nav-bar__link--active'
})

export default router
