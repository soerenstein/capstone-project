import React from 'react'
import styled from 'styled-components/macro'

export default function TopLeftCard() {
    return (
<>
        <StyledTopCard /> 
</>
    )
}

const StyledTopCard = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  right: 50px;
  margin: 0 auto;
  padding: 10px;
  background: rgb(255, 171, 29);
  background: linear-gradient(
    240deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
  height: 30vh;
  z-index: -10;
  border-bottom-right-radius: 40px;
`