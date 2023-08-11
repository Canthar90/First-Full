import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import RandomDrinkDrink from '@/components/RandomDrink/RandomDrinkDrink.vue'

describe('RandomDrinkdrink', () => {
  describe('Displays Random drink elements', () => {
    const renderRandomDrinkDrink = () => {
      const pinia = createTestingPinia()
      const drinkStore = useDrinkStore()

      drinkStore.drinkByNameCollapseFlag = true
      drinkStore.randomDrinkRecipe = {
        Description: 'Description of the drink',
        DrinkName: 'Drink name',
        FullMessage: 'Message',
        ImageUrl: 'Drink image url',
        Ingredients: 'Ingredients',
        IngredientsList: ['list'],
        Recipe: 'Recipe'
      }

      render(RandomDrinkDrink, {
        global: {
          plugins: [pinia],
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      return { drinkStore }
    }

    it('Displays content of random drink recipe', () => {
      const { drinkStore } = renderRandomDrinkDrink()
      expect(drinkStore.drinkByNameCollapseFlag).toBe(true)

      const description = screen.getByText('Description of the drink')
      const name = screen.getByText('Drink name')

      expect(description).toBeInTheDocument()
      expect(name).toBeInTheDocument()
    })
  })
})
