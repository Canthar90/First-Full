import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import DrinkByNameSearchedDrink from '@/components/DrinkByName/DrinkByNameSearchedDrink.vue'

describe('DrinkByNameSearchedDrink', () => {
  describe('Displays Searched Drink elements', () => {
    const renderDrinkByNameSearchedDrink = () => {
      const pinia = createTestingPinia()
      const drinkStore = useDrinkStore()

      drinkStore.drinkByNameCollapseFlag = true
      drinkStore.drinkByName = {
        Description: 'Description of the drink',
        DrinkName: 'Drink name',
        FullMessage: 'Message',
        ImageUrl: 'Drink image url',
        Ingredients: 'Ingredients',
        IngredientsList: ['list'],
        Recipe: 'Recipe'
      }

      render(DrinkByNameSearchedDrink, {
        global: {
          plugins: [pinia],
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      return { drinkStore }
    }

    it('Detects faulty drink name', () => {
      const { drinkStore } = renderDrinkByNameSearchedDrink()
      drinkStore.drinkByName.Description = 'Given name is faulty'

      const faultMessage = screen.getByText('Please reenter correct drink name')
      expect(faultMessage).toBeInTheDocument()
    })

    it('displays correct content', () => {
      const { drinkStore } = renderDrinkByNameSearchedDrink()
      expect(drinkStore.drinkByNameCollapseFlag).toBe(true)

      const description = screen.getByText('Description of the drink')
      const name = screen.getByText('Drink name')

      expect(description).toBeInTheDocument()
      expect(name).toBeInTheDocument()
    })
  })
})
