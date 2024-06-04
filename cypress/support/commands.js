Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(usuario);
  cy.get('[data-test="password"]').clear().type(senha);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('preencherCadastro', (nome, sobrenome, cep) => {
  cy.get('[data-test="firstName"]').clear().type(nome);
  cy.get('[data-test="lastName"]').clear().type(sobrenome);
  cy.get('[data-test="postalCode"]').clear().type(cep);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('addProdutoNome', (nomeProduto) => {
  cy.contains(nomeProduto).click();
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="back-to-products"]').click();
});

Cypress.Commands.add('addProdutoPosicao', (posicao) => {
  cy.get('.btn_inventory').eq(posicao).click();
});
