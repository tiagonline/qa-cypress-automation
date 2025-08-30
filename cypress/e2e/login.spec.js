import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';

describe('Fluxo de Login', () => {
  const home = new HomePage();
  const login = new LoginPage();
  const dashboard = new DashboardPage();

  it('Deve acessar a home e visualizar componentes principais', () => {
    home.visit();
    home.validateMainComponents();
  });

  it('Deve acessar a página de login, preencher e logar com sucesso', () => {
    home.visit();
    home.getEntrarButton().click();

    login.validateLoginComponents();
    login.fillLoginForm('usuario@email.com', 'senhaSuperSecreta'); // Troque para valores válidos!
    login.submit();

    // Exemplo de intercept para mockar resposta do login (ajuste conforme API real)
    // cy.intercept('POST', '/api/login', { statusCode: 200, body: { token: 'abc123' } });

    dashboard.validateDashboardComponents();
  });
});
