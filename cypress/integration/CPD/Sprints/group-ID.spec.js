/// <reference types="Cypress" />

describe('CPD - Group ID', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.company();
        cy.program();
        cy.wait(1000);
        cy.url().should('include','/programs');
    });
    it('It should be named "Group ID"',() => {
        cy.get(':nth-child(1) > .row > .program > .title-program > a').click();
        cy.get('.program-details-labels > :nth-child(2)').contains('Group ID');
    });
});