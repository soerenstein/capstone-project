import React from 'react'
import { ReactComponent as Arrow } from '../Design/img/arrow-left.svg'
import { ReactComponent as Heart } from '../Design/img/heart.svg'
import { ReactComponent as Profile } from '../Design/img/user-header.svg'
import { ReactComponent as Create } from '../Design/img/user-plus.svg'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <ArrowStyled id="back" />
      </NavLink>
      <NavLink to="/favorites" activeStyle={{ fill: '#FFAB1D' }}>
        <FavoriteStyled />
      </NavLink>
      <NavLink to="/user-profile" activeStyle={{ fill: '#FFAB1D' }}>
        <ProfileStyled />
      </NavLink>
      <NavLink to="/create" activeStyle={{ fill: '#FFAB1D' }}>
        <CreateStyled />
      </NavLink>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: block;
  z-index: 100;
  background: white;
  height: 55px;
  box-shadow: 0 5px 5px 10px white;
`

const ArrowStyled = styled(Arrow)`
  position: absolute;
  left: 20px;
  top: 20px;
`

const FavoriteStyled = styled(Heart)`
  position: absolute;
  right: 80px;
  top: 20px;
`

const ProfileStyled = styled(Profile)`
  position: absolute;
  right: 20px;
  top: 20px;
`

const CreateStyled = styled(Create)`
  position: absolute;
  right: 140px;
  top: 20px;
`
