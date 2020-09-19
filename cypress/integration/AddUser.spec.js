/// <reference types="cypress" />

context('AddUser', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/user-profile')
  })
  it('it creates a user profile', () => {
    cy.get('input[id=firstName]').type('Erika').should('have.value', 'Erika')
    cy.get('input[id=lastName]')
      .type('Mustermann')
      .should('have.value', 'Mustermann')
    cy.get('input[id=company]')
      .type('cypress GmbH')
      .should('have.value', 'cypress GmbH')
    cy.get('input[id=phone]')
      .type('0176-123123123')
      .should('have.value', '0176-123123123')
    cy.get('input[id=mail]')
      .type('moin@hamburg.de')
      .should('have.value', 'moin@hamburg.de')
    cy.get('input[id=street]')
      .type('Beispiel-Straße 3')
      .should('have.value', 'Beispiel-Straße 3')
    cy.get('input[id=url]')
      .type('https://neuefische.de/')
      .should('have.value', 'https://neuefische.de/')
    cy.get('input[id=zip]').type('22761').should('have.value', '22761')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('button[id=submit]').click()

    cy.get('svg')
    cy.get('h2').contains('Erika Mustermann')
    cy.get('h3').contains('cypress GmbH')
    cy.get('h4').eq(0).contains('Kontaktdaten')
    cy.get('p').eq(0).contains('T: 0176-123123123')
    cy.get('p').eq(1).contains('M: moin@hamburg.de')
    cy.get('p').eq(2).contains('W: https://neuefische.de/')
    cy.get('h4').eq(1).contains('Adresse')
    cy.get('p').eq(3).contains('Beispiel-Straße 3')
    cy.get('p').eq(4).contains('22761 Hamburg')
  })

  it('it creates and edit a user profile', () => {
    cy.get('input[id=firstName]').type('Erika').should('have.value', 'Erika')
    cy.get('input[id=lastName]')
      .type('Mustermann')
      .should('have.value', 'Mustermann')
    cy.get('input[id=company]')
      .type('cypress GmbH')
      .should('have.value', 'cypress GmbH')
    cy.get('input[id=phone]')
      .type('0176-123123123')
      .should('have.value', '0176-123123123')
    cy.get('input[id=mail]')
      .type('moin@hamburg.de')
      .should('have.value', 'moin@hamburg.de')
    cy.get('input[id=street]')
      .type('Beispiel-Straße 3')
      .should('have.value', 'Beispiel-Straße 3')
    cy.get('input[id=url]')
      .type('https://neuefische.de/')
      .should('have.value', 'https://neuefische.de/')
    cy.get('input[id=zip]').type('22761').should('have.value', '22761')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('button[id=submit]').click()

    cy.get('svg')
    cy.get('h2').contains('Erika Mustermann')
    cy.get('h3').contains('cypress GmbH')
    cy.get('h4').eq(0).contains('Kontaktdaten')
    cy.get('p').eq(0).contains('T: 0176-123123123')
    cy.get('p').eq(1).contains('M: moin@hamburg.de')
    cy.get('p').eq(2).contains('W: https://neuefische.de/')
    cy.get('h4').eq(1).contains('Adresse')
    cy.get('p').eq(3).contains('Beispiel-Straße 3')
    cy.get('p').eq(4).contains('22761 Hamburg')

    cy.get('button[id=edit]').click()
    cy.get('input[id=firstName]').type('Max').should('have.value', 'Max')
    cy.get('input[id=lastName]')
      .type('Musterfrau')
      .should('have.value', 'Musterfrau')
    cy.get('input[id=company]')
      .type('Universal GmbH')
      .should('have.value', 'Universal GmbH')
    cy.get('input[id=phone]')
      .type('0175-323424')
      .should('have.value', '0175-323424')
    cy.get('input[id=mail]')
      .type('tschüss@hamburg.de')
      .should('have.value', 'tschüss@hamburg.de')
    cy.get('input[id=street]')
      .type('Universal-Straße 3')
      .should('have.value', 'Universal-Straße 3')
    cy.get('input[id=url]')
      .type('https://google.com/')
      .should('have.value', 'https://google.com/')
    cy.get('input[id=zip]').type('20239').should('have.value', '20239')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('button[id=submit]').click()

    cy.get('svg')
    cy.get('h2').contains('Max Musterfrau')
    cy.get('h3').contains('Universal GmbH')
    cy.get('h4').eq(0).contains('Kontaktdaten')
    cy.get('p').eq(0).contains('T: 0175-323424')
    cy.get('p').eq(1).contains('M: tschüss@hamburg.de')
    cy.get('p').eq(2).contains('W: https://google.com/')
    cy.get('h4').eq(1).contains('Adresse')
    cy.get('p').eq(3).contains('Universal-Straße 3')
    cy.get('p').eq(4).contains('20239 Hamburg')
  })
})