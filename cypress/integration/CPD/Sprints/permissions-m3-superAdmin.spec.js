/// <reference types="Cypress" />

describe('CPD Motus > Users', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.company();
        cy.home();
    });
    it('Manager Dashboard Landing Page',() => {
        cy.url().should('include','dashboard');
        cy.get(':nth-child(1) > .nav-link').contains('GENERAL');
        cy.get(':nth-child(2) > .nav-link').contains('APPROVALS');
        cy.get(':nth-child(3) > .nav-link').contains('REPORTS');
        cy.get(':nth-child(4) > .nav-link').contains('MY INVENTORY');
        cy.get(':nth-child(5) > .nav-link').contains('ALLOCATIONS');
    });
    it('View Programs Page', () => {
        cy.get('.d-flex > [href="/client/3980/programs/"]').click();
        cy.url().should('include','programs');
    })
    it('View Users Page', () => {
        cy.get('.d-flex > [href="/client/3980/users/"]').click();
        cy.url().should('include','users');
    })
    it('Edit Users', () => {
        cy.get('.d-flex > [href="/client/3980/users/"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.url().should('include','/edit/');
    });
    it('View Company Settings', () => {
        cy.get('.d-flex > [href="/client/3980/settings/general/"]').click();
        cy.url().should('include','settings/general');
    });
    it('View Inventory Page', () => {
        cy.get('.d-flex > [href="/client/3980/inventory/phone_lines/"]').click();
        cy.url().should('include','inventory/phone_lines');
    })
});