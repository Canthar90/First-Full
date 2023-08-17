import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { randomDrink, drinksByIngredient, message } from '@/api/types'

import getDrink from '@/api/getRandomDrink'
import getDrinkByName from '@/api/getDrinkByName'
import getDrinksByIngredient from '@/api/getDrinksByIngredient'

export const useDrinkStore = defineStore('drink', () => {
  const randomDrinkCollapseFlag = ref(false)
  const drinkByNameCollapseFlag = ref(false)
  const drinksByIngriedientCollapseFlag = ref(false)

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

  const drinksByIngredient = ref<drinksByIngredient>({
    end_flag: false,
    end_message: [
      {
        idDrink: '',
        strDrink: '',
        strDrinkThumb: ''
      }
    ]
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

  const CLOSE_SEARCH_DRINK_BY_NAME = () => {
    drinkByNameCollapseFlag.value = false
    drinkByName.value = {
      Description: '',
      DrinkName: '',
      FullMessage: '',
      ImageUrl: '',
      Ingredients: '',
      IngredientsList: [],
      Recipe: ''
    }
  }

  const GET_DRINKS_BY_INGREDIENTS = async (ingredient: string) => {
    const drinkNames = await getDrinksByIngredient(ingredient)
    drinksByIngredient.value = drinkNames
  }

  const DRINKS_BY_INGREDIENTS_INIT = (ingredient: string) => {
    drinksByIngriedientCollapseFlag.value = true
    GET_DRINKS_BY_INGREDIENTS(ingredient)
  }

  const CLOSE_DRINKS_BY_INGREDIENTS = () => {
    drinksByIngriedientCollapseFlag.value = false
    drinksByIngredient.value = {
      end_flag: false,
      end_message: [
        {
          idDrink: '',
          strDrink: '',
          strDrinkThumb: ''
        }
      ]
    }
  }

  return {
    randomDrinkCollapseFlag,
    drinkByNameCollapseFlag,
    drinksByIngriedientCollapseFlag,
    randomDrinkRecipe,
    drinkByName,
    drinksByIngredient,
    RANDOM_DRINK_INIT,
    FETCH_RANDOM_DRINK,
    CLOSE_RANDOM_DRINK,
    GET_DRINK_BY_NAME,
    DRINK_BY_NAME_INIT,
    CLOSE_SEARCH_DRINK_BY_NAME,
    GET_DRINKS_BY_INGREDIENTS,
    DRINKS_BY_INGREDIENTS_INIT,
    CLOSE_DRINKS_BY_INGREDIENTS
  }
})
