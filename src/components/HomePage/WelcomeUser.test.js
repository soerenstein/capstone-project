import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import WelcomeUser from './WelcomeUser'

describe('The welcome message', () => {
  it('renders correctly', () => {
    const tree = render(<WelcomeUser />)
    expect(tree).toMatchSnapshot()
  })
})

describe('The homepage', () => {
  const user = {
    firstName: 'Max',
  }
  it('renders with username', () => {
    const { getByText } = render(<WelcomeUser user={user} />)
    expect(getByText('Moin')).toBeInTheDocument()
    expect(getByText('Max')).toBeInTheDocument()
  })
})
