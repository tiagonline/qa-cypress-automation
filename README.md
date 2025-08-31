# QA Cypress Automation

Automação de testes E2E para aplicações web, utilizando o Cypress. O projeto é organizado por Page Objects para facilitar manutenção, reutilização e escalabilidade.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Uso](#instalação-e-uso)
- [Evidências](#evidências)
- [Boas Práticas](#boas-práticas)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Sobre o Projeto

Automação E2E de testes para aplicações web com Cypress, separando lógica de teste e mapeamento de elementos via Page Objects.

---

## Estrutura de Pastas

```
cypress/
├── e2e/           # Testes end-to-end (specs)
├── pageObjects/   # Page Objects centralizados
├── fixtures/      # Dados estáticos para os testes
├── screenshots/   # Evidências em imagem geradas pelos testes
├── videos/        # Evidências em vídeo geradas pelos testes
├── support/       # Comandos customizados e configurações globais
└── ...
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Instalação e Uso

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/tiagonline/qa-cypress-automation.git
cd qa-cypress-automation
npm install
```

Rodando os testes:

- Interativo (UI do Cypress): `npx cypress open`
- Headless (terminal): `npx cypress run`
- Teste específico: `npx cypress run --spec "cypress/e2e/nomeDoTeste.spec.js"`

---

## Evidências

- **Screenshots:** geradas em `cypress/screenshots/` em falhas ou via `cy.screenshot()`
- **Vídeos:** gerados em `cypress/videos/` ao rodar testes no modo headless

---

## Como visualizar o relatório Allure dos testes E2E

Após baixar o artefato do relatório no GitHub Actions, execute o comando abaixo para abrir o relatório Allure no navegador:

```bash
npx allure open ./allure-report
```

````
---

## Boas Práticas

- Use Page Objects para separar mapeamento de elementos da lógica de teste
- Utilize comandos customizados em `cypress/support/commands.js` para ações recorrentes
- Mantenha dados sensíveis fora do repositório (use `.env`)
- Utilize `fixtures` para dados estáticos
- Escreva testes independentes e reutilizáveis

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b minha-feature`)
3. Commit (`git commit -m 'Minha feature'`)
4. Push (`git push origin minha-feature`)
5. Abra um Pull Request

---

## Contato

Abra uma issue ou envie e-mail para [tiagonline@gmail.com].