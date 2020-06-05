/// <reference types="Cypress" />

describe('CPD - BAN/FAN Cleanup', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.program();
        cy.wait(1000);
        cy.url().should('include','/programs');
    });
    it('It should be named "Group ID"',() => {
        cy.get(':nth-child(1) > .row > .program > .title-program > a').click();
        cy.get('.program-details-labels > :nth-child(2)').contains('Group ID');
    });
});