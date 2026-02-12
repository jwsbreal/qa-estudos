Cypress.Commands.add('preencherFormulario', (nome, email, celular, endereço) => {
    if (nome) cy.get('#name').type(nome);
    if (email) cy.get('#email').type(email);
    if (celular) cy.get('#phone').type(celular);
    if (endereço) cy.get('#textarea').type(endereço);
    
});