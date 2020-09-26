import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as UserProfile } from '../Design/img/userHomepage.svg'
import { ReactComponent as UserList } from '../Design/img/userListHomepage.svg'
import { ReactComponent as AddUser } from '../Design/img/userPlusHomepage.svg'
import { ReactComponent as FavoriteUser } from '../Design/img/FavoriteUserHomepage.svg'
import { NavLink } from 'react-router-dom'

export default function NavButtons() {
  return (
    <>
      <NavWrapper>
        <NavLink to="/user-profile">
          <NavButtonWrapper>
            <UserProfile />
            <H2Styled>Profil</H2Styled>
          </NavButtonWrapper>
        </NavLink>
        <NavLink to="/create">
          <NavButtonWrapper>
            <AddUser />
            <H2Styled>Kontakt hinzufügen</H2Styled>
          </NavButtonWrapper>
        </NavLink>
        <NavLink to="/list">
          <NavButtonWrapper>
            <UserList />
            <H2Styled>Kontaktliste</H2Styled>
          </NavButtonWrapper>
        </NavLink>
        <NavLink to="/favorites">
          <NavButtonWrapper>
            <FavoriteUser />
            <H2Styled>Favoriten</H2Styled>
          </NavButtonWrapper>
        </NavLink>
      </NavWrapper>
    </>
  )
}

const NavWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;

  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  & a {
    text-decoration: none;
  }
  & svg {
    margin-top: 20%;
  }
`

const NavButtonWrapper = styled.div`
  width: 22vh;
  height: 22vh;
  display: grid;
  grid-template-rows: 60% 40%;
  justify-items: center;
  margin: 10px;
  align-content: center;
  text-align: center;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 30px;
`

const H2Styled = styled.h2`
  font-size: 1.1em;
  vertical-align: bottom;
  color: var(--black);
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`
