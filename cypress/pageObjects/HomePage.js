// Page Object para a página principal (Home)
export class HomePage {
  visit() {
    // Visita a página principal do site
    cy.visit('/');
  }

  getEntrarButton() {
    // Retorna o botão "Entrar" usando seletor de texto
    return cy.contains('button', 'Entrar');
  }

  validateMainComponents() {
    // Valida presença dos principais componentes da Home
    cy.get('header').should('be.visible'); // Header
    cy.get('footer').should('be.visible'); // Footer
    cy.contains('Entrar').should('be.visible'); // Botão Entrar
    cy.contains('Bem-vindo').should('exist'); // Texto de boas-vindas, ajuste conforme o site!
  }
}