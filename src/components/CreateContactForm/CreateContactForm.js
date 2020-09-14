import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

export default function CreateContactForm({ onSubmit }) {

  const [firstName, setFirstName] = useState(false)
  const [lastName, setLastName] = useState(false)

  const disabledButton = !firstName && !lastName
  
  return (
    <div>
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
          />
        </LabelStyled>
        <LabelStyled htmlFor="phone">
          Telefon
          <input name="phone" type="tel" id="phone" />
        </LabelStyled>
        <LabelStyled htmlFor="mail">
          E-Mail
          <input name="mail" id="mail" />
        </LabelStyled>

        <LabelStyled htmlFor="street">
          Adresse
          <input name="zip" type="text" id="street" placeholder="Straße" />
          <LabelWrapper>
            <input name="zip" type="text" id="zip" placeholder="PLZ" />
            <input name="city" type="text" id="city" placeholder="Stadt" />
          </LabelWrapper>
        </LabelStyled>
        <LabelStyled htmlFor="note">
          Notiz
          <input name="note" type="text" id="note" />
        </LabelStyled>
        <LabelStyled htmlFor="category">
          Kategorie
          <input
            name="category"
            type="text"
            id="category"
            placeholder="Kunde, Dienstleister"
          />
        </LabelStyled>
        <SubmitButton id="submit" disabled={disabledButton}>
          Kontakt hinzufügen
        </SubmitButton>
      </FormStyled>
    </div>
  )

  function handleChange(event) {
    event.target.id === "firstName" && setFirstName(event.target.id === "firstName" && event.target.value !== '' ? true : false)
    event.target.id === "lastName" &&  setLastName(event.target.id === "lastName" && event.target.value !== '' ? true : false)    
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
  padding: 20px;
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
const SubmitButton = styled.button``
