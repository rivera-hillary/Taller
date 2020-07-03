/// <reference types="Cypress" />

describe('CPD - 897', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('#exampleModal').should('be.visible');
        cy.get('.order-options > :nth-child(1)').contains('Order New Phone Line');
    });
    it('Shipping Reason on Order A Wireless Transfer',() => {
        cy.get('.mt-3 > .order-type-link').click();

        cy.get('.form-group.mb-3 > [for="Carrier"]').contains('Requested Carrier');

        cy.get('.order-addresses > :nth-child(5) > :nth-child(1)').contains('Shipping Type');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').contains('Expedited Shipping');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').click();
        cy.get('.why-expedited > :nth-child(1)').contains('Reason for Expedited Shipping:')
        cy.get('.why-expedited > .flex-wrap > :nth-child(2)').contains('Device Not Working');
        cy.get('.flex-wrap > .mr-0').click();
        cy.get('.other-expedited-reason > .form-group').should('be.visible').contains('Shipping Reason:');
    });
    it('Shipping Reason on P2C Line Port', () => {
        cy.get(':nth-child(3) > .order-type-link').click();
        cy.get('.form-group.mb-3 > [for="Carrier"]').contains('Requested Carrier');

        cy.get('.order-addresses > :nth-child(5) > :nth-child(1)').contains('Shipping Type');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').contains('Expedited Shipping');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').click();
        cy.get('.why-expedited > :nth-child(1)').contains('Reason for Expedited Shipping:')
        cy.get('.why-expedited > .flex-wrap > :nth-child(2)').contains('Device Not Working');
        cy.get('.flex-wrap > .mr-0').click();
        cy.get('.other-expedited-reason > .form-group').should('be.visible').contains('Shipping Reason:');
    });
    it('Shipping Reason on C2C Line port', () => {
        cy.get(':nth-child(4) > .order-type-link').click();
        cy.get(':nth-child(5) > [for="Carrier"]').contains('Requested Carrier');

        cy.get('.order-addresses > :nth-child(5) > :nth-child(1)').contains('Shipping Type');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').contains('Expedited Shipping');
        cy.get('.order-addresses > :nth-child(5) > .selection-box').click();
        cy.get('.why-expedited > :nth-child(1)').contains('Reason for Expedited Shipping:')
        cy.get('.why-expedited > .flex-wrap > :nth-child(2)').contains('Device Not Working');
        cy.get('.flex-wrap > .mr-0').click();
        cy.get('.other-expedited-reason > .form-group').should('be.visible').contains('Shipping Reason:');
    });
});