/// <reference types="Cypress" />

describe('CPD - 734', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.settings();
        cy.url().should('include','/settings/general');
    });
    it('Contains "Pro or Premium company"',() => {
        cy.get('.mb-3 > [for=""]').contains('Company Tier');
        cy.get('.mb-3 > .flex-wrap').should('be.visible').contains('PRO');
        cy.get('.mb-3 > .flex-wrap > :nth-child(2)').should('be.visible').contains('Premium');
    });
    it('Pro / Premium is select',() => {
        // Premium
        cy.get('.mb-3 > .flex-wrap > :nth-child(2)').should('be.visible').contains('Premium').click();
        cy.get('.btn-inline > .btn').click().get('.swal2-confirm').click();
        cy.get('.alert').contains('Settings updated successfully');
        // Pro
        cy.get('.mb-3 > .flex-wrap').should('be.visible').contains('PRO').click();
        cy.get('.btn-inline > .btn').click().get('.swal2-confirm').click();
        cy.get('.alert').contains('Settings updated successfully');
    });
});


