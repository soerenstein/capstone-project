import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../ContactListItem/ContactListItem'
import Header from '../Header/Header'

export default function ContactList({ contacts }) {
  return (
    <>
    <Header />
    <StyledList>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </StyledList>
</>
  )
}

const StyledList = styled.ul`
  margin: auto;
  margin-top: 60px;
  list-style: none;
  padding: 10px;
`