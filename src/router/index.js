import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const basePath = import.meta.env.VITE_SUB || '/vue-pwa-bulma-template/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: basePath,
      name: 'home',
      component: HomeView
    },
    {
      path: basePath + 'about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active'
})

export default router
