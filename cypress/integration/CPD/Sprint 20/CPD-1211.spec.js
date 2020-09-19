/// <reference types="Cypress" />

describe('CPD-1211', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.url().should('include', '/programs/')
    });
    it('When Delete Programs is pressed, send pop up',() => {
        cy.get('[data-original-title="Lines - Testing"]').click();
        cy.get('.edit-entity-dropdown').click();
        cy.get('.input-group-append > .dropdown-menu > .dropdown-item').click();
        cy.get('.swal2-header').contains('Unable to Delete Program');
        cy.get('#swal2-content').contains('Because users are in this program, it can not be deleted. In order to delete this program, please first move the users to another program.');
        cy.get('.swal2-cancel').contains('Okay');
    });
});