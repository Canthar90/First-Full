import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { useDrinkStore } from '@/stores/drinks'
import RandomDrink from '@/components/RandomDrink/RandomDrink.vue'

describe('RandomDrink', () => {
  describe('Displays elements', () => {
    const renderRandomDrink = () => {
      const pinia = createTestingPinia()
      const drinksStore = useDrinkStore()

      render(RandomDrink, {
        global: {
          plugins: [pinia]
        }
      })

      return { drinksStore }
    }

    const baseSentence =
      'Are you tired of the same old drinks and looking for an exciting new fling for your taste buds? Look no further, because we have the ultimate concoction of romance and mixology waiting just for you!'

    it('Displays main text and button', () => {
      renderRandomDrink()

      const mainConetent = screen.getByText(baseSentence)

      const baseButton = screen.getByRole('button', {
        name: /Find Your Match/i
      })
      expect(mainConetent).toBeInTheDocument()

      expect(baseButton).toBeInTheDocument()
    })
  })
})
