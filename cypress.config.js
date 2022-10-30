const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "8xwfdw"
    },
  },
});

module.exports = {
  projectId: "8xwfdw"
  // The rest of the Cypress config options go here...
}