import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const searchDrinkByIngriedientCollapseFlag = ref(false)

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    searchDrinkByIngriedientCollapseFlag
  }
})
