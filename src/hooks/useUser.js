import { useEffect, useState } from 'react'

export default function useUser() {
  const [savedUser, setSavedUser] = useState(
    JSON.parse(localStorage.getItem('savedUser'))
  )

  useEffect(() => {
    localStorage.setItem('savedUser', JSON.stringify(savedUser))
  })

  function addUser(userItem) {
    setSavedUser(userItem)
  }
  return [savedUser, addUser]
}
