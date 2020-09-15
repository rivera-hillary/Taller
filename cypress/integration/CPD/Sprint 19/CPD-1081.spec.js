/// <reference types="Cypress" />

describe('CPD - 1081', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('jbielecki');
        cy.wait(1000);
        cy.company();
        cy.home();
        cy.url().should('include','dashboard');
    });
    it('Quick Reports',() => {
        cy.get('.col-9 > .pbot-12 > .align-items-center > .d-flex').contains('Quick Report');
        cy.get(':nth-child(2) > .little-report-content').contains('Lines');
        cy.get(':nth-child(3) > .little-report-content').contains('Top Data User');
        cy.get(':nth-child(4) > .little-report-content').contains('Top International User');
        cy.get('.graphic-data-container > :nth-child(1)').should('be.visible').contains('Costs vs. Lines');
        cy.get('.graphic-data-container > :nth-child(2)').should('be.visible').contains('Data Pool Report');
    });
    it('Lines & Data Reports',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle').contains('Lines & Data Reports');
        cy.get(':nth-child(1) > .value-section').should('be.visible').contains('New Lines');
        cy.get(':nth-child(2) > .value-section').should('be.visible').contains('Not in Census');
        cy.get(':nth-child(3) > .value-section').should('be.visible').contains('Suspended Lines');
        cy.get(':nth-child(4) > .value-section').should('be.visible').contains('Zero Use Lines');
        cy.get(':nth-child(5) > .value-section').should('be.visible').contains('Out of Contract');
        cy.get(':nth-child(2) > .card.mr-1').should('be.visible').contains('Top Data Users');
        cy.get('.lines-data-report-section > :nth-child(2) > .ml-1').should('be.visible').contains('Top International Users');
    });
    it('Costs Reports',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > ul > :nth-child(2) > .pr-3').click();
        cy.get('.dropdown-menu > ul > :nth-child(2) > .pr-3').contains('Costs Reports');
        cy.get('.costs-report-section > :nth-child(1) > :nth-child(1)').should('be.visible').contains('Monthly Costs');
        cy.get('.costs-report-section > :nth-child(1) > :nth-child(2)').should('be.visible').contains('Costs Per Carrier');
        cy.get('.costs-report-section > :nth-child(2) > :nth-child(1)').should('be.visible').contains('Cost Per Line Report');
        cy.get('.costs-report-section > :nth-child(2) > :nth-child(2)').should('be.visible').contains('Intl. Costs');
    });
});