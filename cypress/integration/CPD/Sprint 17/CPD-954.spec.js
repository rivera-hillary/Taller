/// <reference types="Cypress" />

describe('Associations', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.users();
    });
    it('Process Request',() => {
        cy.get('form > .search-control > .form-control').type('Bradley Weeks {enter}');
        cy.get('.primary-lighter-color').click();
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__options > .dropdown > #dropdownMenuButton').click();
        cy.get('[data-title="Process Line Request"]').eq(0).contains('Process Line Request');
        cy.get(':nth-child(1) > .inventory-item__content > .inventory-item__section--pl > .inventory-item__title > .outline-none').click();
        cy.get('.btn-options-main-button').contains('Process Request');
    });
});