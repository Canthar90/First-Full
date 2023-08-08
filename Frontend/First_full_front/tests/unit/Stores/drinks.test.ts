import { createPinia, setActivePinia } from 'pinia'

import { useDrinkStore } from '@/stores/drinks'

describe('Initial state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores random Drink Collapse Flag', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.randomDrinkCollapseFlag).toEqual(false)
  })

  it('stores drink by name collapse flag', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.drinkByNameCollapseFlag).toBe(false)
  })

  it('stores search drink by ingredient collapse flag', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.searchDrinkByIngriedientCollapseFlag).toBe(false)
  })

  it('stores randomDrinkRecipe object', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.randomDrinkRecipe.Description).toBe('')
  })
})
