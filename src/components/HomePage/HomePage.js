import React from 'react'
import styled from 'styled-components/macro'
import WelcomeUser from './WelcomeUser'
import TopLeftCard from '../Design/CardWrapper/TopLeftCard'
import NavButton from './NavButton'

export default function HomePage({ user }) {
  return (
    <div>
        <TopLeftCard  /> 
       <WelcomeUser user={user}/>
      <StyledCardWrapper>
        <NavButton />
      </StyledCardWrapper>
    </div>
  )
}


const StyledCardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 15px;
  right: 15px;
  margin: 0 auto;
  padding: 10px;
  background: rgb(255, 171, 29);
  background: linear-gradient(
    45deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
  height: 50vh;
  z-index: -10;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`
