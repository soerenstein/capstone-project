import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as UserIcon } from '../Design/img/user.svg'

export default function ContactListItem({
  firstName,
  lastName,
  company,
  id,
  onClick,
}) {
  return (
    <ContactContainer key={id} onClick={onClick}>
      <SVGWrapper>
        <UserIcon />
      </SVGWrapper>
      <StyledContactInformation>
        {firstName + ' ' + lastName}
      </StyledContactInformation>
      <StyledContactInformation>{company}</StyledContactInformation>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  padding: 10px 30px;
  height: 100%;
  margin: 10px;
  display: grid;
  grid-template-columns: 30% auto;
  justify-self: end;
  border-radius: 10px;
  box-shadow: 8px 6px 20px -10px rgba(128, 128, 128, 1);
`
const SVGWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
`
const StyledContactInformation = styled.p`
  padding: 5px;
  margin: 0;
  justify-self: start;
  grid-column: 2;
  word-wrap: normal;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1em;
`
