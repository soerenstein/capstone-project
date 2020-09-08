import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserProfileContent({ user }) {
  return (
    <>
      <NameStyled>{user.firstName + ' ' + user.lastName}</NameStyled>
      <CompanyStyled>{user.company}</CompanyStyled>
      <ProfileWrapper>
        <DetailListStyled>
          <DetailItemHeading>Kontaktdaten</DetailItemHeading>
          <DetailItemContainer>
            <DetailItemContent>{user.phone}</DetailItemContent>
            <DetailItemContent>{user.mail}</DetailItemContent>
          </DetailItemContainer>
          <DetailItemHeading>Adresse</DetailItemHeading>
          <DetailItemContainer>
            <DetailItemContent>{user.street}</DetailItemContent>
            <DetailItemContent>{user.zip + ' ' + user.city}</DetailItemContent>
          </DetailItemContainer>
        </DetailListStyled>
      </ProfileWrapper>
    </>
  )
}

const ProfileWrapper = styled.div`
  position: absolute;
  bottom: 0;
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
  height: 50vh;
  z-index: 100;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`

const NameStyled = styled.h2`
  color: black;
  text-align: center;
  margin: 25px 0 5px 0;
`

const CompanyStyled = styled.h3`
  color: black;
  text-align: center;
  margin: 5px 0;
`

const DetailListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const DetailItemContainer = styled.p`
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
