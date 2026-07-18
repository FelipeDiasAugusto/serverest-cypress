const { defineConfig } = require('cypress');

module.exports = defineConfig({
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports/html',
        reportFilename: 'index',
        overwrite: true,
        html: true,
        json: true,
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        quiet: true
    },
    env: {
        apiUrl: 'https://serverest.dev'
    },
    e2e: {
        baseUrl: 'https://front.serverest.dev',
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile: 'cypress/support/e2e.js',
        screenshotsFolder: 'cypress/reports/screenshots',
        video: true,
        videoCompression: 20,
        trashAssetsBeforeRuns: true,

        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);

            return config;
        }
    }
});
