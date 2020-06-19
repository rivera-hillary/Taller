/// <reference types="Cypress" />

describe('BothCompany > Users > Add User', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
    });/*
    it('Manager Dashboard Landing Page',() => {
        cy.url().should('include','dashboard');
        cy.get(':nth-child(1) > .nav-link').contains('GENERAL');
        cy.get(':nth-child(2) > .nav-link').contains('APPROVALS');
        cy.get(':nth-child(3) > .nav-link').contains('TEAM MEMBERS');
        cy.get(':nth-child(4) > .nav-link').contains('REPORTS');
        cy.get(':nth-child(5) > .nav-link').contains('MY DEVICES');
    });
    it('View Programs Page', () => {
        cy.get('.d-flex > [href="/client/2807/programs/"]').click();
        cy.url().should('include','programs');
    })
    it('View Users Page', () => {
        cy.get('.d-flex > [href="/client/2807/users/"]').click();
        cy.url().should('include','users');
    })
    it('Edit Users', () => {
        cy.get('.d-flex > [href="/client/2807/users/"]').click();
        cy.url().should('include','users');
        cy.get(':nth-child(2) > tr > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('#user-LastName').type('Gutiii');
        cy.get('.action-container > .btn-primary').click();
    })
    it('View Company Settings', () => {
        cy.get('.d-flex > [href="/client/2807/settings/general/"]').click();
        cy.url().should('include','settings/general');
    })
    it('Edit Company Settings', () => {
        cy.get('.d-flex > [href="/client/2807/settings/general/"]').click();
        cy.url().should('include','settings/general');
        cy.get(':nth-child(4) > .flex-wrap > :nth-child(2)').click();
        cy.get('.btn-inline > .btn').click();
    })*/
    it('View Inventory Page', () => {
        cy.get('.d-flex > [href="/client/2807/inventory/devices/"]').click();
        cy.url().should('include','inventory/devices');
    })
});