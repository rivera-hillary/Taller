/// <reference types="Cypress" />

describe('CPD - 1075', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('jbielecki');
        cy.wait(1000);
        cy.company();
        cy.administration();
        cy.url().should('include','administration');
    });
    it('Pull Carrier Data Button',() => {
        cy.get('nav > [href="/administration/data-management/"]').click();
        cy.get('.actions-bar > .btn').contains('Pull Carrier Data').click();
    });
});