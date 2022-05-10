import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Debts from '@/views/Debts'
import Invests from '@/views/Invests'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Home
  },
  {
    path: '/invests',
    name: 'Invests',
    component: Invests
  },
  {
    path: '/debts',
    name: 'Debts',
    component: Debts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
