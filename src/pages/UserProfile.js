import React from 'react'
import UserProfileContent from '../components/UserProfile/UserProfileContent'
import UserProfileForm from '../components/UserProfile/UserProfileForm'
import useUser from '../hooks/useUser'

export default function UserProfile({ user, onSubmit }) {
  const [savedUser] = useUser()

  return (
    <>
      {savedUser ? (
        <UserProfileContent user={user} />
      ) : (
        <UserProfileForm onSubmit={onSubmit} />
      )}
    </>
  )
}
