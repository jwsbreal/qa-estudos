Cypress.Commands.add("login", (userKey) => {
  cy.fixture("users").then((users) => {
    const user = users[userKey];

    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });
});