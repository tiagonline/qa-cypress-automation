/// <reference types="cypress" />

import LoginPage from '../pageObjects/LoginPage';

describe('Validação de menus após login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://beepig-finance.lovable.app/');
    loginPage.clickEntrar();
    loginPage.preencherEmail('tiagoffline@gmail.com');
    loginPage.preencherSenha('123456');
    loginPage.submit();
    cy.contains('Dashboard').should('be.visible');
  });

  it('Valida menus laterais', () => {
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Analytics').should('be.visible');
    cy.contains('Relatórios').should('be.visible');
    cy.contains('Configurações').should('be.visible');
    // Adicione ou ajuste os nomes dos menus conforme os disponíveis
  });
});