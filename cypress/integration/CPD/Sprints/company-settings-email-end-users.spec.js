/// <reference types="Cypress" />

describe('BothCompany > Settings', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.csettings();
    });
    it('Company Setting - Email End Users',() => {
        cy.url().should('include','settings/general');
        cy.get(':nth-child(6) > [for=""]').contains('Email Settings');
        cy.get(':nth-child(6) > .flex-wrap > :nth-child(1)').contains('Email End Users');
        cy.get(':nth-child(6) > .flex-wrap > .mr-0').contains('Email Admins');
    });
});