import React from 'react'
import ContactListItem from '../components/ContactListItem/ContactListItem'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header/Header'
import styled from 'styled-components/macro'
import ZeroFavorites from '../components/ContactList/ZeroFavorites'
import useFavorites from '../hooks/useFavorites'

export default function FavContactList() {
  const [favorites] = useFavorites()

  const history = useHistory()

  return (
    <>
      <Header />
      {favorites.length ? (
        <StyledList>
          {favorites.map((favorite) => (
            <ContactListItem
              onClick={() => history.push(`/${favorite.id}`)}
              key={favorite.id}
              {...favorite}
            />
          ))}
        </StyledList>
      ) : (
        <ZeroFavorites />
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
