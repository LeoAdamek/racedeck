import LoginView from '@/views/user/Login.vue'
import ProfileView from '@/views/user/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TracksView from '@/views/tracks/Tracks.vue'
import CarsView from '@/views/cars/Cars.vue'
import TrackView from '@/views/tracks/Track.vue'
import NewTrackView from '@/views/tracks/NewTrack.vue'
import NewLayoutView from '@/views/tracks/NewLayout.vue'

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
      component: TracksView,
      children: [
        {
          path: 'new',
          name: 'tracks-new',
          component: NewTrackView
        },

        {
          path: ':id',
          name: 'track',
          component: TrackView,
          children: [
            {
              path: 'new-layout',
              name: 'new-layout',
              component: NewLayoutView
            }
          ]
        },
      ]
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
    },

  ]
})

export default router
