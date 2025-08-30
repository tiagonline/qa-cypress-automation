// Funções de assert e wait genéricas

export function assertVisible(selector) {
  cy.get(selector).should('be.visible');
}

export function assertText(selector, text) {
  cy.get(selector).should('contain.text', text);
}

export function waitForElement(selector, timeout = 6000) {
  cy.get(selector, { timeout }).should('exist');
}