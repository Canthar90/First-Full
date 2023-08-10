import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import DrinkByNameInitial from '@/components/DrinkByName/DrinkByNameInitial.vue'

describe('DrinkByNameInitial', () => {
  describe('Display Elements', () => {
    const renderDrinkByNameInit = () => {
      const pinia = createTestingPinia()
      const drinkStore = useDrinkStore()
      drinkStore.drinkByNameCollapseFlag = false

      render(DrinkByNameInitial, {
        global: {
          plugins: [pinia]
        }
      })

      return { drinkStore }
    }

    const expectedContent = `Are you holding onto memories of that one captivating cocktail whose name escaped you? Or perhaps you're on a quest to reunite with an old favorite that made your taste buds swoon? Look no further, for "NameNectar" is here to rekindle those flames of flavor!`

    it('displays main text and form', () => {
      renderDrinkByNameInit()

      const mainConetent = screen.getByText(expectedContent)

      const form = screen.getByRole('form')
      expect(form).toBeInTheDocument()
      expect(mainConetent).toBeInTheDocument()
    })
  })
})
