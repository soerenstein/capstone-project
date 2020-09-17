import { useEffect, useState } from 'react'

export default function useContacts() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('savedContact')) || []
  )

  useEffect(() => {
    localStorage.setItem('savedContact', JSON.stringify(contacts))
  }, [contacts])

  function addContact(contactItem) {
    setContacts([...contacts, contactItem])
  }
  return [contacts, addContact]
}
