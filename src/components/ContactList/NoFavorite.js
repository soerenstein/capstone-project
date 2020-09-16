import React from 'react'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function NoFavorite() {
  return (
    <>
      <Header />
      <ListWrapper>
      <p>Es sind keine Favoriten vorhanden.</p>
      <NavLink to="/list">
        <button>Zur Kontaktliste</button>
      </NavLink>
    </ListWrapper>
</>
  )
}

const ListWrapper = styled.div`
    display: grid; 
    margin-top: 50px; 
`

