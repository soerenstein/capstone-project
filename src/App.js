import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './pages/ContactList'
import HomePage from './pages/HomePage'
import UserProfile from './pages/UserProfile'
import UserProfileForm from './components/UserProfile/UserProfileForm'
import CreateContact from './pages/CreateContact'
import ZeroContacts from './components/ContactList/ZeroContacts'
import ZeroFavorites from './components/ContactList/ZeroFavorites'
import ContactProfile from './pages/ContactProfile'
import FavContactList from './pages/FavContactList'
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
            <ZeroFavorites />
          )}
        </Route>
        <Route path="/create">
          <CreateContact onSubmit={addContact} />
        </Route>
        <Route path="/list">
          {contacts.length ? (
            <ContactList contacts={contacts} />
          ) : (
            <ZeroContacts />
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
