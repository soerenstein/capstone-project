/// <reference types="cypress" />

context('AddFavorite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites')
  })

  it('creates a contact and adds it to the favorites list', () => {
    cy.get('button').click()
    cy.get('button').click()
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
    cy.get('input[id=zip]').type('22761').should('have.value', '22761')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('input[id=note]')
      .type('Dies ist eine Notiz.')
      .should('have.value', 'Dies ist eine Notiz.')
    cy.get('input[id=category]').type('Kunde').should('have.value', 'Kunde')
    cy.get('button[id=submit]').click()
    cy.visit('http://localhost:3000/list')
    cy.get('div').contains('Erika').click()
    cy.get('button').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('div').contains('Erika')
  })
  it('creates two contacts, adds them to the favorites list and removes one', () => {
    cy.get('button').click()
    cy.get('button').click()
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
    cy.get('input[id=zip]').type('22761').should('have.value', '22761')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('input[id=note]')
      .type('Dies ist eine Notiz.')
      .should('have.value', 'Dies ist eine Notiz.')
    cy.get('input[id=category]').type('Kunde').should('have.value', 'Kunde')
    cy.get('button[id=submit]').click()

    cy.get('input[id=firstName]').type('Max').should('have.value', 'Max')
    cy.get('input[id=lastName]')
      .type('Musterfrau')
      .should('have.value', 'Musterfrau')
    cy.get('input[id=company]')
      .type('Universal GmbH')
      .should('have.value', 'Universal GmbH')
    cy.get('input[id=phone]')
      .type('0175-54321')
      .should('have.value', '0175-54321')
    cy.get('input[id=mail]')
      .type('tschüss@hamburg.de')
      .should('have.value', 'tschüss@hamburg.de')
    cy.get('input[id=street]')
      .type('Universal-Straße 3')
      .should('have.value', 'Universal-Straße 3')
    cy.get('input[id=zip]').type('20329').should('have.value', '20329')
    cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
    cy.get('input[id=note]')
      .type('Dies ist eine Notiz.')
      .should('have.value', 'Dies ist eine Notiz.')
    cy.get('input[id=category]').type('Kunde').should('have.value', 'Kunde')
    cy.get('button[id=submit]').click()

    cy.visit('http://localhost:3000/list')
    cy.get('div').contains('Erika').click()
    cy.get('button[id=favoriteButton]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('div').contains('Erika')

    cy.visit('http://localhost:3000/list')
    cy.get('div').contains('Max').click()
    cy.get('button[id=favoriteButton]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('div').contains('Erika')
    cy.get('div').contains('Max')

    cy.get('div').contains('Max').click()
    cy.get('button[id=favoriteButton]').click()

    cy.visit('http://localhost:3000/favorites')
    cy.get('div').contains('Erika')
  })
})
