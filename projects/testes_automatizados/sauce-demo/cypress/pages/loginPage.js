class loginPage {

  visit() {
    cy.visit("https://saucedemo.com/");
  }

}

export default new loginPage();

//   fillUsername(username) {
//     cy.get('[data-test="username"]').type(username);
//   }

//   fillPassword(password) {
//     cy.get('[data-test="password"]').type(password);
//   }

//   clickLogin() {
//     cy.get('[data-test="login-button"]').click();
//   }
