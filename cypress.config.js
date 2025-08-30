const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Allure reporter
      require('@shelex/cypress-allure-plugin/writer')(on, config);
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
