class LoginPage {
  clickEntrar() {
    cy.contains('Entrar').click();
  }

  preencherEmail(email) {
    cy.get('input[type="email"]').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('input[type="password"]').clear().type(senha);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPage;