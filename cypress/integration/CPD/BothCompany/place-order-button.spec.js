/// <reference types="Cypress" />

describe('CPD - 834', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });
    it('Place order button',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').should('be.visible').contains('Place Order');
    });
});