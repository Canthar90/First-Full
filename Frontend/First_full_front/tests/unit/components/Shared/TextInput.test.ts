import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import TextInput from '@/components/Shared/TextInput.vue'

describe('TextInput', () => {
  it('registers user typed action', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    })

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'PCK')
    const messages = emitted()['update:modelValue']
    expect(messages).toEqual([['P'], ['PC'], ['PCK']])
  })
})
