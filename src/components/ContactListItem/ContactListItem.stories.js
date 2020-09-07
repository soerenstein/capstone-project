import React from 'react'
import ContactListItem from './ContactListItem'

export default {
  title: 'ContactListItem',
  component: ContactListItem,
}

const List = (args) => <ContactListItem {...args} />

export const ListItem = List.bind({})
ListItem.args = {
  firstName: 'Max',
  lastName: 'Mustermann',
  company: 'Universal GmbH',
}
