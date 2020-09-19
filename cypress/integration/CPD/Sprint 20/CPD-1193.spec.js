/// <reference types="Cypress" />

describe('CPD-1193', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
    });
    it('When clicking inventory, default to lines instead of devices',() => {
        cy.company();
        cy.inventory();
        cy.url().should('include','inventory/phone_lines/');
        cy.get(':nth-child(1) > .nav-link').contains('LINES');
        cy.get('.nav > :nth-child(2) > .nav-link').contains('DEVICES');
    });
    it('When clicking inventory, default to lines instead of devices',() => {
        cy.companyr();
        cy.inventoryr();
        cy.url().should('include','inventory/phone_lines/');
        cy.get(':nth-child(1) > .nav-link').contains('LINES');
        cy.get('.nav > :nth-child(2) > .nav-link').contains('DEVICES');
    });
});