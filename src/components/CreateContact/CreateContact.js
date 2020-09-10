import React, { useState } from 'react'
import styled from 'styled-components'

export default function CreateContact({ onSubmit }) {
  const [disabledButton, setDisabledButton] = useState(true)

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <LabelWrapper>
          <LabelStyled>
            Vorname
            <input
              autoFocus
              name="firstName"
              id="firstName"
              type="text"
              maxLength="40"
              value={disabledButton.firstName}
              onChange={handleChange}
              placeholder="Max"
            />
          </LabelStyled>
          <LabelStyled>
            Nachname
            <input
              name="lastName"
              id="lastName"
              type="text"
              maxLength="40"
              value={disabledButton.lastName}
              onChange={handleChange}
              placeholder="Mustermann"
            />
          </LabelStyled>
        </LabelWrapper>
        <LabelStyled>
          Unternehmen
          <input
            name="company"
            id="company"
            type="text"
            onChange={handleChange}
            placeholder="Universal GmbH"
          />
        </LabelStyled>
        <LabelStyled>
          Telefon
          <input name="phone" type="tel" id="phone" />
        </LabelStyled>
        <LabelStyled>
          E-Mail
          <input name="mail" id="mail" />
        </LabelStyled>

        <LabelStyled>
          Adresse
          <input name="zip" type="text" id="street" placeholder="Straße" />
          <LabelWrapper>
            <input name="zip" type="text" id="zip" placeholder="PLZ" />
            <input name="city" type="text" id="city" placeholder="Stadt" />
          </LabelWrapper>
        </LabelStyled>
        <LabelStyled>
          Notiz
          <input name="note" type="text" id="note" />
        </LabelStyled>
        <LabelStyled>
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

  function handleChange() {
    setDisabledButton(disabledButton.firstName === '' ? true : false)
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
    }
    console.log(contactItem)
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
