import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

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
})
