/// <reference types="cypress" />
import login from '../fixtures/usuarios.json';

describe('Testes de ponta a ponta de Pedido no SauceDemo', () => {
  beforeEach(() => {
    cy.login(login.usuario, login.senha);
  });

  it.skip('teste addproduto', () => {
    cy.addProdutoNome('Sauce Labs Onesie');
  });

  it('Deve fazer o pedido de ponta a ponta', () => {
    //adicionar produto por nome
    cy.addProdutoNome('Sauce Labs Onesie');
    cy.addProdutoNome('Sauce Labs Bolt T-Shirt');

    //adicionar produtos no carrinho
    /*  cy.get('.btn_inventory').first().click()
        cy.get('.btn_inventory').last().click()
        cy.get('.btn_inventory').eq(2).click() */

    //adicionar produto por posição
    cy.addProdutoPosicao(0);
    cy.addProdutoPosicao(5);

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    //Preencher cadastro ficha do carrinho
    cy.preencherCadastro('Jessica', 'Pereira', '1215152');

    //Finalizar carrinho
    cy.get('[data-test="finish"]').click();

    cy.get('[data-test="complete-header"]').should(
      'contain',
      'Thank you for your order!'
    );
  });
});
