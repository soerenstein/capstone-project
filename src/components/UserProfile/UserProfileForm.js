import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import PageLayout from '../Design/CardWrapper/PageLayout'
import CardWrapper from '../Design/CardWrapper/CardWrapper'

export default function UserProfileForm({ onSubmit }) {
  const [firstName, setFirstName] = useState(false)
  const [lastName, setLastName] = useState(false)
  const history = useHistory()
  const disabledButton = !firstName && !lastName

  return (
    <PageLayout title="Nutzerprofil anlegen">
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
                required
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
                required
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
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="phone">
            <LabelName>Telefon</LabelName>
            <InputStyled
              name="phone"
              type="tel"
              id="phone"
              placeholder="0176-12345678"
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="mail">
            <LabelName>E-Mail</LabelName>
            <InputStyled
              name="mail"
              id="mail"
              placeholder="hello@me.de"
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="url">
            <LabelName>Website</LabelName>
            <InputStyled
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com"
              size="30"
              required
            />
          </LabelStyled>
          <LabelStyled htmlFor="street">
            <LabelName>Adresse</LabelName>
            <InputStyled
              name="street"
              type="text"
              id="street"
              placeholder="Straße"
              required
            />
            <LabelWrapper>
              <InputStyled
                name="zip"
                type="text"
                id="zip"
                placeholder="PLZ"
                required
              />
              <InputStyled
                name="city"
                type="text"
                id="city"
                placeholder="Stadt"
                required
              />
            </LabelWrapper>
          </LabelStyled>
          <ButtonStyled id="submit" disabled={disabledButton}>
            Speichern
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
    const userItem = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      phone: form.phone.value,
      mail: form.mail.value,
      street: form.street.value,
      zip: form.zip.value,
      city: form.city.value,
      url: form.url.value,
      id: uuidv4(),
    }
    onSubmit(userItem)
    form.reset()
    history.push('/user-profile')
    history.go(0)
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
  color: var(--white);
`

const LabelName = styled.div`
  padding-left: 20px;
`
const InputStyled = styled.input`
  border-style: none;
  padding-left: 20px;
  height: 50px;
  box-shadow: var(--shadow-grey);
  border-radius: 30px;
  outline: none;
  margin-bottom: 15px;
  width: 100%; 
`

const ButtonStyled = styled.button`
  padding: 17px 48px;
  font-size: 20px;
  background: var(--button-white);
  box-shadow: var(--shadow-grey);
  border-style: none;
  border-radius: 30px;
  opacity: 1;
  margin: 20px 0 30px 0;

  &:disabled {
    opacity: 0.5;
  }
`
