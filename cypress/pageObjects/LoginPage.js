// Page Object para a página de Login
export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  getEmailInput() {
    return cy.get('input[type="email"]');
  }

  getPasswordInput() {
    return cy.get('input[type="password"]');
  }

  getEntrarButton() {
    // Tenta primeiro pelo texto, depois pela classe
    return cy.contains('button', 'Entrar').length
      ? cy.contains('button', 'Entrar')
      : cy.get('button.glass-button');
  }

  fillLoginForm(email, password) {
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
  }

  submit() {
    this.getSubmitButton().click();
  }

  validateLoginComponents() {
    this.getEmailInput().should('be.visible');
    this.getPasswordInput().should('be.visible');
    this.getSubmitButton().should('be.visible');
  }
}