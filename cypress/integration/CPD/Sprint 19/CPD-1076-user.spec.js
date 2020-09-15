/// <reference types="Cypress" />

describe('CPD - 1076', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpd_user — 1
        cy.login('cpd_user');
        cy.wait(1000);
        cy.url().should('include','dashboard');
    });
    it('User dashboard',() => {
        cy.get('.col-8 > .pbot-12').contains('My Charges Report');
        cy.get(':nth-child(2) > .divisor-container').contains('No historical data to show. You will see here a report of the costs per line once we have enough data.');
        cy.get('.col-4 > .pbot-12').contains('My Orders');
        cy.get('.order-activity-section').contains('No orders have being requested.');
    });
});