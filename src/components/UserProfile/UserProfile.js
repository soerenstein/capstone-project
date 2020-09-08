import React from 'react'
import UserProfileContent from './UserProfileContent'

const user = {
    firstName: 'Paula',
    lastName: 'Muster',
    company: 'neuefische GmbH',
    phone: '0176-123123123',
    mail: 'paula.mustermann@universal.de',
    street: 'ABC-Straße 105',
    zip: '20239',
    city: 'Hamburg',
    note: 'Wv Montag',
    category: 'pot. Kunde',
  }

export default function UserProfile() {
    return (
        <div>
            <UserProfileContent user={user} />
        </div>
    )
}
