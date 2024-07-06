describe("Magento Testes", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("Buscar por um  Produto", () => {
    cy.buscaProduto();
  });
});
