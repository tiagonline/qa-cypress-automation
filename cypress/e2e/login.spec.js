/// <reference types="cypress" />

import LoginPage from '../support/pageObjects/LoginPage';

describe('Teste de Login e validação da página principal', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://beepig-finance.lovable.app/');
  });

  it('Valida componentes da página principal', () => {
    cy.contains('Entrar').should('be.visible');
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
    cy.get('.main-content').should('exist');
  });

  it('Realiza login com credenciais válidas', () => {
    loginPage.clickEntrar();
    loginPage.preencherEmail('tiagoffline@gmail.com');
    loginPage.preencherSenha('123456');
    loginPage.submit();
    cy.url().should('not.include', '/login');
    cy.contains('Dashboard').should('be.visible');
  });

  it('Valida mensagem de erro ao entrar com senha incorreta', () => {
    loginPage.clickEntrar();
    loginPage.preencherEmail('tiagoffline@gmail.com');
    loginPage.preencherSenha('senha_incorreta');
    loginPage.submit();
    cy.contains(/(senha|email).*inválido/i).should('be.visible');
    // Ajuste o texto de acordo com a mensagem real exibida pela aplicação
  });
});