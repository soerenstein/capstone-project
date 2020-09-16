import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './components/ContactList/ContactList'
import HomePage from './components/HomePage/HomePage'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfileForm from './components/UserProfile/UserProfileForm'
import CreateContact from './components/CreateContactForm/CreateContact'
import NoContact from './components/ContactList/NoContact'
import NoFavorite from './components/ContactList/NoFavorite'

import ContactProfile from './components/ContactProfile/ContactProfile'
import FavContactList from './components/ContactList/FavContactList'

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContact')) || []
  )

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('savedUser')) || ['']
  )
  const user = userData[0]

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )

  useEffect(() => {
    saveLocally('favorites', favorites)
  }, [favorites])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
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
        <Route path="/favorites">
          {localStorage.getItem('favorites') !== null ? (
            <FavContactList favorites={favorites} />
          ) : (
            <NoFavorite />
          )}
        </Route>
        <Route path="/create">
          <CreateContact onSubmit={addContact} />
        </Route>
        <Route path="/list">
          {localStorage.getItem('savedContact') !== null ? (
            <ContactList contacts={contacts} />
          ) : (
            <NoContact />
          )}
        </Route>
        <Route path="/:id">
          <ContactProfile
            contacts={contacts}
            onFavoriteClick={toggleFavorite}
            favorites={favorites}
          />
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


  function toggleFavorite(favorite) {
    const index = favorites.findIndex(
      (favoriteItem) => favoriteItem.id === favorite.id
    )
    index > -1
      ? setFavorites([
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1),
        ])
      : setFavorites([...favorites, { ...favorite }])
  }

  function saveLocally(favorites) {
    setUserData([favorites])
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}
