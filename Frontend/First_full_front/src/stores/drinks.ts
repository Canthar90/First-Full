import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import getDrink from '@/api/getRandomDrink'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const searchDrinkByIngriedientCollapseFlag = ref(false)
  const randomDrinkRecipe = ref({})

  const FETCH_RANDOM_DRINK = async () => {
    const drink = await getDrink()
    randomDrinkRecipe.value = drink
  }

  const RANDOM_DRINK_INIT = () => {
    // It change value of randomDrinkCollapseFlag to true
    randomDrinkCollapseFlag.value = true
    FETCH_RANDOM_DRINK()
  }

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    searchDrinkByIngriedientCollapseFlag,
    randomDrinkRecipe,
    RANDOM_DRINK_INIT,
    FETCH_RANDOM_DRINK
  }
})
