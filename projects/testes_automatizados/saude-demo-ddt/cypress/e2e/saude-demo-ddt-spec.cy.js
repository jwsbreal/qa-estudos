import loginPage from "../pages/loginPage";

describe("Sauce Demo DDT - Login", () => {

  beforeEach((), => {
    cy.loginPage();

  });
  describe("Login com usuários disponíveis", () => {

      it("Login Standar", () => {
       cy.loginStandar();
      });

    });


});