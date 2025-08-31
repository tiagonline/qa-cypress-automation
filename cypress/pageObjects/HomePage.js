export default class HomePage {
  visit() {
    // Apenas visita a URL base. A configuração já deve estar no cypress.config.js.
    cy.visit('/');
  }

  getEntrarButton() {
    return cy.contains('button', 'Entrar');
  }

  validateMainComponents() {
    // A validação abaixo funciona como uma 'âncora' para o teste.
    // O Cypress vai esperar até encontrar este texto principal na página antes de continuar.
    // Isso garante que a página já carregou o conteúdo.
    cy.contains('Controle suas finanças com a').should('exist');

    // Valida o nome da marca no cabeçalho.
    cy.get('h1').should('be.visible').and('contain', 'beePig');

    // Valida se todos os links do menu lateral estão visíveis.
    cy.get('nav a').contains('Dashboard').should('be.visible');
    cy.get('nav a').contains('Transações').should('be.visible');
    cy.get('nav a').contains('Contas').should('be.visible');
    cy.get('nav a').contains('Orçamentos').should('be.visible');

    // Valida os cards de resumo do dashboard (Saldo Total, Entradas, Saídas).
    // A gente só checa se eles existem e se o valor está visível, já que o valor é dinâmico.
    cy.get('.bg-white.rounded-lg.shadow.p-4').contains('p', 'Saldo Total').should('be.visible');
    cy.get('.bg-white.rounded-lg.shadow.p-4').contains('p', 'Entradas').should('be.visible');
    cy.get('.bg-white.rounded-lg.shadow.p-4').contains('p', 'Saídas').should('be.visible');
    
    // Valida a seção de Transações Recentes.
    cy.get('h2').contains('Transações Recentes').should('be.visible');
    
    // Valida que a tabela de transações está visível.
    cy.get('h2').contains('Transações Recentes').parent().parent().find('table').should('be.visible');

    // Valida que a tabela tem pelo menos uma linha de transação.
    cy.get('h2').contains('Transações Recentes').parent().parent().find('table tbody tr').should('have.length.at.least', 1);
  }
}
