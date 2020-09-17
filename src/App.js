import React from 'react'
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
import useContacts from './hooks/useContacts'
import useUser from './hooks/useUser'
import useFavorites from './hooks/useFavorites'

export default function App() {
  const [contacts, addContact] = useContacts()
  const [savedUser, addUser] = useUser()
  const [favorites, toggleFavorite] = useFavorites()

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage user={savedUser} />
        </Route>
        <Route path="/user-profile">
          {savedUser ? (
            <UserProfile user={savedUser} />
          ) : (
            <UserProfileForm onSubmit={addUser} />
          )}
        </Route>
        <Route path="/edit-user">
          <UserProfileForm onSubmit={addUser} />
        </Route>
        <Route path="/favorites">
          {favorites.length ? (
            <FavContactList favorites={favorites} />
          ) : (
            <NoFavorite />
          )}
        </Route>
        <Route path="/create">
          <CreateContact onSubmit={addContact} />
        </Route>
        <Route path="/list">
          {contacts.length ? (
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
}
