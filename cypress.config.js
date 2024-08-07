const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  env: {
    login_url: '/login',
    products_url: '/products',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://makeup.com.ua/ua',
    viewportWidth: 1366,
    viewportHeight: 768,
    
  },
  blockHosts: [
    // "*stats.g.doubleclick.net",
    // "*google-analytics.com",
    // "*u.makeup.com.ua",
    // "*googlesyndication.com"
  ]
 
});
