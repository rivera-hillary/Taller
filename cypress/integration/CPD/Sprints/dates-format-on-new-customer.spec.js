/// <reference types="Cypress" />

describe('Administration > New Customer', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.administration();
    });
    it('Date on form',() => {
        cy.get('.actions-bar > .btn').click();
        // FORMULARIO 
        cy.get('#client-StartDate').type('10/06/2020');
        cy.get('#newCustomerBtn').click();
    });
});