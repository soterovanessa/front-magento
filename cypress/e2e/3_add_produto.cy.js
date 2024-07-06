describe("Magento Testes", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("Adicionar um Produto", () => {
    cy.addProduto();
  });
});
