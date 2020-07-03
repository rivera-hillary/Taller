/// <reference types="Cypress" />

describe('CPD - 889', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.settings();
        cy.url().should('include','/settings/general/');
        cy.get('.nav > :nth-child(2) > .nav-link').click();
    });
    it('It should be named "Account Type"', () => {
        cy.get('#ATAndT-1-card > :nth-child(3) > [for=""]').contains('Account Type');
    });
    it('It should be named "FAN"', () => {
        cy.get('#ATAndT-1-card > :nth-child(3) > .flex-wrap > .fan-radio').contains('FAN');
    });
    it('It should be named "BAN"', () => {
        cy.get('#ATAndT-1-card > :nth-child(3) > .flex-wrap > .checked').contains('BAN');
    });
    it('It should say "FAN Account" and verify the select', () => {
        cy.get('#ATAndT-1-card > .form-group-select-ban-account > label').contains('FAN Account');
        cy.get('#ATAndT-1-card > .form-group-select-ban-account > .choices > .choices__inner').contains('Please select the principal account');
    });
});