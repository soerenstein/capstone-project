import React, { useState } from 'react'
import styled from 'styled-components/macro'

const contacts = {
  firstName: 'Max',
  lastName: 'Mustermann',
  company: 'Universal GmbH',
  phone: '0176-123123123',
  mail: 'max.mustermann@universal.de',
  street: 'ABC-Straße 105',
  zip: '20239',
  city: 'Hamburg',
  note: 'Wv Montag',
  category: 'pot. Kunde',
}

export default function ProfileContent() {
  const [isCategoryVisible, setIsCategoryVisible] = useState(false)
  const [isNoteVisible, setIsNoteVisible] = useState(false)
  return (
    <ProfileWrapper>
      <NameStyled>{contacts.firstName + ' ' + contacts.lastName}</NameStyled>
      <CompanyStyled>{contacts.company}</CompanyStyled>
      <DetailListStyled>
        <DetailItemHeading>Kontaktdaten</DetailItemHeading>
        <DetailItemContainer>
          <DetailItemContent>{contacts.phone}</DetailItemContent>
          <DetailItemContent>{contacts.mail}</DetailItemContent>
        </DetailItemContainer>
        <DetailItemHeading>Adresse</DetailItemHeading>
        <DetailItemContainer>
          <DetailItemContent>{contacts.street}</DetailItemContent>
          <DetailItemContent>{contacts.zip}</DetailItemContent>
          <DetailItemContent>{contacts.city}</DetailItemContent>
        </DetailItemContainer>
        <DetailItemHeading onClick={toggleCategory}>
          Kategorie
        </DetailItemHeading>
        {isCategoryVisible ? (
          <DetailItemContainer>
            <DetailItemContent>{contacts.category}</DetailItemContent>
          </DetailItemContainer>
        ) : null}

        <DetailItemHeading onClick={toggleNote}>Notiz</DetailItemHeading>
        {isNoteVisible ? (
          <DetailItemContainer>
            <DetailItemContent>{contacts.note}</DetailItemContent>
          </DetailItemContainer>
        ) : null}
      </DetailListStyled>
    </ProfileWrapper>
  )

  function toggleCategory() {
    setIsCategoryVisible(!isCategoryVisible)
  }
  function toggleNote() {
    setIsNoteVisible(!isNoteVisible)
  }
}

const ProfileWrapper = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 5px;
  right: 5px;
  margin: 0 auto;
  padding: 10px;
  background: rgb(255, 171, 29);
  background: linear-gradient(
    240deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
  height: 90vh;
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

const DetailItemContainer = styled.li`
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
