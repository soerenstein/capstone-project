import React from 'react'
import HomePage from './HomePage'

export default {
  title: 'HomePage',
  component: HomePage,
}

const HomeNav = (args) => <HomePage {...args} />

export const HomeNavigation = HomeNav.bind({})
HomeNavigation.args = {
  user: { firstName: 'Maxi' },
}
