import React from 'react'
import { ReactComponent as Arrow } from '../Design/img/arrow-left.svg'
import { ReactComponent as Heart } from '../Design/img/heart.svg'
import { ReactComponent as Profile } from '../Design/img/user-header.svg'
import styled from 'styled-components/macro'
import { useHistory, Link } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  return (
    <div>
      <ArrowStyled onClick={handleClick} />
      <Link to="/favorites">
        <FavoriteStyled />
      </Link>
      <Link to="/user-profile">
        <ProfileStyled />
      </Link>
    </div>
  )
  function handleClick() {
    history.goBack()
  }
}

const ArrowStyled = styled(Arrow)`
  position: absolute;
  left: 20px;
  top: 20px;
`

const FavoriteStyled = styled(Heart)`
  position: absolute;
  right: 60px;
  top: 20px;
`

const ProfileStyled = styled(Profile)`
  position: absolute;
  right: 10px;
  top: 20px;
`
