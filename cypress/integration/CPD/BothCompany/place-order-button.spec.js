/// <reference types="Cypress" />

describe('CPD - 834', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('zion');
        cy.wait(1000);
        cy.orders();
        cy.url().should('include','/orders');
    });
    it('Place order button',() => {
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').contains('Place Order');
        cy.get('.place-order-btn').click();
        cy.get('.type-order-card > .btn').click();
    });
});