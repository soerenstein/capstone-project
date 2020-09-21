import React from 'react'
import ContactProfile from '../../pages/ContactProfile'
import CardWrapper from '../Design/CardWrapper/CardWrapper'

export default {
  title: 'ContactProfile',
  component: ContactProfile,
}

const Profile = (args) => <ContactProfile {...args} />

export const ProfilePage = Profile.bind({})
ProfilePage.args = {
  contacts: {
    firstName: 'Max',
    lastName: 'Mustermann',
    company: 'Universal GmbH',
    phone: '040-123123',
    mail: 'max@universal.de',
    street: 'ABC-Straße 102',
    zip: '20239',
    city: 'Hamburg',
    category: 'Kunde',
    note: 'WV Montag',
  },
}

const Content = () => <CardWrapper />

export const ContentWrapper = Content.bind({})
