/// <reference types="Cypress" />

describe('CPD - 1076', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('jbielecki');
        cy.wait(1000);
        cy.companyr();
        cy.homer();
        cy.url().should('include','dashboard');
    });
    it('Admin dashboard',() => {
        cy.get('.col-9 > .pbot-12 > .align-items-center > .d-flex').contains('Quick Report');
        cy.get('.divisor-container').contains('No historical data to show. You will see here a report of the company costs once we have enough data.');
        cy.get('.col-3 > .pbot-12 > .align-items-center').contains('Activity Flags');
        cy.get('.activity-flag-list').contains("You are all set. There's nothing that needs your attention right now.");
    });
    it('All 3 reports area',() => {
        // GENERAL
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.row').contains('No historical data to show. You will see here a couple of reports regarding the company costs once we have enough data.');
        cy.get('.col-9 > .btn').click();
        // LINES REPORTS
        cy.get('.col-12 > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').contains('Lines Reports');
        cy.get('.nav > :nth-child(1) > .nav-link').contains('NEW LINES');
        // COSTS REPORTS
        cy.get('.col-12 > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
        cy.get('.dropdown-menu > ul > :nth-child(1) > .pr-3').click();
        cy.get('.col-12 > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').contains('Costs & Usage Reports');
        cy.get('.nav > :nth-child(1) > .nav-link').contains('TOTAL ALLOCATED COSTS');
    });
    it('Allocations area',() => {
        cy.get(':nth-child(5) > .nav-link').contains('ALLOCATIONS').click();
        cy.get(':nth-child(2) > :nth-child(1) > .col-12').contains('Total Costs');
        cy.get(':nth-child(2) > .col-12').contains('Total Devices');
        cy.get('.card').contains('Not Available Yet');
    });
});