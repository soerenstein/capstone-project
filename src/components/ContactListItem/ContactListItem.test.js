import React from 'react'
import { render } from '@testing-library/react'
import ContactListItem from './ContactListItem'

describe('The listItem', () => {
  it('renders correctly', () => {
    const listItem = render(<ContactListItem />)
    expect(listItem).toMatchSnapshot()
  })
})
