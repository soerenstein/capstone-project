import React from 'react'
import styled from 'styled-components/macro'

export default function CardWrapper({ children }) {
  return (
    <>
      <Shadow />
      <StyledCardWrapper>{children}</StyledCardWrapper>
    </>
  )
}

const StyledCardWrapper = styled.div`
  position: absolute;
  height: 85%;
  width: 100%;
  bottom: 0;
  overflow: auto;
  padding: 0 15px;
  background: var(--gradient-orange);
  border-radius: 40px 40px 0 0;
`

const Shadow = styled.div`
  position: absolute;
  height: 40px;
  top: 15%;
  width: 100%;
  border-radius: 40px 40px 0 0;
  background: var(--gradient-orange-shadow);
  z-index: 100;
  margin-bottom: 1px;
`
