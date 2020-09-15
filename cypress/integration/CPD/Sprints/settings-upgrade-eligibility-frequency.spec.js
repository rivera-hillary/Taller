/// <reference types="Cypress" />

describe('CPD - Upgrade Eligibility Frequency', () => {
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
    it('It should be named "Upgrade Eligibility Frequency"', () => {
        cy.get('.dropdown-toggle > .btn').click({force: true});
        cy.get('[data-name="ATANDT"]').click();
        cy.get('#ATAndT-1-card > :nth-child(7) > .pl-0 > label').contains('Upgrade Eligibility Frequency');
    });
    it('Lets click', () => {
        cy.get('#ATAndT-1-card > :nth-child(7) > .pl-0 > .choices > .choices__inner > .choices__list > .choices__item').click();
    });
    it('Its initial state should be 0', () => {
        cy.get('.dropdown-toggle > .btn').click({force: true});
        cy.get('[data-name="ATANDT"]').click();
        cy.get('#ATAndT-1-card > :nth-child(7) > .pl-0 > .choices > .choices__inner').contains('3');
    });
    it('selects 60', () => {
        cy.get('#ATAndT-1-card > :nth-child(7) > .pl-0 > .choices > .choices__inner').click().get('.choices__item--selectable').should('be.hidden').invoke('show').contains('60').click({force: true});
    });
});