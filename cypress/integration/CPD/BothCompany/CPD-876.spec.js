/// <reference types="Cypress" />

describe('CPD - 876', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.usersBothCompany();
        cy.url().should('include','users');
    });
    it('Send welcome emails to all users',() => {
        cy.get('.d-flex > .btn').click();
        cy.get('.swal2-popup').should('be.visible');
        cy.get('#swal2-title').contains('Send Welcome Emails');
        cy.get('#swal2-content').contains("Are you sure you'd like to send welcome emails to all users who have not yet received one?");
    });
});