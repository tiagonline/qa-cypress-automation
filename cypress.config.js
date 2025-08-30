import { defineConfig } from 'cypress'
import allureWriter from '@shelex/cypress-allure-plugin/writer.js'

export default defineConfig({
  e2e: {
    baseUrl: 'https://beepig-finance.lovable.app/',
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
  video: false,
  parallel: true
})