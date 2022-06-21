import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Music from '../views/Music.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
