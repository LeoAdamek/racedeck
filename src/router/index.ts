import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/tracks/:id',
      name: 'track',
      component: () => import('../views/tracks/Track.vue')
    },

    {
      path: '/login',
      name: 'user-login',
      component: () => import('../views/user/Login.vue')
    }
  ]
})

export default router
