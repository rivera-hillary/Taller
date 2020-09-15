/// <reference types="Cypress" />

describe('CPD - Contract length', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.company();
        cy.settings();
        cy.wait(1000);
        cy.url().should('include','/settings');
        cy.get('.nav > :nth-child(2) > .nav-link').click();
    });
    it('It should be named "Contract Length"', () => {
        cy.get('.dropdown-toggle > .btn').click({force: true});
        cy.get('[data-name="ATANDT"]').click();
        cy.get('#ATAndT-1-card > :nth-child(7) > .pr-0 > label').contains('Contract Length');
    });
    it('Its initial state should be 0', () => {
        cy.get('.dropdown-toggle > .btn').click({force: true});
        cy.get('[data-name="ATANDT"]').click();
        cy.get('.pr-0 > .choices > .choices__inner > .choices__list').contains('0');
    });
    it('selects 60', () => {
        cy.get('#ATAndT-1-card > :nth-child(7) > .pr-0 > .choices').click().get('.choices__item--selectable').should('be.hidden').invoke('show').contains('60').click({force: true});
    });
});