import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('../views/text.vue')
  },
  {
    path: '/password',
    name: 'Password',
    component: () => import('../views/password.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/select.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/checkbox.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/radio.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
