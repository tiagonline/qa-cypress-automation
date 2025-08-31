import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';

describe('Fluxo de Login', () => {
  const home = new HomePage();
  const login = new LoginPage();
  //const dashboard = new DashboardPage();

  it('Deve exibir mensagem de erro ao tentar logar com senha incorreta', () => {
    home.visit("/");
    home.getEntrarButton().click();

    login.validateLoginComponents();
    login.fillLoginForm('tiagoffline@gmail.com', 'senha_incorreta');
    login.submit();

    cy.contains('Invalid login credentials').should('be.visible');
  });

  it('Deve acessar a página de login, preencher e logar com sucesso', () => {
    home.visit("/");
    home.getEntrarButton().click();

    login.validateLoginComponents();
    login.fillLoginForm('tiagoffline@gmail.com', '123456');
    login.submit();

    cy.contains('Login realizado com sucesso!').should('be.visible');
  });
});
