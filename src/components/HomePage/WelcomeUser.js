import React from 'react'
import styled from 'styled-components/macro'

export default function WelcomeUser({ user }) {
    return (
        <WelcomeWrapper>
            <StyledWelcome>Welcome</StyledWelcome>
            <StyledWelcome>{user.firstName}</StyledWelcome>
        </WelcomeWrapper>
    )
}

const WelcomeWrapper = styled.div`
    position: absolute; 
    top: 100px; 
    left: 40px; 
`

const StyledWelcome = styled.h2`
 margin: 0px; 
    color: white; 
`