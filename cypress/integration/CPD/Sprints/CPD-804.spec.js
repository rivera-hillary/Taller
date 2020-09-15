/// <reference types="Cypress" />

describe('CPD - 804', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.users();
        cy.url().should('include','/users');
    });
    it('Upgrade Eligibility Status',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.inventory-item__section--efu > .inventory-item__title').contains('ELEGIBLE FOR UPGRADE'); 
        cy.get('.inventory-item__section--efu > .inventory-item__value').should('be.visible');  
    });
    it('Contract Status',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.inventory-item__section--ced > .inventory-item__title').contains('CONTRACT END DATE');
        cy.get('.inventory-item__section--ced > .inventory-item__value').should('be.visible');  
    });
    it('Line Status',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.inventory-item__section--status > .font-12').as('btnActive').should('be.visible');  
    });
    it('Change Contract End Date option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ced"]').contains('Change Contract End Date').click();
        cy.get('#dateInput').click().get('.qs-squares > :nth-child(38)').click();
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
    });
    it('Change Upgrade Eligibility Date option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ued"]').contains('Change Upgrade Eligibility Date').click();
        cy.get('#dateInput').click().get('.qs-squares > :nth-child(38)').click(); 
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
    });
    it('Reset Contract End Date Timer option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-button="Reset Timer"]').contains('Reset Contract End Date Timer').click();
        cy.get('.swal2-confirm').click();
        cy.get('.alert').contains('Date updated successfully'); 
    });
    it('Reset Upgrade Eligibility Date Timer option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-button="Reset Timer"]').eq(1).contains('Reset Upgrade Eligibility Date Timer').click();
        cy.get('.swal2-confirm').click();
        cy.get('.alert').contains('Date updated successfully'); 
    });
    it('Deactivate Line option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Deactivate Line"]').contains('Deactivate Line').click();
        cy.get('.swal2-confirm').click();
        cy.get('.inventory-item__section--status').contains('pending deactivation');
        cy.get('.inventory-item__title > .outline-none').click();
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('.font-17 > .dropdown-item').click();
    });
    it('Suspend Line option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Suspend Line"]').contains('Suspend Line').click(); 
        cy.get('.swal2-confirm').click();
        cy.get('.inventory-item__section--status').contains('pending suspension');
        cy.get('.inventory-item__title > .outline-none').click();
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('.font-17 > .dropdown-item').click();
    });
    it('Request Call Forwarding option',() => {
        cy.get(':nth-child(5) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Forward Calls"]').contains('Request Call Forwarding'); 
    });
});
