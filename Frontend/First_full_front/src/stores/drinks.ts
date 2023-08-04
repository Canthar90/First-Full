import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const searchDrinkByIngriedientCollapseFlag = ref(false)

  const RANDOM_DRINK_INIT = () => {
    // It change value of randomDrinkCollapseFlag to true
    randomDrinkCollapseFlag.value = true
  }

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    searchDrinkByIngriedientCollapseFlag,
    RANDOM_DRINK_INIT
  }
})
