/// <reference types="Cypress" />

describe('CPD - 826', () => {
    beforeEach('Pricing Type Adjustments', () => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        //cy.wait(1000);
        cy.settings();
        cy.url().should('include','/settings/general/');
        cy.get('.nav > :nth-child(2) > .nav-link').click();
    });
    it('Exits',() => {
        cy.get('#ATAndT-1-card > :nth-child(9) > .form-group > .choices > .choices__inner').click().get('[role="listbox"]').contains('Installments');
        cy.get('#ATAndT-1-card > :nth-child(9) > .form-group > .choices > .choices__inner').click().get('[role="listbox"]').contains('Subsidized');
        cy.get('#ATAndT-1-card > :nth-child(9) > .form-group > .choices > .choices__inner').click().get('[role="listbox"]').contains('Full Retail');
    });
    it('When "Installments" is selected',() => {
        cy.get(':nth-child(9) > .form-group > label').contains('Pricing Type');
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').click().get('[data-value="Installments"]').wait(500).eq(2).click();
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').contains('Installments');
        cy.get('.subsidized-options > [for=""]').should('not.be.visible');
        cy.get('.subsidized-options > .flex-wrap > .checked').should('not.be.visible');
        cy.get('[data-type="fullRetail"]').should('not.be.visible');
    });
    it('When "Subsidized" is selected',() => {
        cy.get(':nth-child(9) > .form-group > label').contains('Pricing Type');
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').click().get('[data-value="Subsidized"]').click();
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').contains('Subsidized');
        cy.get('.subsidized-options > [for=""]').contains('In Contract Upgrade');
        cy.get('.subsidized-options > .flex-wrap > .checked').contains('Pay Balance').should('be.visible');
        cy.get('[data-type="fullRetail"]').contains('Full Retail').should('be.visible');
    });
    it('When "Full Retail" is selected',() => {
        cy.get(':nth-child(9) > .form-group > label').contains('Pricing Type');
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').click().get('[data-value="Full Retail"]').click();
        cy.get(':nth-child(9) > .form-group > .choices > .choices__inner').contains('Full Retail');
        cy.get('.subsidized-options > [for=""]').should('not.be.visible');
        cy.get('.subsidized-options > .flex-wrap > .checked').should('not.be.visible');
        cy.get('[data-type="fullRetail"]').should('not.be.visible');
    });
});
