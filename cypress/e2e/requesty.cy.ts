beforeEach (() => {

    cy.request('POST', '/api/reset')

});

it("requesty", () => {

    cy.request('POST', '/api/boards', {name: 'board vyvoreny cez api'})
    .then(board => {
        expect(board.status).to.eq(201)
    })
    
    cy.request({
        method: 'GET',
        url: '/api/boards',
        headers: {
            accept: 'aplication/json'
        }
    }).its('body')
        .should('have.length', 1)
});
