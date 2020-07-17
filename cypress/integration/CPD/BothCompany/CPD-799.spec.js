/// <reference types="Cypress" />

describe('CPD - 799', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Contains "Reset Timer" / M3 SUPER ADMIN',() => {
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        // Contract End Date
        cy.get('[data-button="Reset Timer"]').contains('Reset Contract End Date Timer');
        // Upgrate Eligibility Date
        cy.get('[data-button="Reset Timer"]').contains('Reset Upgrate Eligibility Date Timer');
    });
    it('Reset Timer / M3 SUPER ADMIN',() => {
        // 2 MONTHS
        const firstDate = Cypress.moment().add(1, 'day').format('MM/DD/YYYY');
        const secondDate = Cypress.moment().add(2, 'month').format('MM/DD/YYYY');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        // Contract End Date
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();

        // Change Contract End Date
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ced"]').contains('Change Contract End Date').click();
        cy.get('#dateInput').wait(800).type(firstDate).get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
        // Reset Timer
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/users/839319/phone_line/f9e6188f-5f6a-49bd-a69a-1d28939b6edb/update-date/?type=reset_ced_timer"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.alert').contains('Date updated successfully');
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__section--ced > .inventory-item__value').should('contain', secondDate);

        // UPGRADE ELIGIBILITY DATE

        // Change Upgrate Eligibility Date
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-date-type="ued"]').contains('Change Upgrate Eligibility Date').click();
        cy.get('#dateInput').wait(800).type(firstDate);
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
        // Reset Timer
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/users/839319/phone_line/f9e6188f-5f6a-49bd-a69a-1d28939b6edb/update-date/?type=reset_ued_timer"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.alert').contains('Date updated successfully'); 
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__section--efu > .inventory-item__value').should('contain', secondDate);
    });
    it('Contains "Reset Timer" / SUPPORT ADMIN',() => {
        // Daniel — CPD SUPPORT ADMIN
        cy.login('cpdsupport');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        // Contract End Date
        cy.get('[data-button="Reset Timer"]').contains('Reset Contract End Date Timer');
        // Upgrate Eligibility Date
        cy.get('[data-button="Reset Timer"]').contains('Reset Upgrate Eligibility Date Timer');
    });
    it('Reset Timer / SUPPORT ADMIN',() => {
        const firstDate = Cypress.moment().add(1, 'day').format('MM/DD/YYYY');
        const secondDate = Cypress.moment().add(8, 'month').format('MM/DD/YYYY');
        const thirdDate = Cypress.moment().add(7, 'month').format('MM/DD/YYYY');
        // Daniel — CPD SUPPORT ADMIN
        cy.login('cpdsupport');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        // Contract End Date
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();

        // Change Contract End Date
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > .dropdown-menu > [data-date-type="ced"]').contains('Change Contract End Date').click();
        cy.get('#dateInput').wait(800).type(firstDate);
        cy.get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
        // Reset Timer
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/users/839319/phone_line/54c90e52-a27d-4646-ba87-66982da41a48/update-date/?type=reset_ced_timer"]').click();
        cy.get('.swal2-confirm').click();
        cy.get('.alert').contains('Date updated successfully');
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__section--ced > .inventory-item__value').should('contain', secondDate);

        // UPGRADE ELIGIBILITY DATE

        // Change Upgrate Eligibility Date
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > .dropdown-menu > [data-date-type="ued"]').contains('Change Upgrate Eligibility Date').click();
        cy.get('#dateInput').wait(800).type(firstDate).get('.edit-date-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.alert').contains('Date updated successfully');
        // Reset Timer
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/users/839319/phone_line/54c90e52-a27d-4646-ba87-66982da41a48/update-date/?type=reset_ued_timer"]').click();
        cy.get('.swal2-confirm').click().wait(500);
        cy.get('.alert').contains('Date updated successfully'); 
        cy.get(':nth-child(3) > .inventory-item__content > .inventory-item__section--efu > .inventory-item__value').should('contain', thirdDate);
    });
    it('Not contains "Reset Timer" / CPD ADMIN',() => {
        // Juan — CPD ADMIN
        cy.login('cpdadmin');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
        
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        // Contract End Date
        cy.get('[data-button="Reset Timer"]').should('not.be.visible');
        // Upgrate Eligibility Date
        cy.get('[data-button="Reset Timer"]').should('not.be.visible');
    });
});