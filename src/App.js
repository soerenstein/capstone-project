import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'
import CreateContact from './components/CreateContact/CreateContact'

export default function App() {
  const [contacts, setContacts] = useState([
    { firstName: 'Max', lastName: 'Mustermann', company: 'Muster GmbH' },
    { firstName: 'Erika', lastName: 'Mustermann', company: 'Universal GmbH' },
    { firstName: 'Paula', lastName: 'Mustermann', company: 'neuefische GmbH' },
  ])

  return (
    <Router>
      <Switch>
        <Route path="/create">
          <CreateContact onSubmit={addContactItem} />
          <ContactList contacts={contacts} />
        </Route>
        <Route path="/list">
          <ContactList contacts={contacts} />
        </Route>
      </Switch>
    </Router>
  )

  function addContactItem(contactItem) {
    setContacts([contactItem, ...contacts])
  }
}
