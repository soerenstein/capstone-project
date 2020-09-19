import React from 'react'
import HomePage from '../../pages/HomePage'

export default {
  title: 'HomePage',
  component: HomePage,
}

const HomeNavUser = (args) => <HomePage {...args} />

export const HomeWithUser = HomeNavUser.bind({})
HomeWithUser.args = {
  user: { firstName: 'Maxi' },
}

const HomeNavNoUser = (args) => <HomePage {...args} />

export const HomeWithoutUser = HomeNavNoUser.bind({})
HomeWithoutUser.args = {}
