import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'

export default function ProfileContent({
  contacts,
  onFavoriteClick,
  favorites,
}) {
  const [isCategoryVisible, setIsCategoryVisible] = useState(false)
  const [isNoteVisible, setIsNoteVisible] = useState(false)

  let { id } = useParams()
  let contactById = contacts.find((a) => a.id === id)
  const {
    firstName,
    lastName,
    company,
    phone,
    mail,
    street,
    zip,
    city,
    category,
    note,
  } = contactById || contacts

  // const isFavored = favorites.find(
  //   (favoriteItem) => favoriteItem.id === favorites.id
  // )

  return (
    <ProfileWrapper>
      <NameStyled>{firstName + ' ' + lastName}</NameStyled>
      <CompanyStyled>{company}</CompanyStyled>
      <DetailListStyled>
        <DetailItemHeading>Kontaktdaten</DetailItemHeading>
        <DetailItemContainer>
          <DetailItemContent>{phone}</DetailItemContent>
          <DetailItemContent>{mail}</DetailItemContent>
        </DetailItemContainer>
        <DetailItemHeading>Adresse</DetailItemHeading>
        <DetailItemContainer>
          <DetailItemContent>{street}</DetailItemContent>
          <DetailItemContent>{zip + ' ' + city}</DetailItemContent>
        </DetailItemContainer>
        <DetailItemHeading onClick={toggleCategory}>
          Kategorie
        </DetailItemHeading>
        {isCategoryVisible ? (
          <DetailItemContainer>
            <DetailItemContent>{category}</DetailItemContent>
          </DetailItemContainer>
        ) : null}

        <DetailItemHeading onClick={toggleNote}>Notiz</DetailItemHeading>
        {isNoteVisible ? (
          <DetailItemContainer>
            <DetailItemContent>{note}</DetailItemContent>
          </DetailItemContainer>
        ) : null}
      </DetailListStyled>
      <button onClick={() => onFavoriteClick(contactById)}>
        Zu Favoriten hinzufügen
      </button>
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
  height: 80vh;
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
