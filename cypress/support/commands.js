import {
  user_first_name,
  user_last_name,
  user_email,
  user_password,
} from "./dados";

const Chance = require("chance");

const chance = new Chance();

export const selectorsList = {
  create: "[href='https://magento2-demo.magebit.com/customer/account/create/']",
  firstName: "[name='firstname']",
  lastName: "[name='lastname']",
  emailCreate: "[name='email']",
  confirmPasswordCreate: "[name='password_confirmation']",
  buttonCreate: "[title='Create an Account'][type='submit']",
  loginEmail: "[name='login[username]'][type='email']",
  loginPassword: "[name='login[password]']",
  buttonSubimit: "[type='submit']",
  company: "[name='company']",
  streetAddress: "[name='street[0]'][type='text']",
  streetAddress1: "[name='street[1]'][type='text']",
  city: "[name='city']",
  zip: "[name='postcode']",
  phone: "[name='telephone']",
  logoutButton:
    "[href='https://magento2-demo.magebit.com/customer/account/logout/']",
  campoBusca: "[name='q']",
};

Cypress.Commands.add("create", () => {
  const create = () => {
    cy.visit("/customer/account/create/");
    // cy.get(selectorsList.create).click();
    cy.get(selectorsList.firstName).type(user_first_name);
    cy.get(selectorsList.lastName).type(user_last_name);
    cy.get(selectorsList.emailCreate).eq(0).type(user_email);
    cy.get("#password").type(user_password, { force: true, log: false });
    cy.get(selectorsList.confirmPasswordCreate).type(user_password, {
      log: false,
    });
    cy.get(selectorsList.buttonCreate).click({ force: true });
    cy.get("body").contains("My Account");
  };
  create();
});

Cypress.Commands.add(
  "login",
  (
    user_email = Cypress.env("user_email"),
    user_password = Cypress.env("user_password"),
    { cacheSession = false } = {}
  ) => {
    const login = () => {
      cy.visit("customer/account/login/");

      cy.get(selectorsList.loginEmail).type(user_email);
      cy.get(selectorsList.loginPassword).type(user_password, { log: false });
      cy.get(selectorsList.buttonSubimit).eq(1).click();
    };
    const options = {
      cacheAcrossSpecs: true,
    };

    if (cacheSession) {
      cy.session(user_email, login, options);
    } else {
      login();
    }
  }
);

Cypress.Commands.add("addProduto", () => {
  const addProduto = () => {
    cy.visit("https://magento2-demo.magebit.com/");
    cy.visit("/promotions/tees-all.html");
    cy.visit("/juliana-short-sleeve-tee.html");
    cy.get("#option-label-size-157-item-170").click();
    cy.get("#option-label-color-93-item-60").click();
    cy.get(selectorsList.buttonSubimit).eq(1).click({ force: true });
    cy.visit("/promotions/tees-all.html");
    cy.visit("/gabrielle-micro-sleeve-top.html");
    cy.get("#option-label-size-157-item-172").click();
    cy.get("#option-label-color-93-item-58").click();
    cy.get(selectorsList.buttonSubimit).eq(1).click({ force: true });
    cy.get(".showcart").click();
    cy.get("[href='https://magento2-demo.magebit.com/checkout/cart/']")
      .eq(2)
      .click({
        multiple: true,
      });
    cy.get("[title='Proceed to Checkout'][type='button']").click({
      force: true,
    });
    cy.get(".checkout-methods-items > :nth-child(1) > .action > span").click();
    cy.visit("/checkout/#shipping");
    cy.get(selectorsList.company).type(chance.company());
    cy.get(selectorsList.streetAddress).type(chance.address());
    cy.get(selectorsList.streetAddress1).type(chance.province());
    cy.get("[name='country_id']").select("Brazil");
    cy.get("[name='region_id']").select("Pernambuco");
    cy.get(selectorsList.city).type(chance.city());
    cy.get(selectorsList.zip).type(chance.zip());
    cy.get(selectorsList.phone).type(chance.phone());
    cy.get("[type='radio'][value='flatrate_flatrate']").click();
    cy.get(selectorsList.buttonSubimit).eq(2).click({ force: true });
    cy.get(selectorsList.buttonSubimit).eq(1).click({ force: true });
    cy.wait(1000);
    cy.get(selectorsList.buttonSubimit).click({ force: true });
    cy.get("body").should("Thank you for your purchase!");
  };
  addProduto();
});

Cypress.Commands.add("detalhePedido", () => {
  const detalhePedido = () => {
    cy.get(
      "[href='https://magento2-demo.magebit.com/sales/order/view/order_id/13/']"
    ).click();
  };
  detalhePedido();
});

Cypress.Commands.add("logout", () => {
  const logout = () => {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"
    ).click({ force: true });
  };

  logout();
});

Cypress.Commands.add("buscaProduto", () => {
  const buscaProduto = () => {
    cy.get(selectorsList.campoBusca).type("elisa{enter}");
    cy.get(
      ".product-item-link[href='https://magento2-demo.magebit.com/elisa-evercool-trade-tee.html']"
    ).click({ multiple: true });
    cy.get(selectorsList.campoBusca).type("argus{enter}");
    cy.get(
      ".product-item-link[href='https://magento2-demo.magebit.com/argus-all-weather-tank.html']"
    ).click({ multiple: true });
  };
  buscaProduto();
});

Cypress.Commands.add("checkout", () => {
  const checkout = () => {
    cy.get("[title='Proceed to Checkout'][type='button']").click();
    cy.get(selectorsList.buttonSubimit).click();
    cy.wait(1000);
    cy.get(selectorsList.buttonSubimit).click();
  };
  checkout();
});
