import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import Header from '../components/Header/Header'
import { useHistory } from 'react-router-dom'
import ZeroContacts from '../components/ContactList/ZeroContacts'
import useContacts from '../hooks/useContacts'

export default function ContactList() {
  const [contacts, addContact] = useContacts()
  const history = useHistory()

  return (
    <>
      <Header />
      {contacts.length ? (
        <StyledList>
          {contacts.map((contact) => (
            <ContactListItem
              onClick={() => history.push(`/${contact.id}`)}
              key={contact.id}
              {...contact}
            />
          ))}
        </StyledList>
      ) : (
        <ZeroContacts />
      )}
    </>
  )
}

const StyledList = styled.ul`
  margin: auto;
  margin-top: 60px;
  list-style: none;
  padding: 10px;
`
