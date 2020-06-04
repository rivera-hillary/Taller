/// <reference types="Cypress" />

describe('CPD - Contract length', () => {
    beforeEach(() => {
    cy.visit('/');
    cy.login();
    cy.settings();
    cy.wait(1000);
    cy.url().should('include','/settings');
})
    it('It should be named "Contract Length"', () => {
    cy.get('.dropdown-toggle > .btn').click({force: true});
    cy.get('[data-name="ATANDT"]').click();
    cy.get('#ATAndT-2-card > :nth-child(8) > .pr-0 > label').contains('Contract Length');
})
    it('Its initial state should be 0', () => {
    cy.get('.dropdown-toggle > .btn').click({force: true});
    cy.get('[data-name="ATANDT"]').click();
    cy.get('.pr-0 > .choices > .choices__inner > .choices__list').contains('0');
})
})