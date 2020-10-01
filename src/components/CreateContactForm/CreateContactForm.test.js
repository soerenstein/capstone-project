import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateContactForm from './CreateContactForm'
import { MemoryRouter } from 'react-router-dom'

describe('The form', () => {
  it('renders correctly', () => {
    const tree = render(
      <MemoryRouter>
        <CreateContactForm />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})

describe('The labels', () => {
  it(' renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CreateContactForm />
      </MemoryRouter>
    )
    expect(getByText('Vorname')).toBeInTheDocument()
    expect(getByText('Nachname')).toBeInTheDocument()
    expect(getByText('Unternehmen')).toBeInTheDocument()
    expect(getByText('Telefon')).toBeInTheDocument()
    expect(getByText('E-Mail')).toBeInTheDocument()
    expect(getByText('Adresse')).toBeInTheDocument()
    expect(getByText('Notiz')).toBeInTheDocument()
    expect(getByText('Kategorie')).toBeInTheDocument()
  })
})
