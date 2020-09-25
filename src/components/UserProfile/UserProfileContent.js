import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
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
        <Link to="/edit-user">
          <ButtonStyled id="edit">
            Bearbeiten
          </ButtonStyled>
        </Link>
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
  background: linear-gradient(
    0deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
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
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 30px;
  z-index: 100;
`

const NameStyled = styled.h2`
  color: white;
  margin: 25px auto 0 auto;
  text-align: center;
  white-space: nowrap;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CompanyStyled = styled.h3`
  color: white;
  font-size: 20px;
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
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #00000029;
  border-radius: 30px;
`

const HeadingStyled = styled.h4`
  color: white;
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
  font-size: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #00000029;
  border-style: none;
  border-radius: 30px;
  width: 100%;
`
