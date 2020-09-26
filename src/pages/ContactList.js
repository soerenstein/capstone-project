import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import { useHistory } from 'react-router-dom'
import ZeroContacts from '../components/ContactList/ZeroContacts'
import useContacts from '../hooks/useContacts'
import CardWrapper from '../components/Design/CardWrapper/CardWrapper'
import PageLayout from '../components/Design/CardWrapper/PageLayout'

export default function ContactList() {
  const [contacts] = useContacts()
  const history = useHistory()

  return (
    <PageLayout title="Kontaktliste">
      <CardWrapper>
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
      </CardWrapper>
    </PageLayout>
  )
}

const StyledList = styled.ul`
  margin: 40px auto;
  width: 95%;
  list-style: none;
  padding: 0;
`
