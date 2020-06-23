/// <reference types="Cypress" />

describe('CPD - 872', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.program();
        cy.url().should('include','/programs');
        cy.get(':nth-child(1) > .row > .program > .title-program > a').click();
    });
    it("Don't show the Details titles twice.",() => {
        cy.get(':nth-child(1) > .nav-link > .mobile-text').should('not.be.visible');
    });
    it("Don't show the Users titles twice.",() => {
        cy.get(':nth-child(2) > .nav-link > .mobile-text').should('not.be.visible');
    });
});