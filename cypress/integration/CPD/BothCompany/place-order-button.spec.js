/// <reference types="Cypress" />

describe('CPD - 834', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('zion');
        cy.wait(1000);
        cy.get('.d-flex > [href="/client/2807/orders/1158594/"]').click()
        cy.url().should('include','/orders');
    });
    it('Place order button',() => {
        cy.get('.actions-bar > .modal-orders > #dropdownMenuButton').click();
        cy.get('.type-order-card > .btn').click();
        cy.get('#BuildSelectedDeviceBtn').contains('Place Order');
    });
});