describe("template spec", () => {
  it("passes", () => {
    // Primeiro, acessamos a página de teste
    cy.visit("https://testautomationpractice.blogspot.com/");

    //Verificamos a existência do título da página
    cy.get(".post-title > a");
    cy.get("#post-body-1307673142697428135 > :nth-child(2)");

    //Preenchemos o formulário com os dados digitados
    cy.get("#name").clear().type("Jonathan Silva");
    cy.get("#email").clear().type("jonathan.silva@example.com");
    cy.get("#phone").clear().type("1234567890");
    cy.get("#textarea").clear().type("Test Nome Street, Test City, Test State, 12345");

    //Aqui, iniciamos os testes em itens selecionáveis utilizando o contains.
    cy.get('input[value="male"]').check(); 
    cy.get('input[value="sunday"]').check();
    cy.get('input[value="monday"]').check();
    cy.get('input[value="tuesday"]').check();
    cy.get('input[value="wednesday"]').check();
    cy.get('input[value="thursday"]').check();
    cy.get('input[value="friday"]').check();
    cy.get('input[value="saturday"]').check();

    //Linhas de preenchimento dos dias da semana utilizando o contains:
    // cy.contains("Sunday").click();
    // cy.contains("Monday").click();
    // cy.contains("Tuesday").click();
    // cy.contains("Wednesday").click();
    // cy.contains("Thursday").click();
    // cy.contains("Friday").click();
    // cy.contains("Saturday").click();

    //Testamos os menus em cascata, localizando as classes no inspector do navegador e acessando através do get
    cy.get("#country").select("Brazil");
    cy.get("#colors").select("Green");
    cy.get("#animals").select("Lion");

    //Agora, o desafio é preencher os campos de data, que possuem um Date Picker, apesar de possuir um id.
    cy.get("#datepicker").clear().type("09/12/1992");

    //O segunda desafio é acessar o calendário UI, pois a id está como readonly.
    
    cy.get("#txtDate").click({ force: true }); // Abre o calendário (se necessário)
    
    cy.get(".ui-datepicker").should("be.visible"); // Garante que o calendário está visível
    
    cy.get(".ui-datepicker-calendar").contains("a", "10").click(); // Seleciona o dia através da anchor dentro de .ui-datepicker-calendar, para não correr o risco de pegar o element em qualquer lugar da página.
    
    cy.get("#txtDate").should("have.value", "10/02/2026"); // Agora valida o valor

    // Nestes campos, o padrão de preenchimento acusou erro, pois era YYYY-MM-DD, diferente do primeiro padrão do Date Picker anterior. Erro corrigido!
    cy.get('#start-date').clear().type('1992-12-09')
    cy.get('#end-date').clear().type('2026-02-10')

    //Finalização do formulário com submit button.
    cy.get('.submit-btn').click()
  });
});
