import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'
import CreateContact from './components/CreateContact/CreateContact'
import ContactProfile from './components/ContactProfile/ContactProfile'
import HomePage from './components/HomePage/HomePage'
import UserProfile from './components/UserProfile/UserProfile'

export default function App() {
  const user = {
    firstName: 'Maxi',
    lastName: 'Muster',
    company: 'Universal Event GmbH',
  }
  const [contacts, setContacts] = useState([
    { firstName: 'Max', lastName: 'Mustermann', company: 'Muster GmbH' },
    { firstName: 'Erika', lastName: 'Mustermann', company: 'Universal GmbH' },
    { firstName: 'Paula', lastName: 'Mustermann', company: 'neuefische GmbH' },
  ])

  return (
    <Router>
      <Switch>
        <Route path="/user-profile">
          <UserProfile />
        </Route>
        <Route path="/favorites"></Route>
        <Route path="/create">
          <CreateContact onSubmit={addContactItem} />
          <ContactList contacts={contacts} />
        </Route>
        <Route path="/list">
          <ContactList contacts={contacts} />
        </Route>
        <Route path="/profile">
          <ContactProfile />
        </Route>
        <Route path="/">
          <HomePage user={user} />
        </Route>
      </Switch>
    </Router>
  )

  function addContactItem(contactItem) {
    setContacts([contactItem, ...contacts])
  }
}
