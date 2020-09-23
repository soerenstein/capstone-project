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
  height: 90px;
  margin: 10px;
  display: grid;
  grid-template-columns: 8% auto;
  justify-self: end;
  border-radius: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #00000029;
`
const SVGWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
`
const StyledContactInformation = styled.p`
  padding: 5px;
  padding-left: 20px;
  margin: 0;
  justify-self: start;
  grid-column: 2;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`
