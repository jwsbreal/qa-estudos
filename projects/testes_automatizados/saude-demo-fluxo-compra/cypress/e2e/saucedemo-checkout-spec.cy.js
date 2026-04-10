import loginPage from "../pages/loginPage";

describe("Sauce Demo Checkout", () => {
  it("Fluxo Simples de Compra Completa", () => {
    loginPage.visit();

    cy.get("#user-name").type("standard_user", { delay: 100 });
    cy.get("#password").type("secret_sauce", { delay: 100 });
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("User", { delay: 100 });
    cy.get('[data-test="lastName"]').type("Test", { delay: 100 });
    cy.get('[data-test="postalCode"]').type("12345", { delay: 100 });
    cy.get('[data-test="continue"]').click();
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");

  });
});
