import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import CardWrapper from '../Design/CardWrapper/CardWrapper'
import PageLayout from '../Design/CardWrapper/PageLayout'

export default function CreateContactForm({ onSubmit }) {
  const [firstName, setFirstName] = useState(false)
  const [lastName, setLastName] = useState(false)

  const disabledButton = !firstName && !lastName

  return (
    <PageLayout title="Kontakt anlegen">
      <CardWrapper>
        <FormStyled onSubmit={handleSubmit}>
          <LabelWrapper>
            <LabelStyled htmlFor="firstName">
              <LabelName>Vorname</LabelName>
              <InputStyled
                autoFocus
                name="firstName"
                id="firstName"
                type="text"
                maxLength="40"
                onChange={handleChange}
                placeholder="Max"
              />
            </LabelStyled>
            <LabelStyled htmlFor="lastName">
              <LabelName>Nachname</LabelName>

              <InputStyled
                name="lastName"
                id="lastName"
                type="text"
                maxLength="40"
                onChange={handleChange}
                placeholder="Mustermann"
              />
            </LabelStyled>
          </LabelWrapper>
          <LabelStyled htmlFor="company">
            <LabelName>Unternehmen</LabelName>

            <InputStyled
              name="company"
              id="company"
              type="text"
              placeholder="Universal GmbH"
            />
          </LabelStyled>
          <LabelStyled htmlFor="phone">
            <LabelName>Telefon</LabelName>
            <InputStyled
              name="phone"
              type="tel"
              id="phone"
              placeholder="0176-12345678"
            />
          </LabelStyled>
          <LabelStyled htmlFor="mail">
            <LabelName>E-Mail</LabelName>
            <InputStyled name="mail" id="mail" placeholder="hello@me.de" />
          </LabelStyled>
          <LabelStyled htmlFor="street">
            <LabelName>Adresse</LabelName>
            <InputStyled
              name="zip"
              type="text"
              id="street"
              placeholder="Straße"
            />
            <LabelWrapper>
              <InputStyled name="zip" type="text" id="zip" placeholder="PLZ" />
              <InputStyled
                name="city"
                type="text"
                id="city"
                placeholder="Stadt"
              />
            </LabelWrapper>
          </LabelStyled>
          <LabelStyled htmlFor="note">
            <LabelName>Notiz</LabelName>

            <InputStyled name="note" type="text" id="note" />
          </LabelStyled>
          <LabelStyled htmlFor="category">
            <LabelName>Kategorie</LabelName>

            <InputStyled
              name="category"
              type="text"
              id="category"
              placeholder="Kunde, Dienstleister"
            />
          </LabelStyled>
          <ButtonStyled id="submit" disabled={disabledButton}>
            Kontakt hinzufügen
          </ButtonStyled>
        </FormStyled>
      </CardWrapper>
    </PageLayout>
  )

  function handleChange(event) {
    event.target.id === 'firstName' &&
      setFirstName(
        event.target.id === 'firstName' && event.target.value !== ''
          ? true
          : false
      )
    event.target.id === 'lastName' &&
      setLastName(
        event.target.id === 'lastName' && event.target.value !== ''
          ? true
          : false
      )
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const contactItem = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      phone: form.phone.value,
      mail: form.mail.value,
      street: form.street.value,
      zip: form.zip.value,
      city: form.city.value,
      note: form.note.value,
      category: form.category.value,
      id: uuidv4(),
    }
    onSubmit(contactItem)
    form.reset()
    form[0] && form[0].focus()
  }
}

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
  margin: auto;
  margin-top: 40px;
`
const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`

const LabelStyled = styled.label`
  display: grid;
  color: #ffffff;
`

const LabelName = styled.div`
  padding-left: 20px;
`
const InputStyled = styled.input`
  border-style: none;
  padding-left: 20px;
  height: 50px;
  box-shadow: 0px 5px 10px #00000029;
  border-radius: 30px;
  outline: none;
  margin-bottom: 15px;
`

const ButtonStyled = styled.button`
  padding: 17px 48px;
  font-size: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #00000029;
  border-style: none;
  border-radius: 30px;
  opacity: 1;
  margin: 20px 0 30px 0;

  &:disabled {
    opacity: 0.5;
  }
`
