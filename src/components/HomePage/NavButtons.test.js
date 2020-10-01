import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavButtons from './NavButtons'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

describe('The Navigation', () => {
    it('renders the buttons', () => {
        const { getByText } = render(
            <MemoryRouter>
                <NavButtons />
            </MemoryRouter>
        )
        expect(getByText('Profil')).toBeInTheDocument()
        expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
        expect(getByText('Kontaktliste')).toBeInTheDocument()
        expect(getByText('Favoriten')).toBeInTheDocument()
    })
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <NavButtons />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
