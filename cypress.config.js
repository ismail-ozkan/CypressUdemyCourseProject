const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "xuha8i",
  env: {
    url: "https://rahulshettyacademy.com",
    userId: "rahul",
    password: "3242"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/examples/*.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshotsForFailures',
    video: false,
    defaultCommandTimeout: 10000,
  }
});
