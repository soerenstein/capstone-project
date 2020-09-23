import React from 'react'
import { ReactComponent as Heart } from '../Design/img/heart.svg'
import { ReactComponent as Profile } from '../Design/img/user-header.svg'
import { ReactComponent as Create } from '../Design/img/user-plus.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function HeaderHomepage() {
  return (
    <HeaderWrapper>
      <NavLink to="/favorites">
        <FavoriteStyled />
      </NavLink>
      <NavLink to="/user-profile">
        <ProfileStyled />
      </NavLink>
      <NavLink to="/create">
        <CreateStyled />
      </NavLink>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: block;
`

const FavoriteStyled = styled(Heart)`
  position: absolute;
  right: 80px;
  top: 20px;
  fill: white;
`

const ProfileStyled = styled(Profile)`
  position: absolute;
  right: 20px;
  top: 20px;
  fill: white;
`

const CreateStyled = styled(Create)`
  position: absolute;
  right: 140px;
  top: 20px;
  fill: white;
`
