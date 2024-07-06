describe("Magento Testes", () => {
  it("Login Sucesso", () => {
    //  cy.wait(2000);

    const email = Cypress.env("email");
    const password = Cypress.env("user_password");

    cy.login(email, password);
  });
});
