import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import DrinksByIngredientSearchedDrinks from '@/components/DrinksByIngredient/DrinksByIngredientSearchedDrinks.vue'

describe('DrinksByIngredientSearchedDrinks', () => {
  describe('Displays Searched Drinks by Ingredient', () => {
    const renderDrinksByIngredientSearchedDrinks = (
      word: string = 'Milk',
      flag: boolean = true
    ) => {
      const pinia = createTestingPinia()
      const drinkStore = useDrinkStore()

      drinkStore.drinksByIngriedientCollapseFlag = true
      drinkStore.drinksByIngredientSearchWord = word
      drinkStore.drinksByIngredient = {
        end_flag: flag,
        end_message: [
          {
            idDrink: '1',
            strDrink: 'Drink Name',
            strDrinkThumb: 'image url'
          }
        ]
      }

      render(DrinksByIngredientSearchedDrinks, {
        global: {
          plugins: [pinia],
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      return { drinkStore }
    }

    it('Detects faulty ingredient name', () => {
      const searchWord = 'dasdhu213'
      const { drinkStore } = renderDrinksByIngredientSearchedDrinks(searchWord, false)
      drinkStore.drinksByIngredientSearchWord = searchWord

      const keywordNotification = screen.getByText(`Drinks with ${searchWord}:`)
      expect(keywordNotification).toBeInTheDocument()

      const invalidWordNotification = screen.getByText('Given ingredient name is invalid')
      expect(invalidWordNotification).toBeInTheDocument()
    })
  })
})
