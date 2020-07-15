/// <reference types="Cypress" />

describe('CPD - 869', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.inventory();
        cy.url().should('include','/inventory/devices');
    });
    it('Contains "ICCID"',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/inventory/phone_lines/new/"]').click();
        cy.get(':nth-child(5) > label').contains('ICCID');
        cy.get('[for=""]').contains('Contract End Date');
    });
    it("Don't accept letters / symbols",() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/inventory/phone_lines/new/"]').click();
        cy.get('#phone-line-ICCIDNumber').type('letters').should('not.have.value');
        // Symbols
        cy.get('#phone-line-ICCIDNumber').type('!"·$$%&/()!').should('not.have.value');
    });
    it('Add a line',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/inventory/phone_lines/new/"]').click();
        cy.get('#phone-line-LineNumber').type('5677892345');
        cy.get('.select-outcontract').click();
        cy.get('.btn-primary').click();
    });

});
