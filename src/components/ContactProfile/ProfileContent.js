import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import PageLayout from '../Design/CardWrapper/PageLayout'
import CardWrapper from '../Design/CardWrapper/CardWrapper'

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

  const isFavored = favorites.find(
    (favorites) => contactById.id === favorites.id
  )

  return (
    <PageLayout>
      <CardWrapper>
        <NameStyled>{firstName + ' ' + lastName}</NameStyled>
        <CompanyStyled>{company}</CompanyStyled>
        <DetailListStyled>
          <DetailItemHeading>Kontaktdaten</DetailItemHeading>
          <DataContainer>
            <DetailItemContent>T: {phone}</DetailItemContent>
            <DetailItemContent>M: {mail}</DetailItemContent>
          </DataContainer>
          <DetailItemHeading>Adresse</DetailItemHeading>
          <DataContainer>
            <DetailItemContent>{street}</DetailItemContent>
            <DetailItemContent>{zip + ' ' + city}</DetailItemContent>
          </DataContainer>
          {category ? (
            <>
              <DetailItemHeading>Kategorie</DetailItemHeading>
              <DataContainer>
                <DetailItemContent>{category}</DetailItemContent>
              </DataContainer>
            </>
          ) : null}
          {note ? (
            <>
              <DetailItemHeading>Notiz</DetailItemHeading>
              <DataContainer>
                <DetailItemContent>{note}</DetailItemContent>
              </DataContainer>
            </>
          ) : null}
        </DetailListStyled>
        <ButtonStyled
          id="favoriteButton"
          onClick={() => onFavoriteClick(contactById)}
        >
          {isFavored ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
        </ButtonStyled>
      </CardWrapper>
    </PageLayout>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0 15px;
  background: linear-gradient(
    0deg,
    rgba(255, 171, 29, 1) 0%,
    rgba(248, 80, 28, 1) 100%
  );
  border-radius: 40px 40px 0 0;
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

  text-align: center;
  margin: 5px 0;
`

const DetailListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const DataContainer = styled.div`
  padding: 10px;
  padding-left: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 5px 10px #00000029;
  border-radius: 30px;
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

const ButtonStyled = styled.button`
  padding: 17px 48px;
  font-size: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 5px 10px #00000029;
  border-style: none;
  border-radius: 30px;
  justify-content: center;
`
