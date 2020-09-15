import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateContact from './CreateContact'

describe('The form', () => {
    it('renders correctly', () => {
        const form = render(<CreateContact />)
        expect(form).toMatchSnapshot()
    })  
})

describe('The button', () => {
    it('renders correctly', () => {
        const {getByText} = render(<CreateContact />);  
        expect(getByText('Kontakt hinzufügen')).toBeInTheDocument()
        
     })
})