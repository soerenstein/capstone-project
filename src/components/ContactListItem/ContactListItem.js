import React from 'react'
import styled from 'styled-components'

export default function ContactListItem({
  firstName,
  lastName,
  company,
  index,
}) {
  return (
    <li key={index}>
      <ContactContainer>
        <SVGWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="38"
            viewBox="0 0 27 30"
          >
            <path
              d="M30,33a1.417,1.417,0,0,1-1.5-1.5v-3A4.42,4.42,0,0,0,24,24H12a4.42,4.42,0,0,0-4.5,4.5v3A1.417,1.417,0,0,1,6,33a1.417,1.417,0,0,1-1.5-1.5v-3A7.427,7.427,0,0,1,12,21H24a7.427,7.427,0,0,1,7.5,7.5v3A1.417,1.417,0,0,1,30,33ZM18,18a7.427,7.427,0,0,1-7.5-7.5,7.5,7.5,0,0,1,15,0A7.427,7.427,0,0,1,18,18ZM18,6a4.42,4.42,0,0,0-4.5,4.5,4.5,4.5,0,0,0,9,0A4.42,4.42,0,0,0,18,6Z"
              transform="translate(-4.5 -3)"
            />
          </svg>
        </SVGWrapper>
        <StyledContactInformation>
          {firstName + ' ' + lastName}
        </StyledContactInformation>
        <StyledContactInformation>{company}</StyledContactInformation>
      </ContactContainer>
    </li>
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
const SVGWrapper = styled.section`
  grid-column: 1;
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
`
const StyledContactInformation = styled.div`
  padding: 5px;
  justify-self: start;
  grid-column: 2;
  word-wrap: break-word;
  overflow: hidden;
  height: 1em;
`