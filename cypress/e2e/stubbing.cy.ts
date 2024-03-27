it('načítanie zoznamu boardov', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards' // prvy objekt, ktory sluzi na nato aby sme nasli request
  }, {                 // druhy objekt sluzi na manipulaciu s requestom, napr zmenit telo odpovede
    // body: [{
    //   name: 'misia',   // mock data ktore sem podsuvam neexistuju, existuju len v teste nie v databaze. 
    //   starred: false,
    //   id: 5
    //   }]
    fixture: 'mockData.json' //mock data pripravene vo fixtures
   
  })
    .as('boardList')

  cy.visit('/');

})

it('chybová hláška pri vytvorení boardu', () => {

  cy.intercept({
    method: 'POST',
    url: '/api/boards'
  }, {
    statusCode: 403
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

  cy.get('[data-cy="notification-message"]')
    .should('contain.text', 'There was an error creating board')

})

it.only('pomalé načítavanie', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards',
    times: 1
  }, (req) => {
    req.reply((res) => {
      res.delay = 10000
    })
  })
    .as('boards')

  cy.visit('/')

  cy.contains('Reload')
    .click()

  cy.get('[data-cy=board-item]')
    .should('be.visible')

});