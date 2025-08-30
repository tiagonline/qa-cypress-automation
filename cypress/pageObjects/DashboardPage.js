// Page Object para a página de Dashboard
export class DashboardPage {
  visit() {
    cy.visit('/dashboard');
  }

  getWelcomeText() {
    return cy.contains('Bem-vindo');
  }

  getLogoutButton() {
    return cy.contains('button', 'Sair');
  }

  validateDashboardComponents() {
    this.getWelcomeText().should('be.visible');
    this.getLogoutButton().should('be.visible');
    // Adicione outras validações específicas do dashboard conforme necessário
  }
}