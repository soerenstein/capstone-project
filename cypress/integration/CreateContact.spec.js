/// <reference types="cypress" />

context('CreateContact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')
  })

  it('tests all inputs, submits it and checks if the contact appears in the list', () => {
    cy.get('form').contains('Vorname').type('Erika')
    cy.get('input[id=firstName]').should('have.value', 'Erika')
    cy.get('form').contains('Nachname').type('Mustermann')
    cy.get('input[id=lastName]').should('have.value', 'Mustermann')
    cy.get('form').contains('Unternehmen').type('cypress GmbH')
    cy.get('input[id=company]').should('have.value', 'cypress GmbH')
    cy.get('form').contains('Telefon').type('0176-123123123')
    cy.get('input[id=phone]').should('have.value', '0176-123123123')

    cy.get('form').contains('E-Mail').type('moin@hamburg.de')
    cy.get('input[id=mail]').should('have.value', 'moin@hamburg.de')

    cy.get('form').contains('Adresse').type('Beispiel-Straße 3')
    cy.get('input[id=street]').should('have.value', 'Beispiel-Straße 3')

    cy.get('input[id=zip]').type('22761')
    cy.get('input[id=zip]').should('have.value', '22761')

    cy.get('input[id=city]').type('Hamburg')
    cy.get('input[id=city]').should('have.value', 'Hamburg')

    cy.get('form').contains('Notiz').type('Dies ist eine Notiz.')

    cy.get('input[id=note]').should('have.value', 'Dies ist eine Notiz.')

    cy.get('form').contains('Kategorie').type('Kunde')
    cy.get('input[id=category]').should('have.value', 'Kunde')
    cy.get('button[id=submit]').click()
    cy.visit('http://localhost:3000/list')
    cy.get('div').contains('Erika')
    cy.visit('http://localhost:3000/create')
    cy.get('form').contains('Vorname').type('Max')
    cy.get('input[id=firstName]').should('have.value', 'Max')
    cy.get('form').contains('Nachname').type('Musterfrau')
    cy.get('input[id=lastName]').should('have.value', 'Musterfrau')
    cy.get('form').contains('Unternehmen').type('pm GmbH')
    cy.get('input[id=company]').should('have.value', 'pm GmbH')
    cy.get('form').contains('Telefon').type('040-123321')
    cy.get('input[id=phone]').should('have.value', '040-123321')

    cy.get('form').contains('E-Mail').type('tschüss@hamburg.de')
    cy.get('input[id=mail]').should('have.value', 'tschüss@hamburg.de')

    cy.get('form').contains('Adresse').type('Universal-Straße 3')
    cy.get('input[id=street]').should('have.value', 'Universal-Straße 3')

    cy.get('input[id=zip]').type('20239')
    cy.get('input[id=zip]').should('have.value', '20239')

    cy.get('input[id=city]').type('Hamburg')
    cy.get('input[id=city]').should('have.value', 'Hamburg')

    cy.get('form').contains('Notiz').type('Dies ist keine Notiz.')

    cy.get('input[id=note]').should('have.value', 'Dies ist keine Notiz.')

    cy.get('form').contains('Kategorie').type('Dienstleister')
    cy.get('input[id=category]').should('have.value', 'Dienstleister')
    cy.get('button[id=submit]').click()
    cy.visit('http://localhost:3000/list')
    cy.get('div').contains('Erika')
    cy.get('div').contains('Max')
  })
})
