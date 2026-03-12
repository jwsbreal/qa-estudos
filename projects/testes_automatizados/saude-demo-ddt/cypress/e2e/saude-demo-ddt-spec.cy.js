import loginPage from "../pages/loginPage";

describe("Sauce Demo DDT - Login", () => {
  beforeEach(() => {
    cy.loginPage(); //login feito através de POM, utilizando a loginPage.js
  });

  before(function () {
    cy.fixture("users").as("userData"); //carregamento da fixture users.json e atribuição a um alias "userData" posterior
  });

  before(function () {
    const users = this.userData;
  });

  Object.keys(users).forEach((userKey) => {
    it(`Deve realizar login com o usuário: ${userKey}`, function () {
      cy.loginPage();
      cy.login(userKey); //login feito através de comando customizado, utilizando os dados do fixture users.json

      if (userKey === "errorUser") { 
        cy.get('[data-test="error"]').should("exist");
      } else {
        cy.url().should("include", "inventory");
      }  //verificação específica para o usuário "errorUser", que é esperado que apresente uma mensagem de erro

    });
  });
});
