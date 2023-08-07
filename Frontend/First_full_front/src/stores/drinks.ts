import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { randomDrink } from '@/api/types'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const searchDrinkByIngriedientCollapseFlag = ref(false)
  const randomDrinkRecipe = ref({})

  const RANDOM_DRINK_INIT = () => {
    // It change value of randomDrinkCollapseFlag to true
    randomDrinkCollapseFlag.value = true
  }

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    searchDrinkByIngriedientCollapseFlag,
    randomDrinkRecipe,
    RANDOM_DRINK_INIT
  }
})
