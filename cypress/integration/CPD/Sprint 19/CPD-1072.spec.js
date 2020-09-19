/// <reference types="Cypress" />

describe('CPD - 1072', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.orders();
        cy.url().should('include','orders');
    });
    it('Implement new order status',() => {
        cy.get('.filters > .dropdown > #dropdownMenuButton').click().get('#approved').click().get('.button > .btn').click();
        cy.get(':nth-child(2) > [data-label="Order #"]').click();
        cy.get('.btn-deny').click();
        cy.get('.form-group > .mt-2').type('Can not do an order');
        cy.get('.swal2-confirm').click();
        cy.get('.badge-cancelled').contains('cancelled');
    });
    it('Cancelled status',() => {
        cy.get('.filters > .dropdown > #dropdownMenuButton').click().get('#cancelled').click().get('.button > .btn').click();
        cy.get('.badges > .badge').contains('Status: cancelled');
        cy.get(':nth-child(1) > [data-label="Status"] > .badge-cancelled').contains('cancelled');
    });

});