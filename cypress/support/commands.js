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
  };
  create();
});

Cypress.Commands.add(
  "login",
  (
    user_email = Cypress.env("user_email"),
    user_password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("customer/account/login/");

      cy.get('iframe[src*="captcha"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[type="checkbox"]').uncheck();
      });

      cy.get(selectorsList.loginEmail).type(user_email);
      cy.get(selectorsList.loginPassword).type(user_password);
      cy.get(selectorsList.buttonSubimit).eq(1).click();
      cy.wait(2000);
      cy.get(".captcha.required").invoke("remove");
    };
    login();
  }
);
