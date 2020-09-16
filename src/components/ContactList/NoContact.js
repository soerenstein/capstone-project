import React from 'react'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function NoContact() {
  return (
    <>
      <Header />
      <ListWrapper>
      <p>Es sind keine Kontakte vorhanden.</p>
      <NavLink to="/create">
        <button>Neuen Kontakt erstellen</button>
      </NavLink>
    </ListWrapper>
</>
  )
}


const ListWrapper = styled.div`
    display: grid; 
    margin-top: 50px; 
`


