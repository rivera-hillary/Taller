/// <reference types="Cypress" />

describe('CPD-1164', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.url().should('include', '/dashboard/')
    });
    it('Top international user should have a dollar sign',() => {
        cy.get('.little-report--border > .little-report-content > .d-flex > .little-report-value').contains('$');
        cy.get(':nth-child(4) > .little-report-content > .justify-content-between').contains('$');
    });
});
