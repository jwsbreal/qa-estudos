Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();    
})

// // Todas as opções de login:
// standard_user
// locked_out_user
// problem_user
// performance_glitch_user
// error_user
// visual_user