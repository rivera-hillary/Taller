/// <reference types="Cypress" />

describe('CPD - BAN/FAN Cleanup', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.settings();
        cy.wait(1000);
        cy.url().should('include','/settings');
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.dropdown-toggle > .btn').click({force: true});
        cy.get('[data-name="ATANDT"]').click();
    });/*
    it('It should be named "Account Type"', () => {
        cy.get('#ATAndT-2-card > .mt-2 > [for=""]').contains('Account Type');
    });
    it('It should be named "BAN"', () => {
        cy.get('#ATAndT-2-card > .mt-2 > .flex-wrap > .checked').contains('BAN');
    });
    it('It should be named "FAN"', () => {
        cy.get('#ATAndT-2-card > .mt-2 > .flex-wrap > :nth-child(2)').contains('FAN');
    });*/
    it('It should say "FAN Account" and verify the select', () => {
        cy.get('#ATAndT-2-card > .mt-2 > .flex-wrap > :nth-child(2)').click();
        cy.get('#ATAndT-2-card > .form-group-select-ban-account > .form-group > label').contains('FAN Account');
        cy.get('#ATAndT-2-card > .form-group-select-ban-account > .form-group > .choices > .choices__inner').click().get('.choices__item--selectable').should('be.hidden').invoke('show').contains('1231').click({force: true});
    });
});