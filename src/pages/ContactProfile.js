import React from 'react'
import ProfileContent from '../components/ContactProfile/ProfileContent'
import Header from '../components/Header/Header'

export default function ContactProfile({
  contacts,
  onFavoriteClick,
  favorites,
}) {
  return (
    <>
      <Header />
      <ProfileContent
        contacts={contacts}
        onFavoriteClick={onFavoriteClick}
        favorites={favorites}
      />
    </>
  )
}
