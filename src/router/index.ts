import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.view.vue'
import ATKQuestion from '../views/ATKQuestion.view.vue'
import ATKResult from '../views/ATKResult.view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/atk/question',
    name: 'ATKQuestion',
    component: ATKQuestion
  },
  {
    path: '/atk/result',
    name: 'ATKResult',
    component: ATKResult
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
