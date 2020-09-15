/// <reference types="Cypress" />

describe('CPD - 869', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.company(); 
        cy.inventory();
        cy.url().should('include','/inventory/phone_lines');
    });
    it('Contains "ICCID"',() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/inventory/phone_lines/new/"]').click();
        cy.get(':nth-child(5) > label').contains('ICCID');
        cy.get('[for=""]').contains('Contract End Date');
    });
    it("Don't accept letters / symbols",() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/inventory/phone_lines/new/"]').click();
        cy.get('#phone-line-ICCIDNumber').type('letters').should('not.have.value');
        // Symbols
        cy.get('#phone-line-ICCIDNumber').type('!"·$$%&/()!').should('not.have.value');
    });
    it('Add a line',() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/inventory/phone_lines/new/"]').click();
        cy.get('#phone-line-LineNumber').type('3217489253');
        cy.get('.select-outcontract').click();
        cy.get('.btn-primary').click();
    });

});
