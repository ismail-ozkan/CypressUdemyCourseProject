const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/examples/*.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshotsForFailures',
    video: false,
  }
});
