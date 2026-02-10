const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: true,                 // grava vídeo
    screenshotOnRunFailure: true, // print em falha
viewportWidth: 1280,
viewportHeight: 720,


    setupNodeEvents(on, config) {
      // listeners, se precisar no futuro
    },
  },
});
