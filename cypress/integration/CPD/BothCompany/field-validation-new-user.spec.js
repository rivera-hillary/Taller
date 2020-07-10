/// <reference types="Cypress" />

describe('Field Validation on Add User', () => {
    beforeEach('CPD MOTUS > Users > Add User', () => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2822/users/new/"]').click();
    });/*
    it('Empty fields',() => {
        cy.get('.btn-inline > .btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(4) > .form-group > .invalid-feedback').contains('This field can not be empty, please select a program.');
    });
    it('Name field numbers and symbols',() => {
        cy.get('#user-FirstName').type('123456');
        cy.get('#user-LastName').type('a');
        cy.get('#user-ClientEmployeeID').type('b');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field can not contain numbers.');
        // Symbols
        cy.get('#user-FirstName').clear().type('!"·$%&');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get('#user-ManagerEmail').type('juancoronel@email.com');
        cy.get('.choices__inner > .choices__list > .choices__item').click();
        cy.get('[data-value="8890"]').click();
        cy.get('.btn-inline > .btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
    });
    it('Last Name field numbers and symbols',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('123456');
        cy.get('#user-ClientEmployeeID').type('b');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
        // Symbols
        cy.get('#user-LastName').clear().type('!"·$%&');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
    });
    it('Client Employee ID text, numbers and symbols',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-inline > .btn-primary').click();
        // Numbers
        cy.get('#user-ClientEmployeeID').clear().type('123456');
        cy.get('.btn-inline > .btn-primary').click();
        
        // Symbols
        //cy.get('#user-ClientEmployeeID').clear().type('!"·$%&');
        //cy.get('.btn-inline > .btn-primary').click();
        
    });*/
    it('Email field',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text123');
        cy.get('#user-Email').type('aaaa.com');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .invalid-feedback').contains('The email (aaaa.com) does not have a valid format.');
    });
    it('Regular User',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text123');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-inline > .btn-primary').click();
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(4) > .form-group > .invalid-feedback').contains('This field can not be empty, please select a program.');
    });/*
    it('Admin User',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text123');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.cpd-config > :nth-child(1) > .flex-wrap > .user-role-selection--admin').click();
        cy.get('.btn-inline > .btn-primary').click();
    });*/
    it('Two switches are disabled',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text123');
        cy.get('#user-Email').type('a@email.com');

        //cy.get('.company-configuration--cpd > .mt-3 > .custom-control').click();
        //cy.get('.company-configuration--rwr > .mt-3 > .custom-control').click();
        //cy.get('.btn-inline > .btn-primary').click();
        //cy.get('.company-configuration--cpd > .invalid-feedback').contains('Please select the product(s) that this user should be added to.');
        //cy.get('.company-configuration--rwr > .invalid-feedback').contains('Please select the product(s) that this user should be added to.')
    });
});