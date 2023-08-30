Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('patricia')
    cy.get('#lastName').type('vilas boas')
    cy.get('#email').type('pat@teste.com')
    cy.get('#open-text-area').type('testeteste')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
})