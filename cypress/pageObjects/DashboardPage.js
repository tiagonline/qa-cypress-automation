export default class DashboardPage {
  visit() {
    cy.visit('/dashboard');
  }

  getWelcomeText() {
    return cy.contains('Entrar na sua conta');
  }

  getLogoutButton() {
    return cy.contains('button', 'Sair');
  }

  submitLogout() {
    this.getLogoutButton().click();
  }

  validateDashboardComponents() {
    this.getWelcomeText().should('be.visible');
    this.getLogoutButton().should('be.visible');
  }
}
