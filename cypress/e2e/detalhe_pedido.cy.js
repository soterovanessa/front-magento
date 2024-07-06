describe("Magento Testes", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/sales/order/history/");
  });

  it("Detalhe do Produto", () => {
    cy.detalhePedido();
  });
});
