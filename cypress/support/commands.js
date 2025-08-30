// Custom commands genéricos para Cypress

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-cy="email-input"]').type(email);
  cy.get('[data-cy="password-input"]').type(password);
  cy.get('[data-cy="submit-button"]').click();
});

Cypress.Commands.add('visitHome', () => {
  cy.visit('/');
});