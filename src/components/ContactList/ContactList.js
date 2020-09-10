import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../ContactListItem/ContactListItem'

export default function ContactList({ contacts }) {
  return (
    <StyledList>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </StyledList>
  )
}

const StyledList = styled.ul`
  margin: auto;
  margin-top: 10px;
  list-style: none;
  padding: 10px;
`