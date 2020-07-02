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
    });
    it('Contract Status',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.inventory-item__section--ced > .inventory-item__title').contains('CONTRACT END DATE');
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__section--ced > .inventory-item__value').wait(500).contains('Out Of Contract');   
    });
    it('Line Status',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.inventory-item__section--status > .font-12').as('btnActive').should('be.visible');  
    });/*
    it('Take action on the line', () => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2807/users/832634/phone_line/8df8f25e-4b2c-4506-9f7e-a14f5953fd16/status/?change_to=deactivated"]').contains('Deactivate Line');
        cy.get('[href="/client/2807/users/832634/phone_line/8df8f25e-4b2c-4506-9f7e-a14f5953fd16/status/?change_to=suspended"]').contains('Suspend Line');
        cy.get('.dropdown-menu > .text-primary-color').contains('Request Call Forwarding');
    });*/
    it('Change Contract End Date option',() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('.dropdown-menu > [href=""]').contains('Change Contract End Date'); 
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
