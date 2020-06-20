/// <reference types="Cypress" />

describe('Permissions CPD User', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login2();
    });
    it('Manager Dashboard Landing Page',() => {
        cy.url().should('include','dashboard');
        cy.get(':nth-child(1) > .nav-link').contains('GENERAL');
        cy.get(':nth-child(2) > .nav-link').contains('MY DEVICES');
        cy.get(':nth-child(3) > .nav-link').should('not.be.visible');
        cy.get(':nth-child(4) > .nav-link').should('not.be.visible');
        cy.get(':nth-child(5) > .nav-link').should('not.be.visible');
    });
    it('Dont view programs page', () => {
        cy.get('.d-flex > [href="/client/2807/programs/"]').should('not.be.visible');
    })
    it('Dont view users page', () => {
        cy.get('.d-flex > [href="/client/2807/users/"]').should('not.be.visible');
    })/*
    it('Edit Users', () => {
        cy.get('.d-flex > [href="/client/2807/users/"]').click();
        cy.url().should('include','users');
        cy.get(':nth-child(2) > tr > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('#user-LastName').type('Gutiii');
        cy.get('.action-container > .btn-primary').click();
    })*/
    it('Dont view company settings', () => {
        cy.get('.d-flex > [href="/client/2807/settings/general/"]').should('not.be.visible');
    })/*
    it('Edit Company Settings', () => {
        cy.get('.d-flex > [href="/client/2807/settings/general/"]').click();
        cy.url().should('include','settings/general');
        cy.get(':nth-child(4) > .flex-wrap > :nth-child(2)').click();
        cy.get('.btn-inline > .btn').click();
    })*/
    it('Dont view inventory page', () => {
        cy.get('.d-flex > [href="/client/2807/inventory/devices/"]').should('not.be.visible');
    })
});
//https://mobility-cpd-qa-mobility.motusclouds.com/client/2807/programs/