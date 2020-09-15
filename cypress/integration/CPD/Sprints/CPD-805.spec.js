/// <reference types="Cypress" />

describe('CPD - 805', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.inventory();
        cy.url().should('include','/inventory/phone_lines');
    });  
    it('Deactivate Line',() => {
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get('#deactivated').click();
        cy.get('.button > .btn').click();
        cy.get('[data-label="Line Status"] > .font-12').contains('Deactivated');
    });
});