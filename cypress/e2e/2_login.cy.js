describe("Magento Testes", () => {
  it("Login Sucesso", () => {
    const email = Cypress.env("email");
    const password = Cypress.env("user_password");
    const options = { cacheSession: true };

    cy.login(email, password, options);
  });
});
