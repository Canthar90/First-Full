// import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/Navigation/MainNav.vue'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav)
  }

  it('Displays owner name', () => {
    renderMainNav()
    const ownerName = screen.getByText('Dawid Cieślak')
    expect(ownerName).toBeInTheDocument()
  })

  it('Displays navbar items', () => {
    renderMainNav()
    const navbarItems = screen.getAllByRole('listitem')
    const navbarTexts = navbarItems.map((item) => item.textContent)
    expect(navbarTexts).toEqual(['About me', 'Experience', 'Drinks'])
  })
})
