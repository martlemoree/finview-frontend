import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libraries from '@/views/Libraries'
import About from '@/views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/libraries',
    name: 'Libraries',
    component: Libraries
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
