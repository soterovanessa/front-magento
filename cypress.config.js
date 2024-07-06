const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento2-demo.magebit.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    user_first_name: "Teste",
    user_last_name: "Testando",
    user_email: "teste123@teste.com",
    user_password: "floresta123*",
  },
});
