import React from 'react'
import Header from '../components/Header/Header'
import UserProfileContent from '../components/UserProfile/UserProfileContent'

export default function UserProfile({ user }) {
  return (
    <>
      <Header />
      <UserProfileContent user={user} />
    </>
  )
}
