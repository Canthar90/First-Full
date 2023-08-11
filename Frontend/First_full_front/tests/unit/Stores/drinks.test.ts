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
    expect(drinkStore.drinksByIngriedientCollapseFlag).toBe(false)
  })

  it('stores randomDrinkRecipe object', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.randomDrinkRecipe.Description).toBe('')
  })

  it('stores drinkByName empty object', () => {
    const drinkStore = useDrinkStore()
    expect(drinkStore.drinkByName.Description).toBe('')
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

    const emptyDrinkObject = {
      Description: '',
      DrinkName: '',
      FullMessage: '',
      ImageUrl: '',
      Ingredients: '',
      IngredientsList: [],
      Recipe: ''
    }

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

    describe('CLOSE_RANDOM_DRINK', () => {
      it('Resets random drink collapsible flag and random drink recipe ', () => {
        const drinkStore = useDrinkStore()
        drinkStore.CLOSE_RANDOM_DRINK()
        expect(drinkStore.randomDrinkCollapseFlag).toBe(false)

        expect(drinkStore.randomDrinkRecipe).toStrictEqual(emptyDrinkObject)
      })
    })

    describe('GET_DRINK_BY_NAME', () => {
      it('checks if function is getting drinkByName object and updates data', async () => {
        const drinkStore = useDrinkStore()
        await drinkStore.GET_DRINK_BY_NAME('Some Drink')
        expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/backend/drink/Some Drink')
        expect(drinkStore.drinkByName).toEqual({
          Description: 'Drink recipe',
          DrinkName: 'Cuba Libre'
        })
      })
    })

    describe('DRINK_BY_NAME_INIT', () => {
      it('checks if drinkByNameCollapseFlag is true after using the function', () => {
        const drinkStore = useDrinkStore()
        drinkStore.DRINK_BY_NAME_INIT('Any name')
        expect(drinkStore.drinkByNameCollapseFlag).toBe(true)
      })
    })

    describe('CLOSE_SEARCH_DRINK_BY_NAME', () => {
      it('checks if collapse flag is changed and drinkByName data is celaned', () => {
        const drinkStore = useDrinkStore()
        drinkStore.CLOSE_SEARCH_DRINK_BY_NAME()
        expect(drinkStore.drinkByNameCollapseFlag).toBe(false)

        expect(drinkStore.drinkByName).toEqual(emptyDrinkObject)
      })
    })
  })
})
