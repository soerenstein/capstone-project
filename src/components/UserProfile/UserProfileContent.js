import React from 'react'
import styled from 'styled-components/macro'

export default function UserProfileContent({ userDataInfo }) {

  const {firstName, lastName, company, phone, mail, street, zip, city} = userDataInfo

  return (
      <ProfileWrapper>
        <NameStyled>{firstName + ' ' + lastName}</NameStyled>
        <CompanyStyled>{company}</CompanyStyled>
        <DetailListStyled>
          <DetailItemHeading>Kontaktdaten</DetailItemHeading>
          <DetailItemContainer>
            <DetailItemContent>T: {phone}</DetailItemContent>
            <DetailItemContent>M: {mail}</DetailItemContent>
          </DetailItemContainer>
          <DetailItemHeading>Adresse</DetailItemHeading>
          <DetailItemContainer>
            <DetailItemContent>{street}</DetailItemContent>
            <DetailItemContent>{zip + ' ' + city}</DetailItemContent>
          </DetailItemContainer>
        </DetailListStyled>
      </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  position: sticky;
  left: 15px;
  right: 15px;
  margin: 0 auto;
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

const DetailListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const DetailItemContainer = styled.div`
  background: white;
  border-radius: 30px;
  padding: 10px 0 10px 30px;
`

const DetailItemHeading = styled.h4`
  color: white;
  margin: 5px 0 5px 0;
  padding-left: 30px;
  padding-top: 10px;
`

const DetailItemContent = styled.p`
  margin: 10px 0;
`
