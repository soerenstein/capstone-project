import React from 'react'
import ProfileContent from './ProfileContent'
import Header from '../Header/Header'

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
