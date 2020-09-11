/// <reference types="cypress" />

context('CreateContact', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/create')
    })

    it('tests all inputs and submits form', () => {
        cy.get('input[id=firstName]').type('Erika').should('have.value', 'Erika')
        cy.get('input[id=lastName]').type('Mustermann').should('have.value', 'Mustermann')
        cy.get('input[id=company]').type('cypress GmbH').should('have.value', 'cypress GmbH')
        cy.get('input[id=phone]').type('0176-123123123').should('have.value', '0176-123123123')
        cy.get('input[id=mail]').type('moin@hamburg.de').should('have.value', 'moin@hamburg.de')
        cy.get('input[id=street]').type('Beispiel-Straße 3').should('have.value', 'Beispiel-Straße 3')
        cy.get('input[id=zip]').type('22761').should('have.value', '22761')
        cy.get('input[id=city]').type('Hamburg').should('have.value', 'Hamburg')
        cy.get('input[id=note]').type('Dies ist eine Notiz.').should('have.value', 'Dies ist eine Notiz.')
        cy.get('input[id=category]').type('Kunde').should('have.value', 'Kunde')
        cy.get('button[id=submit]').click()
    })
})