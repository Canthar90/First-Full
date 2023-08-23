import { createPinia, setActivePinia } from 'pinia'
import type { Mock } from 'vitest'
import axios from 'axios'

import { useAboutStore } from '@/stores/about'

describe('Initial state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores cvEducation initial state of variable', () => {
    const store = useAboutStore()
    expect(store.cvEducation).toEqual([])
  })

  it('stores initial value of cvContactInfo', () => {
    const store = useAboutStore()
    expect(store.cvContactInfo).toEqual(undefined)
  })

  it('stores inital value of cvExpeience', () => {
    const store = useAboutStore()
    expect(store.cvExperience).toEqual([])
  })

  it('stores initial value of cvSkills', () => {
    const store = useAboutStore()
    expect(store.cvSkills).toEqual([])
  })

  it('stores initial value of cvData', () => {
    const store = useAboutStore()
    expect(store.cvData).toEqual(undefined)
  })

  it('stores initial value of cvDataFetched', () => {
    const store = useAboutStore()
    expect(store.cvDataFetched).toEqual(false)
  })
})
