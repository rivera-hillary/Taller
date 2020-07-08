/// <reference types="Cypress" />

describe('CPD - 804', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });
    it('Upgrade Eligibility Status',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.inventory-item__section--efu > .inventory-item__title').contains('ELEGIBLE FOR UPGRADE'); 
        cy.get('.inventory-item__section--efu > .inventory-item__value').should('be.visible');  
    });
    it('Contract Status',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.inventory-item__section--ced > .inventory-item__title').contains('CONTRACT END DATE');
        cy.get('.inventory-item__section--ced > .inventory-item__value').should('be.visible');  
    });
    it('Line Status',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.inventory-item__section--status > .font-12').as('btnActive').should('be.visible');  
    });
    it('Change Contract End Date option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ced"]').contains('Change Contract End Date').click();
        cy.get('#dateInput').click().get(':nth-child(34)').click();
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
    });
    it('Change Upgrate Eligibility Date option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ued"]').contains('Change Upgrate Eligibility Date').click();
        cy.get('#dateInput').click().get(':nth-child(33) > .qs-num').click(); 
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
    });
    it('Reset Contract End Date Timer option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-button="Reset Timer"]').contains('Reset Contract End Date Timer').click();
        cy.get('.swal2-confirm').click(); 
    });
    it('Reset Upgrate Eligibility Date Timer option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-button="Reset Timer"]').contains('Reset Upgrate Eligibility Date Timer').click();
        cy.get('.swal2-confirm').click(); 
    });   
    it('Deactivate Line option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Deactivate Line"]').contains('Deactivate Line').click();
        cy.get('.swal2-confirm').click();
        cy.get('.inventory-item__section--status').contains('pending deactivation');
        cy.get('.d-flex > [href="/client/2822/inventory/devices/"]').click();
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('#searchDevicesInput').type('300-800-9090{enter}');
        cy.get('[data-label="Phone Line"] > .primary-lighter-color').click();
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('.font-17 > .dropdown-item').click();
        cy.get('.swal2-confirm').click();
    });
    it('Suspend Line option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Suspend Line"]').contains('Suspend Line').click(); 
        cy.get('.swal2-confirm').click();
        cy.get('.inventory-item__section--status').contains('pending suspension');
        cy.get('.d-flex > [href="/client/2822/inventory/devices/"]').click();
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('#searchDevicesInput').type('300-800-9090{enter}');
        cy.get('[data-label="Phone Line"] > .primary-lighter-color').click();
        cy.get('.button-with-options > #dropdownMenuButton').click();
        cy.get('.font-17 > .dropdown-item').click();
        cy.get('.swal2-confirm').click();
    });
    it('Request Call Forwarding option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [data-title="Forward Calls"]').contains('Request Call Forwarding'); 
    });
});
