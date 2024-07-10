describe("Magento Testes", () => {
  it("Login Sucesso", () => {
    const email = Cypress.env("email");
    const password = Cypress.env("user_password");

    cy.login(email, password);
  });
});
