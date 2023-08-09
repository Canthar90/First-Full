import { createPinia, setActivePinia } from 'pinia'
import type { Mock } from 'vitest'
import axios from 'axios'

import { useDrinkStore } from '@/stores/drinks'

vi.mock('axios')
const axiosGetMock = axios.get as Mock

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

describe('Fucntionality', () => {
  describe('API related functions', () => {
    beforeEach(() => {
      axiosGetMock.mockResolvedValue({
        data: {
          Description: 'Drink recipe',
          DrinkName: 'Cuba Libre'
        }
      })
    })
    describe('FETCH_RANDOM_DRINK', () => {
      it('check if random drink object was created', async () => {
        const drinkStore = useDrinkStore()
        await drinkStore.FETCH_RANDOM_DRINK()
        expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/backend/random-drink')
        expect(drinkStore.randomDrinkRecipe).toEqual({
          Description: 'Drink recipe',
          DrinkName: 'Cuba Libre'
        })
      })
    })

    describe('RANDOM_DRINK_INIT', () => {
      it('checks if collapse flag was seted to true', () => {
        const drinkStore = useDrinkStore()
        drinkStore.RANDOM_DRINK_INIT()
        expect(drinkStore.randomDrinkCollapseFlag).toBe(true)
      })
    })
  })
})
