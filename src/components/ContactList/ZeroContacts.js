import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ZeroContacts() {
  return (
    <>
      <ListWrapper>
        <NotificationStyled>
          Es sind keine Kontakte vorhanden.
        </NotificationStyled>
        <StyledNavLink to="/create">Neuen Kontakt erstellen</StyledNavLink>
      </ListWrapper>
    </>
  )
}

const ListWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  margin: 0 auto;
  margin-top: 50px;
`

const NotificationStyled = styled.p`
  color: var(--white);
  text-align: center;
`

const StyledNavLink = styled(NavLink)`
  padding: 17px 48px;
  text-decoration: none;
  font-size: 1.2em;
  background: var(--button-white);
  box-shadow: var(--shadow-grey);
  border-style: none;
  color: black;
  border-radius: 30px;
`
