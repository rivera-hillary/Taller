/// <reference types="Cypress" />

describe('CPD - Create a program', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.program();
        cy.wait(1000);
        cy.url().should('include','/programs');
    });
    it('Create a program',() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('.actions-bar > .dropdown > .dropdown-menu > .dropdown-item').click();
        // Program Name
        cy.get('#program-Name').type('Test-1');
        // Program Configuration
        cy.get('#SetAsDefaultProgram').check();
        // Devices
        cy.get('#device-search-field').click();
        cy.get('[data-device-id="b495a720-3f6a-479c-9343-e3ebc1a042fd"]').eq(1).click();
        // Accessories
        cy.get('.wireless-accessories > :nth-child(1) > .d-flex').click();
    })
});