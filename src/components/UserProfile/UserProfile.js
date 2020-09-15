import React from 'react'
import Header from '../Header/Header'
import UserProfileContent from './UserProfileContent'

export default function UserProfile({ user }) {
  return (
    <>
      <Header />
      <UserProfileContent user={user} />
    </>
  )
}

