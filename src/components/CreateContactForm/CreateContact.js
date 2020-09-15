import React from 'react'
import CreateContactForm from './CreateContactForm'
import Header from '../Header/Header'

export default function CreateContact({ onSubmit }) {
    return (
        <div>
            <Header />
            <CreateContactForm />
        </div>
    )
}
