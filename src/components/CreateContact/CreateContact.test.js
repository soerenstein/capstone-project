import React from 'react'
import { render } from '@testing-library/react'
import CreateContact from './CreateContact'

describe('The form', () => {
    it('renders correctly', () => {
        const form = render(<CreateContact />)
        expect(form).toMatchSnapshot()
    })
})