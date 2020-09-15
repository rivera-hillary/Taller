/// <reference types="Cypress" />

describe('Associations', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.orders();
    });
    it('Allow Name/Phone Number to be clickable (Order Complete) NL',() => {
        cy.get(':nth-child(2) > [data-label="Order #"] > .primary-lighter-color').click();
        cy.get('.order-overview > .order-items > :nth-child(1) > .order-details-labels > :nth-child(2)').contains('Recipient');
        cy.get(':nth-child(2) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr','href').and('eq','/client/3980/users/880483/cpd-details/');
        cy.get('.mt-4 > .order-items > .lists > .order-details-labels > :nth-child(1)').contains('Mobile Number');
        cy.get(':nth-child(1) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr', 'href').and('eq','/client/3980/inventory/phone_lines/d01bf0ec-0642-4d80-a12e-d3979bf6cd15/details/');
    });
    it('Allow Name/Phone Number to be clickable (Order Complete) WT',() => {
        cy.get(':nth-child(4) > [data-label="Order #"] > .primary-lighter-color').click();
        cy.get('.order-overview > .order-items > :nth-child(1) > .order-details-labels > :nth-child(2)').contains('Recipient');
        cy.get(':nth-child(2) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr','href').and('eq','/client/3980/users/880483/cpd-details/');
        cy.get(':nth-child(3) > .order-items > .lists > .order-details-labels > :nth-child(2)').contains('Mobile Number');
        cy.get(':nth-child(3) > .order-items > .lists > .order-details-values > :nth-child(2) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr', 'href').and('eq','/client/3980/inventory/phone_lines/d23c327a-79d3-48b8-8d39-0e570720a3a9/details/');
    });
    it('Allow Name/Phone Number to be clickable (Pending Information) P2C',() => {
        cy.get(':nth-child(5) > [data-label="Order #"] > .primary-lighter-color').click();
        cy.get('.order-overview > .order-items > :nth-child(1) > .order-details-labels > :nth-child(2)').contains('Recipient');
        cy.get(':nth-child(2) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr','href').and('eq','/client/3980/users/880483/cpd-details/');
        cy.get(':nth-child(5) > .order-items > :nth-child(1) > .order-details-labels > :nth-child(1)').contains('Mobile Number');
        cy.get(':nth-child(1) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr', 'href').and('eq','/client/3980/inventory/phone_lines/e07e99c6-e196-47c0-8a14-b876d8cc03e3/details/');
    });
    it('Allow Name/Phone Number to be clickable (Pending Information) UD',() => {
        cy.get(':nth-child(6) > [data-label="Order #"] > .primary-lighter-color').click();
        cy.get('.order-overview > .order-items > :nth-child(1) > .order-details-labels > :nth-child(2)').contains('Recipient');
        cy.get(':nth-child(2) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr','href').and('eq','/client/3980/users/880483/cpd-details/');
        cy.get(':nth-child(4) > .order-items > .lists > .order-details-labels > :nth-child(1)').contains('Mobile Number');
        cy.get(':nth-child(1) > .primary-lighter-color').should('have.class', 'primary-lighter-color').should('have.attr', 'href').and('eq','/client/3980/inventory/phone_lines/d01bf0ec-0642-4d80-a12e-d3979bf6cd15/details/');
    });
});