import { createRouter, createWebHistory } from 'vue-router'

import DrinkSite from '@/views/DrinkSite.vue'
import HomeSite from '@/views/HomeSite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeSite
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinkSite
    }
  ]
})

export default router
