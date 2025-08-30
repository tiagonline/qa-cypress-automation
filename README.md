# QA Cypress Automation

Estrutura inicial para automação E2E com Cypress, Ajv, Allure, Docker e CI.

## Principais recursos

- **Cypress** para automação de testes E2E
- **Ajv** para validação de contratos JSON
- **Allure** para geração de relatórios
- **Docker** para ambiente isolado
- **CI** para execução automatizada (exemplo: GitHub Actions)

## Instalação

```bash
npm install
```

## Execução dos testes

```bash
npm test
```

## Geração e abertura do relatório Allure

```bash
npm run allure:generate
npm run allure:open
```

## Estrutura de diretórios

```
cypress/
  ├── e2e/
  ├── fixtures/
  ├── support/
docker/
.github/
```

## Exemplo de execução em CI

Veja exemplos na pasta `.github/workflows/`.