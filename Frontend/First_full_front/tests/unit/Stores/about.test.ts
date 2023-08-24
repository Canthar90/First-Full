import { createPinia, setActivePinia } from 'pinia'
import type { Mock } from 'vitest'
import axios from 'axios'

import { useAboutStore } from '@/stores/about'

vi.mock('axios')
const axiosGetMock = axios.get as Mock

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

describe('Functionality', () => {
  describe('API related functions', () => {
    const mockApi = () => {
      const ContactInformation = {
        Age: 27,
        City: 'City',
        Email: 'Email',
        Phone: '1234'
      }

      const education = [
        {
          Degree: 'degree',
          'Thesis Topic': 'topic',
          University: 'university',
          Year: 'year'
        }
      ]

      const experience = [
        {
          Company: 'company',
          Duration: 'duration',
          Position: 'position',
          Responsibilities: ['responsibility']
        }
      ]

      const skills = [
        {
          Percentage: '42%',
          Skil: 'skil'
        }
      ]

      const finalData = {
        'Contact Information': ContactInformation,
        Education: education,
        'Full Name': 'name',
        Github: 'github',
        Hobbies: 'hobby',
        Linkedin: 'linkedin',
        Resume: experience,
        Skills: skills,
        Summary: 'summary',
        Title: 'title'
      }

      axiosGetMock.mockResolvedValue({
        data: finalData
      })

      return { finalData, skills, experience, education, ContactInformation }
    }
    describe('GET_CV_DATA', () => {
      it('Checks if all data is fetched from api and correctly updated', async () => {
        const { finalData, skills, experience, education, ContactInformation } = mockApi()
        const store = useAboutStore()
        await store.GET_CV_DATA()

        expect(store.cvData).toEqual(finalData)
        expect(store.cvEducation).toEqual(education)
        expect(store.cvContactInfo).toEqual(ContactInformation)
        expect(store.cvExperience).toEqual(experience)
        expect(store.cvSkills).toEqual(skills)
        expect(store.cvDataFetched).toBe(true)
      })
    })
  })
})
