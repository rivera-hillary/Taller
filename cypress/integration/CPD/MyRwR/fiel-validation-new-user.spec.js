/// <reference types="Cypress" />

describe('Field Validation on Add User', () => {
    beforeEach('MyRwR > Users > Add User', () => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.usersMyRWR();
        cy.get('[href="/client/2809/users/new/"]').click();
    });
    it('Empty fields',() => {
        cy.get('.btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get('.rwr-config > :nth-child(2) > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(4) > .mr-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get('.mx-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(4) > .ml-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        cy.get(':nth-child(5) > .mr-2 > .form-group > .invalid-feedback').contains('This field can not be empty.');
        // PROGRAM
        cy.get('.on-role-selection > .d-flex > .rq-field > .form-group > .invalid-feedback').contains('This field can not be empty, please select a program.');
    });
    it('Name field numbers and symbols',() => {
        cy.get('#user-FirstName').type('123456');
        cy.get('#user-LastName').type('a');
        cy.get('#user-ClientEmployeeID').type('b');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
        // Symbols
        cy.get('#user-FirstName').clear().type('!"·$%&');
        cy.get('.btn-primary').click();
        cy.get(':nth-child(1) > .mr-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
    });
    it('Last Name field numbers and symbols',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('123456');
        cy.get('#user-ClientEmployeeID').type('b');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-primary').click();
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
        // Symbols
        cy.get('#user-LastName').clear().type('!"·$%&');
        cy.get('.btn-primary').click();
        cy.get('.ml-2 > .form-group > .invalid-feedback').contains('This field must contain only letters.');
    });
    it('Client Employee ID text, numbers and symbols',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text');
        cy.get('#user-Email').type('a@email.com');
        cy.get('.btn-primary').click();
        // Numbers
        cy.get('#user-ClientEmployeeID').clear().type('123456');
        cy.get('.btn-primary').click();
        /*
        // Symbols
        cy.get('#user-ClientEmployeeID').clear().type('!"·$%&');
        cy.get('.btn-primary').click();
        */
    });
    it('Email field',() => {
        cy.get('#user-FirstName').type('a');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text123');
        cy.get('#user-Email').type('aaaa.com');
        cy.get('.btn-primary').click();
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .invalid-feedback').contains('The email (aaaa.com) does not have a valid format.');
    });
    it('Regular User',() => {
        cy.get('#user-FirstName').type('ac');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text12345');
        cy.get('#user-Email').type('ac@email.com');
        cy.get('#user-AddressLineOne').type('c');
        cy.get('#user-City').type('d');
        cy.get('#user-State').type('e');
        cy.get('#user-ZipCode').type('08');
        cy.get('#user-StartDate').type('2020-06-11');
        cy.get('.rq-field > .form-group > .choices > .choices__inner > .choices__list > .choices__item').click();
        cy.get('[data-value="8835"]').click();
        cy.get('.btn-primary').click();
    });
    it('Admin User',() => {
        cy.get('#user-FirstName').type('ab');
        cy.get('#user-LastName').type('b');
        cy.get('#user-ClientEmployeeID').type('text1234');
        cy.get('#user-Email').type('ab@email.com');
        cy.get('.user-role-selection--admin').click();
        cy.get('#user-AddressLineOne').type('c');
        cy.get('#user-City').type('d');
        cy.get('#user-State').type('e');
        cy.get('#user-ZipCode').type('08');
        cy.get('#user-StartDate').type('2020-06-11');
        cy.get('.btn-primary').click();
    });
});