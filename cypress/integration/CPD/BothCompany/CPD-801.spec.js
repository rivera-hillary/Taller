/// <reference types="Cypress" />

describe('CPD - 801', () => {
    beforeEach('User role should be listed in users', () => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });
    it('We should see what role the user has',() => {
        cy.get('thead > tr > :nth-child(6)').should('be.visible').contains('CPD Role');
    });
    it("It's a User / Manager / Admin",() => {
        cy.get('tbody > :nth-child(1) > :nth-child(6)').contains('Admin');
        cy.get('tbody > :nth-child(2) > :nth-child(6)').contains('User');
        cy.get('tbody > :nth-child(3) > :nth-child(6)').contains('Manager');
    });
});