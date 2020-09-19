/// <reference types="Cypress" />

describe('CPD-1141', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.url().should('include', '/reports/')
    });
    it('Unassociated Lines',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.nav > :nth-child(2) > .nav-link').contains('UNASSOCIATED LINES');
        cy.get('.d-flex > [href="/client/9666/inventory/phone_lines/"]').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(2)').contains('No User').click();
        cy.get('.button > .btn').click();
        cy.get('.badges > .badge').contains('User-Association: Free');
    });
    it('Suspended Lines',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get(':nth-child(3) > .nav-link').contains('SUSPENDED LINES');
        cy.get('.d-flex > [href="/client/9666/inventory/phone_lines/"]').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(3)').contains('Suspended').click();
        cy.get('.button > .btn').click();
        cy.get('.badges > .badge').contains('Line-Status: suspended');
    });
    it('Zero Use Lines',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get(':nth-child(4) > .nav-link').contains('ZERO USE LINES');
    });
    it('Out of Contract Lines',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get(':nth-child(5) > .nav-link').contains('OUT OF CONTRACT LINES');
        cy.get('.d-flex > [href="/client/9666/inventory/phone_lines/"]').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(9) > .filter-list-options-container > :nth-child(2)').contains('Out Of Contract').click();
        cy.get('.button > .btn').click();
        cy.get('.badges > .badge').contains('Line-Contract-Status: out_of_contract');
    });
    it('Deactivated Lines',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.nav-item.d-flex').click();
        cy.get('ul > :nth-child(1) > .px-3').contains('Deactivated Lines');
        cy.get('.d-flex > [href="/client/9666/inventory/phone_lines/"]').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(2)').contains('Deactivated').click();
        cy.get('.button > .btn').click();
        cy.get('.badges > .badge').contains('Line-Status: deactivated');
    });
    it('Terminated Users',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.nav-item.d-flex').click();
        cy.get(':nth-child(2) > .px-3').contains('Terminated Users');
    });
});

