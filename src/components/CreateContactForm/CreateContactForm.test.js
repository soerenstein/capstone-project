import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateContactForm from './CreateContactForm'

describe('The form', () => {
  it('renders correctly', () => {
    const form = render(<CreateContactForm />)
    expect(form).toMatchSnapshot()
  })
})

describe('The button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CreateContactForm />)
    expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
  })
})
