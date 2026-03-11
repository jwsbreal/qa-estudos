Cypress.Commands.add("loginPadrao", () => {
  cy.fixture("users").then((user) => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").type(user.standardUser.username);
    cy.get("#password").type(user.standardUser.password);
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });
});
