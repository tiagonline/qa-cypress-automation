// Page Object para a página principal (Home)
export class HomePage {
  visit() {
    // Visita a página principal do site
    cy.visit('/');
  }

  getEntrarButton() {
    // Tenta primeiro pelo texto, depois pela classe
    return cy.contains('button', 'Entrar').length
      ? cy.contains('button', 'Entrar')
      : cy.get('button.glass-button');
  }

  validateMainComponents() {
    // Valida presença dos principais componentes da Home
    cy.get('header').should('be.visible'); // Header
    cy.get('footer').should('be.visible'); // Footer
    cy.contains('Entrar').should('be.visible'); // Botão Entrar
    cy.contains('Bem-vindo').should('exist'); // Texto de boas-vindas, ajuste conforme o site!
  }
}