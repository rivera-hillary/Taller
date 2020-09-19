/// <reference types="Cypress" />

describe('CPD - 861', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.home();
        cy.url().should('include','dashboard');
    });
    it('Reports',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle').contains('Lines & Data Reports');
    });
    it('Navigation routes',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        // NEW LINES
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.nav > :nth-child(1) > .nav-link').contains('NEW LINES');
        cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
        // UNASSOCIATED LINES
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.nav > :nth-child(2) > .nav-link').contains('UNASSOCIATED LINES');
        cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
        // SUSPENDED LINES
        cy.get('.nav > :nth-child(3) > .nav-link').click();
        cy.get('.nav > :nth-child(3) > .nav-link').contains('SUSPENDED LINES');
        cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
        // ZERO USE LINES
        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.get('.nav > :nth-child(4) > .nav-link').contains('ZERO USE LINES');
        cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
        // OUT OF CONTRACT LINES
        cy.get('.nav > :nth-child(5) > .nav-link').click();
        cy.get('.nav > :nth-child(5) > .nav-link').contains('OUT OF CONTRACT LINES');
        cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
    });
    it('Navigation routes',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(2) > .dropdown-companies > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > ul > :nth-child(2) > .pr-3').click();
        cy.get('.dropdown-menu > ul > :nth-child(2) > .pr-3').contains('Costs Reports');
        cy.get(':nth-child(1) > :nth-child(1) > .w-100 > .report-card-header > .justify-content-between > .primary-lighter-color > em').click();
        //cy.get(':nth-child(3) > .font-weight-normal').should('have.attr','href').and('eq','/client/3980/dashboard/reports/');
    });
});