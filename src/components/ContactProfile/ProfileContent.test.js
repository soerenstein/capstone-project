import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useParams } from 'react-router-dom'
import ProfileContent from './ProfileContent'
import ContactProfile from '../../pages/ContactProfile'

describe('The profile', () => {
  it('renders correctly', ({
    contacts,
    onFavoriteClick,
    favorites,
    contactById,
  }) => {
    const profile = render(
      <ContactProfile
        contacts={contacts}
        onFavoriteClick={onFavoriteClick}
        favorites={favorites}
        contactById={contactById}
      />
    )
    expect(profile).toMatchSnapshot()
  })
})

describe('The heading', () => {
  it('for contact information renders correctly', () => {
    const profile = render(<ContactProfile />)
    expect(getByText('Kontaktdaten')).toBeInTheDocument()
  })
  it('for adress renders correctly', () => {
    const profile = render(<ContactProfile />)
    expect(getByText('Adresse')).toBeInTheDocument()
  })
  it('for category renders correctly', () => {
    const profile = render(<ContactProfile />)
    expect(getByText('Kategorie')).toBeInTheDocument()
  })
  it('for notes renders correctly', () => {
    const profile = render(<ContactProfile />)
    expect(getByText('Notiz')).toBeInTheDocument()
  })
})
