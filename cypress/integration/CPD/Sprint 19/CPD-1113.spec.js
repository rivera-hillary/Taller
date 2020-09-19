/// <reference types="Cypress" />

describe('CPD - 1113', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.orders();
        cy.url().should('include','orders');
    });
    it('Delete button should say "Cancel"',() => {
        cy.get(':nth-child(1) > [data-label="Order #"]').click();
        cy.get('.btn-deny').contains('Cancel');
        cy.get('.btn-deny').click();
        cy.get('#swal2-content > :nth-child(1) > :nth-child(1)').contains('Please provide the reason it is canceled (This will be displayed for the user).');
        cy.get('.swal2-confirm').contains('Cancel Order');
    });
});