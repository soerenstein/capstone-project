import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../img/logo.svg'

export default function TopLeftCard() {
  return (
    <>
      <StyledTopCard>
        <StyledLogo />
      </StyledTopCard>
    </>
  )
}

const StyledLogo = styled(Logo)`
  height: 1.5em;
  margin-top: 10px;
`

const StyledTopCard = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  right: 0px;
  margin: 0 auto;
  padding: 10px;
  background: rgb(255, 171, 29);
  background: var(--gradient-orange-45);
  height: 35%;
  z-index: -10;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-around;
`
