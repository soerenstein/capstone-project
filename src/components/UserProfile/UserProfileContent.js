import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import UserQR from '../ShareProfile/UserQR'
import PageLayout from '../Design/CardWrapper/PageLayout'

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
    <PageLayout>
      <QRWrapper>
        <UserQR user={user} />
      </QRWrapper>

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
        <NavLink id="edit" to="/edit-user">
          <ButtonStyled>Bearbeiten</ButtonStyled>
        </NavLink>
      </Wrapper>
    </PageLayout>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 20px 15px;
  background: var(--gradient-orange);
  border-radius: 40px 40px 0 0;
`

const QRWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  width: 230px;
  margin: 20px auto -15px auto;
  background: var(--white);
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 30px;
  z-index: 100;
`

const NameStyled = styled.h2`
  color: var(--white);
  margin: 25px auto 0 auto;
  text-align: center;
  white-space: nowrap;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CompanyStyled = styled.h3`
  color: var(--white);
  font-size: 1em;
  text-align: center;
  margin: 5px 0;
`

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const DataContainer = styled.div`
  padding: 10px;
  padding-left: 30px;
  background: var(--button-white);
  box-shadow: var(--shadow-grey);
  border-radius: 30px;
`

const HeadingStyled = styled.h4`
  color: var(--white);
  margin: 5px 0 5px 0;
  padding-left: 30px;
  padding-top: 10px;
`

const DataContent = styled.p`
  margin: 15px 0;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ButtonStyled = styled.button`
  margin: 10px auto 20px auto;
  padding: 17px 48px;
  text-decoration: none;
  font-size: 1.2em;
  background: var(--button-white);
  box-shadow: var(--shadow-grey);
  border-style: none;
  border-radius: 30px;
  width: 100%;
`
