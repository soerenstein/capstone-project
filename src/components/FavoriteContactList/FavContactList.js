import React from 'react'
import ContactListItem from '../ContactListItem/ContactListItem'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import ZeroFavorites from '../ContactList/ZeroFavorites'
import useFavorites from '../../hooks/useFavorites'
import PageLayout from '../Design/CardWrapper/PageLayout'
import CardWrapper from '../Design/CardWrapper/CardWrapper'

export default function FavContactList() {
  const [favorites] = useFavorites()
  const history = useHistory()

  return (
    <PageLayout title="Favoriten">
      <CardWrapper>
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
