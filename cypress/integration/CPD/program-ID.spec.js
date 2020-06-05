/// <reference types="Cypress" />

describe('CPD - BAN/FAN Cleanup', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.programs();
        cy.wait(1000);
        cy.url().should('include','/programs');
    });
    it('Create a program',() => {
        cy.get('#dropdownMenuButton').click();
        cy.get('.actions-bar > .dropdown > .dropdown-menu > .dropdown-item').click();
        // Program Name
        cy.get('#program-Name').type('Test-1');
        // Program Configuration
        cy.get('#SetAsDefaultProgram').check();
        // Devices
        cy.get('#device-search-field').click();
        cy.get('[data-name="IPHONE 8 SPACE GRAY 64 IOS"]').click();
        // Accessories
        cy.get('.wireless-accessories > :nth-child(1) > .d-flex').click();
        // Save Program
        cy.get('.btn-primary').click();
    })
});