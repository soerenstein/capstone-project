import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateContact( onSubmit ) {

    const [formData, setFormData] = useState('')
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
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Max"
                    />  
                </LabelStyled>
                <LabelStyled>
                    Nachname
                    <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Mustermann"
                    />  
                </LabelStyled>
            </LabelWrapper>
                <LabelStyled>
                    Unternehmen
                    <input 
                    name="company"
                    onChange={handleChange}
                    placeholder="Universal GmbH"
                    />  
                </LabelStyled>
                <LabelStyled>
                    Telefon
                    <input 
                    name="phone"
                    />  
                </LabelStyled>
                <LabelStyled>
                    E-Mail
                    <input 
                    name="mail"
                    />  
                </LabelStyled>
            
                <LabelStyled>
                    Adresse
                    <input 
                    name="company"
                    placeholder="Straße"
                    />  
            <LabelWrapper>
                    <input 
                    name="zip"
                    placeholder="PLZ"
                    />  
                    <input 
                    name="company"
                    placeholder="Stadt"
                    />  
            </LabelWrapper> 
                </LabelStyled>
                <LabelStyled>
                    Notiz
                    <input 
                    name="note"
                    />  
                </LabelStyled>
                <LabelStyled>
                    Kategorie
                    <input 
                    name="category"
                    placeholder="Kunde, Dienstleister"
                    />  
                </LabelStyled>
                <SubmitButton disabled={disabledButton}>Kontakt hinzufügen</SubmitButton>
            </FormStyled>
        </div>
    )

     function handleChange() {
        setDisabledButton(formData.firstName === '' ? true : false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        setFormData('')
        setDisabledButton(true)
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
const SubmitButton = styled.button`

`