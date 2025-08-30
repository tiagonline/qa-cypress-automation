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

  getSubmitButton() {
    return cy.contains('button', 'Entrar');
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