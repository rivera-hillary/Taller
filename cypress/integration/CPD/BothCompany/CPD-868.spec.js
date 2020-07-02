/// <reference types="Cypress" />

describe('CPD - 868', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });
    it("Can do an Upgrade Device",() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('#exampleModal').should('be.visible');
        cy.get('.order-options > :nth-child(1)').contains('Order New Phone Line');
        cy.get('.order-options > :nth-child(2)').contains('Upgrade Device');
    });
    it("Can't do an Upgrade Device",() => {
        cy.get('form > .search-control > .form-control').type('Jairo{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('#exampleModal').should('be.visible');
        cy.get('.order-options > :nth-child(1)').contains('Order New Phone Line');
        cy.get('.order-options > :nth-child(2)').should('not.be.visible');
    });
});