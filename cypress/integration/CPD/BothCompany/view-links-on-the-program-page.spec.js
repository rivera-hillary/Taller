/// <reference types="Cypress" />

describe('CPD - 857', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('View links CPD MANAGER',() => {
        cy.login('cpdmanager');
        cy.wait(1000);
        cy.program();
        cy.url().should('include','/programs');
        cy.get('[data-test=noEditView]').as('viewLinks');
        cy.get('@viewLinks').should('have.attr','href').and('eq','/client/2822/programs/cpd/8890/details/');
        cy.get('@viewLinks').contains('View');
    });
    it('View links CPD SUPPORT',() => {
        cy.login('cpdadmin');
        cy.wait(1000);
        cy.program();
        cy.url().should('include','/programs');
        cy.get('#programListdropdownMenuButton').click();
        cy.get('.dropdown-menu > [href="/client/2822/programs/cpd/8890/details/"]').contains('View').should('have.attr','href').and('eq','/client/2822/programs/cpd/8890/details/');
    });
});