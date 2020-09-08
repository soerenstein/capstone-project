import React from 'react'
import styled from 'styled-components/macro'

export default function NavButton() {
  return (
    <div>
      <NavWrapper>
        <a href="/user-profile">
          <ButtonStyled>
            <IconStyled src={''} alt="" />
            <H2Styled>Profil</H2Styled>
          </ButtonStyled>
        </a>
        <a href="/create">
          <ButtonStyled>
            <IconStyled src={''} alt="" />
            <H2Styled>Kontakt hinzufügen</H2Styled>
          </ButtonStyled>
        </a>
        <a href="/list">
          <ButtonStyled>
            <IconStyled src={''} alt="" />
            <H2Styled>Kontaktliste</H2Styled>
          </ButtonStyled>
        </a>
        <a href="/favorites">
          <ButtonStyled>
            <IconStyled src={''} alt="" />
            <H2Styled>Favoriten</H2Styled>
          </ButtonStyled>
        </a>
      </NavWrapper>
    </div>
  )
}

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`

const ButtonStyled = styled.button`
  width: 20vh;
  height: 20vh;
  background: white;
  margin: 10px;
  border-radius: 40px;
  box-shadow: 8px 6px 20px -8px white;
  border-style: none;
`

const IconStyled = styled.img`
  margin-top: 15px;
  vertical-align: top;
`

const H2Styled = styled.h2`
  font-size: 18px;
  vertical-align: bottom;
  margin-bottom: 0;
`
