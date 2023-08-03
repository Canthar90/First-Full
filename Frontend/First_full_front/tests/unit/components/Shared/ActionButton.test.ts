import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/Shared/ActionButton.vue'
import exp from 'constants'

describe('ActionButton', () => {
  const renderActionButton = (buttonType = 'primary') => {
    render(ActionButton, {
      props: {
        text: 'Clic me',
        buttonType: buttonType
      }
    })
  }

  it('Renders default text and therefore element', () => {
    renderActionButton()

    const button = screen.getByRole('button', {
      name: /Clic me/i
    })

    expect(button).toBeInTheDocument()
  })

  it('Renders correct class passed in props', () => {
    renderActionButton('secondary')

    const button = screen.getByRole('button', {
      name: /Clic me/i
    })

    expect(button).toHaveClass('secondary')
  })
})
