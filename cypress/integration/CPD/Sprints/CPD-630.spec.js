/// <reference types="Cypress" />

describe('CPD - 876', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.home();
        cy.url().should('include','dashboard');
    });
    it('Have 4 sections',() => {
        cy.get(':nth-child(1) > .nav-link').contains('GENERAL');
        cy.get(':nth-child(2) > .nav-link').contains('APPROVALS');
        cy.get(':nth-child(3) > .nav-link').contains('REPORTS');
        cy.get(':nth-child(4) > .nav-link').contains('MY INVENTORY');
        cy.get(':nth-child(5) > .nav-link').contains('ALLOCATIONS');
    });
    it('Have 4 boxes', () => {
        cy.get('.little-report--border').should('be.visible');
        cy.get(':nth-child(2) > .little-report-content').should('be.visible').contains('Lines');
        cy.get(':nth-child(3) > .little-report-content').should('be.visible').contains('Top Data User');
        cy.get(':nth-child(4) > .little-report-content').should('be.visible').contains('Top International User');
    })
});