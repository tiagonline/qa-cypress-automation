/// <reference types="cypress" />

import LoginPage from '../pageObjects/LoginPage';
import DashboardPage from '../pageObjects/DashboardPage';
import HomePage from '../pageObjects/HomePage';

describe('Valida menus do dashboard após login', () => {
  const loginPage = new LoginPage();
  const dashboard = new DashboardPage();
  const home = new HomePage();

  it('Valida login e redirecionamento para o dashboard', () => {
    cy.visit('/');
    home.getEntrarButton().click();
    loginPage.validateLoginComponents();
    loginPage.fillLoginForm('tiagoffline@gmail.com', '123456');
    loginPage.submit();
    dashboard.validateDashboardComponents();
    cy.contains('Login realizado com sucesso!').should('be.visible');
    // Garantindo que a URL mudou para o dashboard antes de continuar
    cy.url().should('include', '/dashboard');

    const menus = ['Dashboard', 'Analytics', 'Calendário', 'Cartões', 'Favoritos',
      'Compartilhar', 'Configurações', 'FAQ', 'Modo Escuro', 'Sair'];
    menus.forEach(menu => {
      cy.contains(menu).should('be.visible');
    });
    dashboard.submitLogout();
  });
});
