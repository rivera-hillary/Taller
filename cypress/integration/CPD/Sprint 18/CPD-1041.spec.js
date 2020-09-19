/// <reference types="Cypress" />

describe('CPD - 861', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
    });
    it('Accessories',() => {
        cy.get(':nth-child(8) > .row > .program > .title-program > a').click();
        cy.get('.h-100').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('.wireless-accessories > :nth-child(2)').click();
        cy.get('.wireless-accessories > :nth-child(3)').click();
        cy.get('.btn-primary').click();
        cy.users();
        cy.get('form > .search-control > .form-control').type('Nick Lopez {enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click().get(':nth-child(1) > .type-order-card > .btn').click();
        cy.get('.orders-form > :nth-child(8)').contains('Accessories');
        cy.get('.wireless-accessories > :nth-child(1)').contains('Case');
        cy.get('.wireless-accessories > :nth-child(2)').contains('Screen Protector');
        cy.get('.wireless-accessories > :nth-child(3)').contains('Wired Headset');
    });
    it('No accessories',() => {
        cy.get(':nth-child(8) > .row > .program > .title-program > a').click();
        cy.get('.h-100').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('.wireless-accessories > :nth-child(2)').click();
        cy.get('.wireless-accessories > :nth-child(3)').click();
        cy.get('.btn-primary').click();
        cy.users();
        cy.get('form > .search-control > .form-control').type('Nick Lopez {enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.place-order-btn').click().get(':nth-child(1) > .type-order-card > .btn').click();
        cy.get('.orders-form > :nth-child(8) > :nth-child(1)').should('not.be.visible');
    });
});