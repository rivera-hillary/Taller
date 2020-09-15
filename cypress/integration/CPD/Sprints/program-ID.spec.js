/// <reference types="Cypress" />

describe('CPD - Create a program', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.company();
        cy.program();
        cy.wait(1000);
        cy.url().should('include','/programs');
    });
    it('Create a program',() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('.actions-bar > .dropdown > .dropdown-menu > .dropdown-item').click();
        cy.get('.cpd-program > :nth-child(1) > label').contains('Program Name');
        cy.get('#program-Name').type('Test-1');
        cy.get('.form-group.mb-2 > [for=""]').contains('Program Configuration');
        cy.get('#SetAsDefaultProgram').click();
        cy.get('.devices > label').contains('Devices');
        cy.get('#ATAndT > .card-body > :nth-child(1) > .dropdown > .dropdown-toggle > .input-form > .search-device > #device-search-field').click();
        cy.get('#ATAndT > .card-body > :nth-child(1) > .dropdown > .dropdown-menu > ul > .select-all-devices-btn > .justify-content-end > .bg-primary').click();
        cy.get('.cpd-program > :nth-child(4) > :nth-child(1)').contains('Accessories');
    })
});