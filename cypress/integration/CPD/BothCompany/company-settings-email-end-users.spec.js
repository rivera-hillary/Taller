/// <reference types="Cypress" />

describe('BothCompany > Settings', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.csettings();
    });
    it('Company Setting - Email End Users',() => {
        cy.url().should('include','settings/general');
        cy.get(':nth-child(5) > [for=""]').contains('Email Settings');
        cy.get(':nth-child(5) > .flex-wrap > .selection-box > .m-0').contains('Email End Users');
        cy.get(':nth-child(5) > .flex-wrap > .selection-box').click();
        cy.get(':nth-child(5) > .flex-wrap > .selection-box').click();
    });
});