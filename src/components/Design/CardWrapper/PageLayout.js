import React from 'react'
import styled from 'styled-components/macro'
import Header from '../../Header/Header'

export default function PageLayout({ title, children }) {
  return (
    <PageStyled>
      <Header />
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
  font-size: 25px;
  font-weight: 500;
`
