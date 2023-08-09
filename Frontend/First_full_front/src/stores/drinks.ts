import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { randomDrink } from '@/api/types'

import getDrink from '@/api/getRandomDrink'
import getDrinkByName from '@/api/getDrinkByName'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const searchDrinkByIngriedientCollapseFlag = ref(false)

  const randomDrinkRecipe = ref<randomDrink>({
    Description: '',
    DrinkName: '',
    FullMessage: '',
    ImageUrl: '',
    Ingredients: '',
    IngredientsList: [],
    Recipe: ''
  })

  const drinkByName = ref<randomDrink>({
    Description: '',
    DrinkName: '',
    FullMessage: '',
    ImageUrl: '',
    Ingredients: '',
    IngredientsList: [],
    Recipe: ''
  })

  const FETCH_RANDOM_DRINK = async () => {
    const drink = await getDrink()
    randomDrinkRecipe.value = drink
  }

  const RANDOM_DRINK_INIT = () => {
    // It change value of randomDrinkCollapseFlag to true
    randomDrinkCollapseFlag.value = true
    FETCH_RANDOM_DRINK()
  }

  const CLOSE_RANDOM_DRINK = () => {
    randomDrinkCollapseFlag.value = false
    randomDrinkRecipe.value = {
      Description: '',
      DrinkName: '',
      FullMessage: '',
      ImageUrl: '',
      Ingredients: '',
      IngredientsList: [],
      Recipe: ''
    }
  }

  const DRINK_BY_NAME_INIT = (drinkName: string) => {
    drinkByNameCollapseFlag.value = true
    GET_DRINK_BY_NAME(drinkName)
  }

  const GET_DRINK_BY_NAME = async (drinkName: string) => {
    const drink = await getDrinkByName(drinkName)
    drinkByName.value = drink
  }

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    searchDrinkByIngriedientCollapseFlag,
    randomDrinkRecipe,
    drinkByName,
    RANDOM_DRINK_INIT,
    FETCH_RANDOM_DRINK,
    CLOSE_RANDOM_DRINK,
    GET_DRINK_BY_NAME,
    DRINK_BY_NAME_INIT
  }
})
