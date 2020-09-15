/// <reference types="Cypress" />

describe('CPD - 861', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('akore');
        cy.wait(1000);
        cy.company();
    });
    it('Import Users',() => {
        cy.users();
        cy.get(':nth-child(2) > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/users/import/"]').click();
        cy.get('.page-content > .flex-row').contains('Import Users');
        cy.get('.mt-3').contains("Don't know what to upload? ");
        cy.get('.mt-3 > .ml-1').contains('Download a sample CSV file');
    });
    it('Import Lines',() => {
        cy.inventory();
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/inventory/import/"]').click();
        cy.get('.page-content > .flex-row').contains('Import Inventory');
        cy.get('.mt-3').contains("Don't know what to upload?. ");
        cy.get('.mt-3 > .ml-1').contains('Download a sample CSV file');
    });
});