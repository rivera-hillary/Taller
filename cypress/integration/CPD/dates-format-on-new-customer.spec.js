/// <reference types="Cypress" />

describe('Administration > New Customer', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.administration();
    });
    it('Date on form',() => {
        cy.get('.actions-bar > .btn').click();
        // FORMULARIO 
        cy.get('#client-StartDate').type('2020-06-10');
    });
});