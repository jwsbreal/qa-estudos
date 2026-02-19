Cypress.Commands.add('preencherFormulario', (nome, email, celular, endereço) => {
    if (nome) cy.get('#name').type(nome);
    if (email) cy.get('#email').type(email);
    if (celular) cy.get('#phone').type(celular);
    if (endereço) cy.get('#textarea').type(endereço);
    
});

Cypress.Commands.add('preencherFormularioComCheck', () => {
    cy.get('input[value="sunday"]').check();
    cy.get('input[value="monday"]').check();
    cy.get('input[value="tuesday"]').check();
    cy.get('input[value="wednesday"]').check();
    cy.get('input[value="thursday"]').check();
    cy.get('input[value="friday"]').check();
    cy.get('input[value="saturday"]').check();

});