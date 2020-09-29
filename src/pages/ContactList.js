import React from 'react'
import styled from 'styled-components/macro'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import { useHistory } from 'react-router-dom'
import ZeroContacts from '../components/ContactList/ZeroContacts'
import useContacts from '../hooks/useContacts'
import CardWrapper from '../components/Design/CardWrapper/CardWrapper'
import PageLayout from '../components/Design/CardWrapper/PageLayout'
import { CSVLink } from 'react-csv'

export default function ContactList() {
  const [contacts] = useContacts()
  const history = useHistory()

  return (
    <PageLayout title="Kontaktliste">
      <CardWrapper>
        {contacts.length ? (
          <CSVButton>
            <CSVLinkStyled data={contacts} filename={'my-contacts.csv'}>
              Kontakte exportieren (CSV)
            </CSVLinkStyled>
          </CSVButton>
        ) : null}

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
  margin: 40px 0;
  width: 100%;
  list-style: none;
  padding: 0;
`

const CSVLinkStyled = styled(CSVLink)`
  text-decoration: none;
  color: black;
  white-space: nowrap;
`

const CSVButton = styled.button`
  padding: 17px 48px;
  font-size: 1.2em;
  background: var(--button-white);
  box-shadow: var(--shadow-grey);
  border-style: none;
  border-radius: 30px;
  opacity: 1;
  margin: 50px 0 0 0;
  width: 100%;
`
