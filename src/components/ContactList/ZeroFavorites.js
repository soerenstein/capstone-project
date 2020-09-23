import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ZeroFavorites() {
  return (
    <>
      <ListWrapper>
        <NotificationStyled>
          Es sind keine Favoriten vorhanden.
        </NotificationStyled>
        <NavLink to="/list">
          <ButtonStyled>Zur Kontaktliste</ButtonStyled>
        </NavLink>
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
  color: white;
  text-align: center;
`

const ButtonStyled = styled.button`
  padding: 17px 48px;
  font-size: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #00000029;
  border-style: none;
  border-radius: 30px;
`
