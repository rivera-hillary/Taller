/// <reference types="Cypress" />

describe('CPD - 916', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.userscpdrwr();
        cy.wait(1000);
        cy.url().should('include','/users');
    });
    it('When an administrator has a back button', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.m3-badge').contains('ADMIN');
        cy.get('.action-container > .btn-secondary').should('be.visible').contains('Back');
    });
    it('When an user has a back button', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.m3-badge').contains('RWR USER');
        cy.get('.action-container > .btn-secondary').should('be.visible').contains('Back');
    });
    it('When an user has a back button', () => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.m3-badge').contains('RWR USER');
        cy.get('.action-container > .btn-secondary').should('be.visible').contains('Back');
    });
    it('When an user has a back button', () => {
        cy.get(':nth-child(4) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.m3-badge').contains('RWR USER');
        cy.get('.action-container > .btn-secondary').should('be.visible').contains('Back');
    });
});