describe("Magento Teste", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("Logout", () => {
    cy.logout();
    cy.url().should(
      "be.equal",
      `${Cypress.config("baseUrl")}/customer/account/logoutSuccess/`
    );
  });
});
