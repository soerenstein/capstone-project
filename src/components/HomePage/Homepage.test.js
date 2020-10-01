import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

describe('The homepage', () => {
  it('renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})

describe('The homepage', () => {
  it(' renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(getByText('Moin.')).toBeInTheDocument()
    expect(getByText('Profil')).toBeInTheDocument()
    expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
    expect(getByText('Kontaktliste')).toBeInTheDocument()
    expect(getByText('Favoriten')).toBeInTheDocument()
  })
})

describe('The homepage', () => {
    const user = {
        firstName: 'Max',
      }
    it('renders with username', () => {
      const { getByText } = render(
        <MemoryRouter>
          <HomePage user={user} />
        </MemoryRouter>
      )
      expect(getByText('Moin')).toBeInTheDocument()
      expect(getByText('Max')).toBeInTheDocument()
      expect(getByText('Profil')).toBeInTheDocument()
      expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
      expect(getByText('Kontaktliste')).toBeInTheDocument()
      expect(getByText('Favoriten')).toBeInTheDocument()
    })
  })
  