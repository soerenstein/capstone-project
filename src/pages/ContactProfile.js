import React from 'react'
import ProfileContent from '../components/ContactProfile/ProfileContent'

export default function ContactProfile({
  contacts,
  onFavoriteClick,
  favorites,
}) {
  return (
    <ProfileContent
      contacts={contacts}
      onFavoriteClick={onFavoriteClick}
      favorites={favorites}
    />
  )
}
