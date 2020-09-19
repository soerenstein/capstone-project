import React from 'react'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header/Header'
import styled from 'styled-components/macro'

export default function FavContactList({ favorites }) {
  const history = useHistory()

  return (
    <>
      <Header />
      <StyledList>
        {favorites.map((favorite) => (
          <ContactListItem
            onClick={() => history.push(`/${favorite.id}`)}
            key={favorite.id}
            {...favorite}
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
