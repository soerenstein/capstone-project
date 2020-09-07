import React from 'react'
import { render } from '@testing-library/react'
import ContactListitem from './ContactListItem'

describe('The listItem', () => {
  it('renders correctly', () => {
    const listItem = render(<ContactListitem />)
    expect(listItem).toMatchSnapshot()
  })
})
