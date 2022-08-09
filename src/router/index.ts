import LoginView from '@/views/user/Login.vue'
import ProfileView from '@/views/user/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TracksView from '@/views/tracks/Tracks.vue'
import CarsView from '@/views/cars/Cars.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/tracks'
    },

    {
      path: '/tracks',
      name: 'tracks',
      component: TracksView
    },

    {
      path: '/tracks/:id',
      name: 'track',
      component: () => import('../views/tracks/Track.vue')
    },

    {
      path: '/cars',
      name: 'cars',
      component: CarsView
    },

    {
      path: '/login',
      name: 'user-login',
      component: LoginView
    },

    {
      path: '/profile',
      name: 'user-profile',
      component: ProfileView
    }
  ]
})

export default router
