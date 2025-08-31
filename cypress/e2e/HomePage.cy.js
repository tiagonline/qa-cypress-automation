import HomePage from '../pageObjects/HomePage';

describe('Valida Home Page', () => {
  const home = new HomePage();

  it('Deve acessar a home e visualizar componentes principais', () => {
    home.visit("/");
    home.validateMainComponents();
  });
});
