it('Finds content of home page', () => {
  cy.visit('/');
  cy.contains('Home');
});
