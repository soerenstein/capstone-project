import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import vCard from 'vcard-parser'
import { v4 as uuidv4 } from 'uuid'
import PageLayout from '../Design/CardWrapper/PageLayout'
import CardWrapper from '../Design/CardWrapper/CardWrapper'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export default function QrScanner({ handleError, handleScan, onClick }) {
  const [result, setResult] = useState('')
  const history = useHistory()
  const contactData = vCard.parse(result)

  handleScan = (data) => {
    if (data) {
      setResult(data)
    }
  }
  handleError = (err) => {
    console.error(err)
  }

  return (
    <>
      {result ? (
        <>
          <PageLayout>
            <CardWrapper>
              <NameStyled>
                {contactData.n[0].value[1] + ' ' + contactData.n[0].value[0]}
              </NameStyled>
              <CompanyStyled>{contactData.org[0].value}</CompanyStyled>
              <DetailListStyled>
                <DetailItemHeading>Kontaktdaten</DetailItemHeading>
                <DataContainer>
                  <DetailItemContent>
                    T: {contactData.tel[0].value}
                  </DetailItemContent>
                  <DetailItemContent>
                    M: {contactData.email[0].value}
                  </DetailItemContent>
                  <DetailItemContent>
                    W: {contactData.url[0].value}
                  </DetailItemContent>
                </DataContainer>
                <DetailItemHeading>Adresse</DetailItemHeading>
                <DataContainer>
                  <DetailItemContent>
                    {contactData.adr[0].value[2]}
                  </DetailItemContent>
                  <DetailItemContent>
                    {contactData.adr[0].value[3] +
                      ' ' +
                      contactData.adr[0].value[5]}
                  </DetailItemContent>
                </DataContainer>
              </DetailListStyled>
              <ButtonStyled onClick={() => handleSubmit(contactData)}>
                Kontakt hinzufügen
              </ButtonStyled>
            </CardWrapper>
          </PageLayout>
        </>
      ) : (
        <PageLayout title="QR Code scannen">
          <CardWrapper>
            <StyledQR
              delay={10}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
            <CompanyStyled>Zur Nutzung auf dem iPhone oder iPad, nutzen Sie bitte den Safari Browser.</CompanyStyled>
            <ButtonStyled onClick={() => history.goBack()}>
              Abbrechen
            </ButtonStyled>
          </CardWrapper>
        </PageLayout>
      )}
    </>
  )
  function handleSubmit(event) {
    const contactItem = {
      firstName: contactData.n[0].value[1],
      lastName: contactData.n[0].value[0],
      company: contactData.org[0].value,
      phone: contactData.tel[0].value,
      mail: contactData.email[0].value,
      street: contactData.adr[0].value[2],
      zip: contactData.adr[0].value[3],
      city: contactData.adr[0].value[5],
      id: uuidv4(),
    }
    onClick(contactItem)
    history.push('/list')
    history.go(0)
  }
}

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
  margin: 10px auto 20px auto;
  padding: 17px 48px;
  font-size: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 5px 10px #00000029;
  border-style: none;
  border-radius: 30px;
  width: 100%;
`

const StyledQR = styled(QrReader)`
  margin: 50px 0 30px 0;
  border-radius: 20%;
`
