/// <reference types="Cypress" />

describe('CPD - User Custom Variables', () => {
    beforeEach(() => {
    cy.visit('/');
    // Otis — M3 SUPER ADMIN
    cy.login('akore');
    cy.company();
    cy.settings();
    cy.wait(1000);
    cy.url().should('include','/settings');
})
    it('It should be named "User Custom Variables"', () => {
        cy.get('.input-multiple > label').contains('User Custom Variables');
    });
    it('Hover', () => {
        cy.get('.input-multiple > .fal').trigger('mouseover');
        cy.get('.tooltip-inner').should('be.visible').contains('Type in the custom variable name and press enter to add it.');
    });
    it('Enter a custom variable', () => {
        cy.get('.choices__inner').type('Test{enter}');
    });
    it('Enter a custom variable and deleted it', () => {
        cy.get('.choices__inner').type('Test-2{enter}');
        cy.get('[data-id="1"] > .choices__button').click();
    });
    it('Repeat the custom variable and verified the message', () => {
        cy.get('.choices__inner').type('Test{enter}');
        cy.get('.choices__inner').type('Test{enter}');
        cy.get('.choices__list--dropdown > .choices__item').should('be.visible').contains('Only unique values can be added');
    });
    it('Expand the text field', () => {
        cy.get('.choices__inner').type('Departament{enter}');
        cy.get('.choices__inner').type('Address{enter}');
        cy.get('.choices__inner').type('Credit Card{enter}');
        cy.get('.choices__inner').type('Reimbursements{enter}');
        cy.get('.choices__inner').type('Local{enter}');
        cy.get('.choices__inner').type('Settings{enter}');
        cy.get('.choices__inner').type('Variables{enter}');
        cy.get('.choices__inner').type('Finance{enter}');
        cy.get('.choices__inner').type('Smarthphone{enter}');
        cy.get('.choices__inner').type('Home{enter}');
        cy.get('.choices__inner').type('Programs{enter}');
        cy.get('.choices__inner').type('Developer{enter}');
        cy.get('.choices__inner').type('Users{enter}');
        cy.get('.choices__inner').type('Inventory{enter}');
        cy.get('.choices__inner').type('Orders{enter}');
        cy.get('.choices__inner').type('Device{enter}');
        cy.get('.choices__inner').type('Report{enter}');
        cy.get('.choices__inner').type('International{enter}');
        cy.get('.choices__inner').type('Data{enter}');
        cy.get('.choices__inner').type('Lines{enter}');
    });
});