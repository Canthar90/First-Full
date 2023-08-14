import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import DrinksByIngredientInit from '@/components/DrinksByIngredient/DrinksByIngredientInit.vue'

describe('DrinksByIngredientInit', () => {
  describe('Displays Elements', () => {
    const renderDrinkSByIngredientInit = () => {
      const pinia = createTestingPinia()
      const drinkStore = useDrinkStore()
      drinkStore.drinksByIngriedientCollapseFlag = false

      render(DrinksByIngredientInit, {
        global: {
          plugins: [pinia],
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      return { drinkStore }
    }

    it('displays main text and form', () => {
      renderDrinkSByIngredientInit()

      const mainContent = screen.getByText('Discover Your Ideal Drink with a Twist!')

      const form = screen.getByRole('form')
      expect(form).toBeInTheDocument()
      expect(mainContent).toBeInTheDocument()
    })
  })
})
