import React from 'react'
import ProfileContent from './ProfileContent'

const contacts = {
  firstName: 'Max',
  lastName: 'Mustermann',
  company: 'Universal GmbH',
  phone: '0176-123123123',
  mail: 'max.mustermann@universal.de',
  street: 'ABC-Straße 105',
  zip: '20239',
  city: 'Hamburg',
  note: 'Wv Montag',
  category: 'pot. Kunde',
}

export default function ContactProfile() {
  return <ProfileContent contacts={contacts} />
}
