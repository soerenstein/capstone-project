import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'
import CreateContactForm from './components/CreateContactForm/CreateContactForm'
import ContactProfile from './components/ContactProfile/ContactProfile'
import HomePage from './components/HomePage/HomePage'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfileForm from './components/UserProfile/UserProfileForm'

export default function App() {
  const user = {
    firstName: 'Maxi',
    lastName: 'Muster',
    company: 'Universal Event GmbH',
  }

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContact')) || []
  )

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('savedUserData')) || ['']
  )
  const userDataInfo = userData[0]

  return (
    <Router>
      <Switch>
        <Route path="/user-profile">
        <UserProfileForm onSubmit={addUser} />
          <UserProfile userDataInfo={userDataInfo} />
        </Route>
        <Route path="/favorites"></Route>
        <Route path="/create">
          <CreateContactForm onSubmit={addContact} />
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
    )}
  function addUser(userDataItem) {
    setUserData([userDataItem])
    localStorage.setItem(
      'savedUserData',
       JSON.stringify([userDataItem])
       )}
}
