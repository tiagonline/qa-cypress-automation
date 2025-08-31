describe('Exemplo de teste', () => {
  it('deve acessar o Google', () => {
    cy.visit('https://www.google.com')
    cy.contains('Google')
  })
})