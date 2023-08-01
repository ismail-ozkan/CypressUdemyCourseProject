const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "xuha8i",
  env: {
    url: "https://rahulshettyacademy.com",
    userId: "rahul",
    password: "3242"
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/examples/BDD/*.feature',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshotsForFailures',
    video: false,
    defaultCommandTimeout: 10000,
  }
});
