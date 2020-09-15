/// <reference types="Cypress" />

describe('CPD - 1144', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('jbielecki');
        cy.wait(1000);
        cy.companyj();
        cy.homej();
        cy.url().should('include','dashboard');
    });
    it('Total Allocated Cost Calculation',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
        cy.get('.dropdown-companies > .dropdown > .dropdown-menu > ul > :nth-child(2) > .pr-3').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').contains('Costs Reports');
        cy.get('thead > tr > :nth-child(4)').contains('Base Costs');
        cy.get('thead > tr > :nth-child(5)').contains('Intl Costs');
        cy.get('thead > tr > :nth-child(6)').contains('Data Costs');
        cy.get('thead > tr > :nth-child(7)').contains('Equipment');
        cy.get('thead > tr > :nth-child(8)').contains('Taxes & Fees');
        cy.get('thead > tr > :nth-child(9)').contains('Total Costs');
    });
});