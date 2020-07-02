/// <reference types="Cypress" />

describe('CPD - 897', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });
    it('',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('#exampleModal').should('be.visible');
        cy.get('.order-options > :nth-child(1)').contains('Order New Phone Line');
        cy.get('.mt-3 > .order-type-link').click();
        cy.get('.form-group.mb-3 > [for="Carrier"]').contains('Requested Carrier');
        cy.get('.order-addresses > :nth-child(5) > :nth-child(1)').contains('Shipping Type');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').contains('Expedited Shipping');
    });
});