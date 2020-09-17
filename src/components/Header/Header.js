import React from 'react'
import { ReactComponent as Arrow } from '../Design/img/arrow-left.svg'
import { ReactComponent as Heart } from '../Design/img/heart.svg'
import { ReactComponent as Profile } from '../Design/img/user-header.svg'
import { ReactComponent as Create } from '../Design/img/user-plus.svg'
import styled from 'styled-components/macro'
import { useHistory, NavLink } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  return (
    <HeaderWrapper>
      <ArrowStyled onClick={handleClick} />
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
  function handleClick() {
    history.goBack()
  }
}

const HeaderWrapper = styled.div`
  display: block;
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
