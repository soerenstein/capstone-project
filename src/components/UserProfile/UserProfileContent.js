import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import UserQR from '../ShareProfile/UserQR'

export default function UserProfileContent({ user }) {
  const {
    firstName,
    lastName,
    company,
    phone,
    mail,
    street,
    zip,
    city,
    url,
  } = user

  return (
    <>
      <UserQR user={user} />
      <Wrapper>
        <NameStyled>{firstName + ' ' + lastName}</NameStyled>
        <CompanyStyled>{company}</CompanyStyled>
        <ListStyled>
          <HeadingStyled>Kontaktdaten</HeadingStyled>
          <DataContainer>
            <DataContent>T: {phone}</DataContent>
            <DataContent>M: {mail}</DataContent>
            <DataContent>W: {url} </DataContent>
          </DataContainer>
          <HeadingStyled>Adresse</HeadingStyled>
          <DataContainer>
            <DataContent>{street}</DataContent>
            <DataContent>{zip + ' ' + city}</DataContent>
          </DataContainer>
        </ListStyled>
        <Link to="/edit-user">
          <button id="edit" to="/edit-user">
            Bearbeiten
          </button>
        </Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: static;
  left: 15px;
  right: 15px;
  bottom: 0;
  padding: 10px;
  background: rgb(255, 171, 29);
  background: linear-gradient(
    240deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );

  z-index: 100;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`

const NameStyled = styled.h2`
  color: white;
  text-align: center;
  margin: 25px 0 5px 0;
`

const CompanyStyled = styled.h3`
  color: white;
  text-align: center;
  margin: 5px 0;
`

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const DataContainer = styled.div`
  background: white;
  border-radius: 30px;
  padding: 10px 0 10px 30px;
`

const HeadingStyled = styled.h4`
  color: white;
  margin: 5px 0 5px 0;
  padding-left: 30px;
  padding-top: 10px;
`

const DataContent = styled.p`
  margin: 10px 0;
`
