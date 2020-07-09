/// <reference types="Cypress" />

describe('CPD - 895', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
    });  
    it("The system doesn't allow adding the same phone line added previously",() => {
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.justify-content-between > .primary-color').click();
        cy.get('[data-reference="3"] > .d-flex.mb-3 > :nth-child(2) > .checkbox-entity-device').click();
        cy.get('[data-reference="3"] > .d-flex.mb-3 > :nth-child(2) > .checkbox-entity-phone-line').click();
        cy.get('[data-reference="3"] > .associations-wrapper > .entity-type-phone-line > .entity-selector > .form-group > .choices > .choices__inner > .choices__list > .choices__item').click().get('[data-reference="3"] > .associations-wrapper > .entity-type-phone-line > .entity-selector > .form-group > .choices > .choices__list--dropdown > .choices__input').type('5463864747{enter}');
        cy.get('[data-reference="3"] > .associations-wrapper > .entity-type-device > .entity-selector > .form-group > .choices > .choices__inner > .choices__list > .choices__item').click().get('[data-reference="3"] > .associations-wrapper > .entity-type-device > .entity-selector > .form-group > .choices > .choices__list--dropdown > .choices__input').type('00000000000000001{enter}');
        cy.get('.action-container > .btn-primary').click();
        cy.get('.entity-type-phone-line > .entity-selector > .form-group > .invalid-feedback').contains('This line is repeated on the form.');
        cy.get('.entity-type-device > .entity-selector > .form-group > .invalid-feedback').contains('This device is repeated on the form.');
    });
});
