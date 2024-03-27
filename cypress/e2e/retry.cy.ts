it('retry', { defaultCommandTimeout: 10000 }, () => {

    cy.visit('/board/1')                //akcia

    cy.get('[data-cy=card]')            //queries
        .eq(2)
        .should('contain.text', 'milk') //overovanie

    cy.get('[data-cy=due-date]')
        .eq(2)
        .should('have.text', 'Mar 29 2024')
});