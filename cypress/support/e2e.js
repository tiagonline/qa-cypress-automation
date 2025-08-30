// Importa comandos customizados do projeto
import './commands'

// Importa o plugin Allure para Cypress
import '@shelex/cypress-allure-plugin'

// Ignora exceções não tratadas no app para evitar falha de teste desnecessária
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe no teste
  return false
})

// Exemplo de setup global antes de cada teste
beforeEach(() => {
  // Pode colocar comandos globais aqui, se necessário
  // cy.clearCookies()
  // cy.viewport(1280, 720)
})