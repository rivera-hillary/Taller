/// <reference types="Cypress" />

describe('CPD-968', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.users();
    });
    it('User Page Adjustments',() => {
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.user-info > :nth-child(1) > :nth-child(2)').should('have.class','email');
        cy.get('.user-info > :nth-child(1) > :nth-child(3)').should('have.class','email');
        cy.get('.username').should('have.class','username');
    });
});