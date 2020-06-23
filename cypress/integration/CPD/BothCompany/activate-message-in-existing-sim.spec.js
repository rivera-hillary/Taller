/// <reference types="Cypress" />

describe('BothCompany > Orders', () => {
    beforeEach(() => {
        cy.visit('/');
        // Zion — CPD User — zion — 1
        cy.login('zion');
        cy.wait(1000);
        cy.url().should('include','dashboard');
        cy.newOrder();
    });
    it('Order new device',() => {
        cy.get(':nth-child(5) > .form-group > .checked').click();
        cy.get('.cursor-pointer > .select-device-btn').should('be.visible');
        cy.get(':nth-child(12) > .mb-4').contains('We will try to activate the new number on your existing SIM card. If we can not, we will need to ship you a new SIM card.');
        cy.get('.bring-device-block').should('not.be.visible');
    });
    it('Bring my own device',() => {
        cy.get(':nth-child(5) > .form-group > :nth-child(2)').click();
        cy.get(':nth-child(12) > .mb-4').should('be.visible');
        cy.get(':nth-child(12) > .mb-4').contains('We will try to activate the new number on your existing SIM card. If we can not, we will need to ship you a new SIM card.');
    });
});