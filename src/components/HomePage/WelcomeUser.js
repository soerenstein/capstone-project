import React from 'react'
import styled from 'styled-components/macro'

export default function WelcomeUser({ user }) {
  return (
    <WelcomeWrapper>
      {user ? (
        <>
          <StyledWelcome>Moin</StyledWelcome>
          <StyledWelcome>{user.firstName}</StyledWelcome>
        </>
      ) : (
        <>
          <StyledWelcome>Moin.</StyledWelcome>
        </>
      )}
    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: 10%;
`

const StyledWelcome = styled.h2`
  margin: 0;
  color: var(--white);
  width: 80vw; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
