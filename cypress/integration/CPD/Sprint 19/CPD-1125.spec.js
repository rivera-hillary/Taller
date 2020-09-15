/// <reference types="Cypress" />

describe('CPD - 1125', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.inventory();
        cy.url().should('include','inventory');
    });
    it('Deactivate Line Modal Cleanup',() => {
        // INVENTORY PAGE
        cy.get('.nav > :nth-child(2)').click();
        cy.get(':nth-child(1) > [data-label=" "] > .d-flex > #dropdownMenuButton').click();
        cy.get('[data-title="Deactivate Line"]').eq(0).click();
        cy.get('.swal2-header').contains('Deactivate Line');
        cy.get('#swal2-content').contains('Are you sure you want to deactivate (');
        cy.get('.swal2-close').click();
        // PHONE LINE DETAILS PAGE
        cy.get(':nth-child(1) > [data-label="Phone Line"] > .primary-lighter-color').click().wait(500);
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('[data-title="Deactivate Line"]').click();
        cy.get('.swal2-header').contains('Deactivate Line');
        cy.get('#swal2-content').contains('Are you sure you want to deactivate (');
    });
    it('Suspend Line Modal Cleanup',() => {
        // INVENTORY PAGE
        cy.get('.nav > :nth-child(2)').click();
        cy.get(':nth-child(1) > [data-label=" "] > .d-flex > #dropdownMenuButton').click();
        cy.get('[data-title="Suspend Line"]').eq(0).click();
        cy.get('.swal2-header').contains('Suspend Line');
        cy.get('#swal2-content').contains('Are you sure you want to suspend (');
        cy.get('.swal2-close').click();
        // PHONE LINE DETAILS PAGE
        cy.get(':nth-child(1) > [data-label="Phone Line"] > .primary-lighter-color').click().wait(500);
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('[data-title="Suspend Line"]').click();
        cy.get('.swal2-header').contains('Suspend Line');
        cy.get('#swal2-content').contains('Are you sure you want to suspend (');
    });
    it('Change Upgrade Eligibility Date Modal Cleanup',() => {
        // INVENTORY PAGE
        cy.get('.nav > :nth-child(2)').click();
        cy.get(':nth-child(1) > [data-label=" "] > .d-flex > #dropdownMenuButton').click();
        cy.get('[data-date-type="ued"]').eq(0).click();
        cy.get('.modal-header').contains('Change Upgrade Eligibility Date');
        cy.get('.modal-footer > .btn-secondary').click().wait(500);
        // PHONE LINE DETAILS PAGE
        cy.get(':nth-child(1) > [data-label="Phone Line"] > .primary-lighter-color').click({force:true}).wait(500);
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('[data-date-type="ued"]').click();
        cy.get('.modal-header').contains('Change Upgrade Eligibility Date');
    });
    it('Forward Calls Modal',() => {
        // INVENTORY PAGE
        cy.get('.nav > :nth-child(2)').click();
        cy.get(':nth-child(1) > [data-label=" "] > .d-flex > #dropdownMenuButton').click();
        cy.get('[data-title="Forward Calls"]').eq(0).click();
        cy.get('.swal2-header').contains('Forward Calls');
        cy.get('.forwarding-calls-inventory-form > .mb-4').contains('Please specify the phone number that calls should be forwarded to.');
        cy.get('.swal2-close').click();
        // PHONE LINE DETAILS PAGE
        cy.get(':nth-child(1) > [data-label="Phone Line"] > .primary-lighter-color').click().wait(500);
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('[data-title="Forward Calls"]').click();
        cy.get('.swal2-header').contains('Forward Calls');
        cy.get('.forwarding-calls-inventory-form > .mb-4').contains('Please specify the phone number that calls should be forwarded to.');
    });
});