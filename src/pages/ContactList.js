import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import Header from '../components/Header/Header'
import { useHistory } from 'react-router-dom'

export default function ContactList({ contacts }) {
  const history = useHistory()

  return (
    <>
      <Header />
      <StyledList>
        {contacts.map((contact) => (
          <ContactListItem
            onClick={() => history.push(`/${contact.id}`)}
            key={contact.id}
            {...contact}
          />
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
