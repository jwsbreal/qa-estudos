Cypress.Commands.add('preencherFormulario', (nome, email, celular, endereço) => {
    if (nome) cy.get('#name').clear().type(nome);
    if (email) cy.get('#email').clear().type(email);
    if (celular) cy.get('#phone').clear().type(celular);
    if (endereço) cy.get('#textarea').clear().type(endereço);
    
});