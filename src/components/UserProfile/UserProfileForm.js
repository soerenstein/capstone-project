import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'

export default function UserProfileForm({ onSubmit }) {
  const [firstName, setFirstName] = useState(false)
  const [lastName, setLastName] = useState(false)
  const history = useHistory()
  const disabledButton = !firstName && !lastName

  return (
    <div>
      <Header />
      <FormStyled onSubmit={handleSubmit}>
        <LabelWrapper>
          <LabelStyled htmlFor="firstName">
            Vorname
            <input
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
            Nachname
            <input
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
          Unternehmen
          <input
            name="company"
            id="company"
            type="text"
            placeholder="Universal GmbH"
            required
          />
        </LabelStyled>
        <LabelStyled htmlFor="phone">
          Telefon
          <input name="phone" type="tel" id="phone" required />
        </LabelStyled>
        <LabelStyled htmlFor="mail">
          E-Mail
          <input name="mail" id="mail" required />
        </LabelStyled>
        <LabelStyled htmlFor="url">
          Website
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            size="30"
            required
          />
        </LabelStyled>
        <LabelStyled htmlFor="street">
          Adresse
          <input
            name="street"
            type="text"
            id="street"
            placeholder="Straße"
            required
          />
          <LabelWrapper>
            <input name="zip" type="text" id="zip" placeholder="PLZ" required />
            <input
              name="city"
              type="text"
              id="city"
              placeholder="Stadt"
              required
            />
          </LabelWrapper>
        </LabelStyled>
        <button id="submit" disabled={disabledButton}>
          Speichern
        </button>
      </FormStyled>
    </div>
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
  }
}

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
  margin-top: 60px;
`
const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 10px;
`
