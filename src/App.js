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

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContact')) || []
  )

  return (
    <Router>
      <Switch>
        <Route path="/user-profile">
          <UserProfile />
        </Route>
        <Route path="/favorites"></Route>
        <Route path="/create">
          <CreateContact onSubmit={addContact} />
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

  function addContact(contactItem) {
    setContacts([...contacts, contactItem])
    localStorage.setItem(
      'savedContact',
      JSON.stringify([...contacts, contactItem])
    )
  }
}
