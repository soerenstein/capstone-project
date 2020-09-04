import React from 'react'
import ContactProfile from './ContactProfile'
import CardWrapper from '../Design/CardWrapper/CardWrapper'

export default {
  title: 'ContactProfile',
  component: ContactProfile,
}

const Profile = (args) => <ContactProfile {...args} />

export const ProfilePage = Profile.bind({})
ProfilePage.args = {}

const Content = (args) => <CardWrapper />

export const ContentItem = Content.bind({})
