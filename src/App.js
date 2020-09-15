import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'
import ContactProfile from './components/ContactProfile/ContactProfile'
import HomePage from './components/HomePage/HomePage'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfileForm from './components/UserProfile/UserProfileForm'
import CreateContact from './components/CreateContactForm/CreateContact'

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContact')) || []
  )

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('savedUser')) || ['']
  )
  const user = userData[0]

  return (
    <Router>
      <Switch>
        <Route path="/user-profile">
          {localStorage.getItem('savedUser') !== null ? (
            <UserProfile user={user} />
          ) : (
            <UserProfileForm onSubmit={addUser} />
          )}
        </Route>
        <Route path="/edit-user">
          <UserProfileForm onSubmit={addUser} />
        </Route>
        <Route path="/favorites">Coming soon</Route>
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
  function addUser(userItem) {
    setUserData([userItem])
    localStorage.setItem('savedUser', JSON.stringify([userItem]))
  }
}
