import loginPage from "../pages/loginPage";

describe("Sauce Demo - Login", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  describe("Cenários Positivos de Login", () => {
    it("Deve realizar o login com sucesso com usuário padrão 1", () => {
      cy.login("standard_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });

    it("Deve realizar o login com sucesso com usuário padrão 2", () => {
      cy.login("problem_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });

    it("Deve realizar o login com sucesso com usuário padrão 3", () => {
      cy.login("performance_glitch_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });

    it("Deve realizar o login com sucesso com usuário padrão 4", () => {
      cy.login("visual_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });
  });

  describe("Cenários Negativos de Login", () => {
    it("Deve exibir mensagem de erro para usuário inválido", () => {
      cy.login("invalid_user", "secret_sauce");
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Username and password do not match any user in this service",
      );
    });

    it("Deve exibir mensagem de erro para senha inválida", () => {
      cy.login("standard_user", "invalid_password");
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Username and password do not match any user in this service",
      );
    });

    it("Deve exibir mensagem de erro para usuário bloqueado", () => {
      cy.login("locked_out_user", "secret_sauce");
      cy.get('[data-test="error"]').should(
        "contain.text",
        "Sorry, this user has been locked out.",
      );
    });

  });
});
