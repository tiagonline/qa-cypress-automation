const { defineConfig } = require('cypress');
import allureWriter from '@shelex/cypress-allure-plugin/writer'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Allure relatório
      allureWriter(on, config)
      return config;
    },
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
  reporter: 'allure',
  reporterOptions: {
    allureResultsPath: 'allure-results'
  },
  video: false,
  parallel: true
});