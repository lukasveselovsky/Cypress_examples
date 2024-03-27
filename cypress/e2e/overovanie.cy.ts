it('overovanie', () => {

    cy.visit('/board/1')

    cy.get('[data-cy="card-checkbox"]')
        .eq(0)
        .check()

    cy.get('[data-cy=due-date]')
        .should('have.class','completed')

});