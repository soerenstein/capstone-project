import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavButton from './NavButtons'

describe('The listItem', () => {
  it('renders correctly', () => {
    const listItem = render(<NavButton />)
    expect(listItem).toMatchSnapshot()
  })
})

describe('The NavButton', () => {
  it('for profile renders correctly', () => {
    const { getByText } = render(<NavButton />)
    expect(getByText('Profil')).toBeInTheDocument()
  })
  it('for add contacts renders correctly', () => {
    const { getByText } = render(<NavButton />)
    expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
  })
  it('for all contacts renders correctly', () => {
    const { getByText } = render(<NavButton />)
    expect(getByText('Kontaktliste')).toBeInTheDocument()
  })
  it('for favorites renders correctly', () => {
    const { getByText } = render(<NavButton />)
    expect(getByText('Favoriten')).toBeInTheDocument()
  })
})
