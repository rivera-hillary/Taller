/// <reference types="Cypress" />

describe('CPD-1164', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.url().should('include', '/dashboard/')
    });
    it('Unassociated Line Report',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .value-section').contains('Unassociated Line');
    });
    it('Terminated User Report',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.nav-item.d-flex').click();
        cy.get(':nth-child(2) > .px-3').contains('Terminated Users').click();
        cy.url().should('include','/terminated_users/');
    });
});
