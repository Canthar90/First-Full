import { createRouter, createWebHistory } from 'vue-router'

import DrinkSite from '@/views/DrinkSite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinkSite
    },
  ]
})

export default router
