/// <reference types="cypress" />

import LoginPage from '../pageObjects/LoginPage';

describe('Validação de menus após login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://beepig-finance.lovable.app/');
      loginPage.clickEntrar();
      loginPage.preencherEmail('tiagoffline@gmail.com');
      loginPage.preencherSenha('123456');
      loginPage.submit();
      cy.contains('Dashboard').should('be.visible');
    });
    cy.visit('https://beepig-finance.lovable.app/');
  });

  it('Valida menus laterais', () => {
    const menus = ['Dashboard', 'Analytics', 'Relatórios', 'Configurações'];
    menus.forEach(menu => {
      cy.contains(menu).should('be.visible');
    });
  });
});
