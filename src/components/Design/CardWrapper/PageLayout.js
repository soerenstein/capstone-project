import React from 'react'
import styled from 'styled-components/macro'
import NavBar from '../../NavBar/NavBar'

export default function PageLayout({ title, children }) {
  return (
    <PageStyled>
      <NavBar />
      {title ? <PageName>{title}</PageName> : null}
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 64px auto;
  align-content: flex-start;
`

const PageName = styled.h1`
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: 500;
`
