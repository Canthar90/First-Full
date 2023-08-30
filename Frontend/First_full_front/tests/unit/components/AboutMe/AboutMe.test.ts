import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import AboutMe from '@/components/AboutMe/AboutMe.vue'
import { useAboutStore } from '@/stores/about'

describe('AboutMe', () => {
  describe('Displays contents from api', () => {
    const renderAboutMeSite = () => {
      const pinia = createTestingPinia()
      const aboutStore = useAboutStore()

      aboutStore.cvContactInfo = {
        Phone: '123456',
        Age: 28,
        City: 'city',
        Email: 'email'
      }

      render(AboutMe, {
        global: {
          plugins: [pinia],
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
    }

    it('Detects if elements are displayed', () => {
      renderAboutMeSite()

      const phoneNr = screen.getByText('123456')
      expect(phoneNr).toBeInTheDocument()
    })
  })
})
