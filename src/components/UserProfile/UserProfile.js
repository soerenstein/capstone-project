import React from 'react'
import UserProfileContent from './UserProfileContent'
import UserProfileForm from './UserProfileForm'
import useUser from '../../hooks/useUser'

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
