class loginPage {

  visit() {
    cy.visit("https://saucedemo.com/");
  }

}

export default new loginPage();