import React from 'react'
import CreateContactForm from '../components/CreateContactForm/CreateContactForm'
import Header from '../components/Header/Header'

export default function CreateContact({ onSubmit }) {
  return (
    <div>
      <Header />
      <CreateContactForm onSubmit={onSubmit} />
    </div>
  )
}
