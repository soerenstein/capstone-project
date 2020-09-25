import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactList from './pages/ContactList'
import HomePage from './pages/HomePage'
import UserProfile from './pages/UserProfile'
import UserProfileForm from './components/UserProfile/UserProfileForm'
import CreateContact from './pages/CreateContact'
import ContactProfile from './pages/ContactProfile'
import FavContactList from './pages/FavContactList'
import useContacts from './hooks/useContacts'
import useUser from './hooks/useUser'
import useFavorites from './hooks/useFavorites'
import QrScanner from './components/QRScanner/QRScanner'

export default function App() {
  const [contacts, addContact] = useContacts()
  const [savedUser, addUser] = useUser()
  const [favorites, toggleFavorite] = useFavorites()

  return (
    <Router>
      <Switch>
        <Route path="/scan">
          <QrScanner onClick={addContact} />
        </Route>
        <Route path="/user-profile">
          <UserProfile onSubmit={addUser} user={savedUser} />
        </Route>
        <Route path="/edit-user">
          <UserProfileForm onSubmit={addUser} />
        </Route>
        <Route path="/favorites">
          <FavContactList favorites={favorites} />
        </Route>
        <Route path="/create">
          <CreateContact onSubmit={addContact} />
        </Route>
        <Route path="/list">
          <ContactList />
        </Route>
        <Route path="/:id">
          <ContactProfile
            contacts={contacts}
            onFavoriteClick={toggleFavorite}
            favorites={favorites}
          />
        </Route>
        <Route exact path="/">
          <HomePage user={savedUser} />
        </Route>
      </Switch>
    </Router>
  )
}
