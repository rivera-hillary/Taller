/// <reference types="Cypress" />


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('login', (user) => {
    cy.get('#username').type('akore');
    cy.get('#password').type('1');
    cy.get('#login.button').click();
});

Cypress.Commands.add('settings', (select) => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('.dropdown-menu').contains('MyCompany').click();
    cy.get('[href="/client/2806/settings/general/"]').click();
});

Cypress.Commands.add('programs', (select) => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('.dropdown-menu').contains('MyCompany').click();
    cy.get('[href="/client/2806/programs/"]');
});

//ADMINISTRATION
Cypress.Commands.add('administration', (select) => {
    cy.get('.d-flex > .fal').click();
});

//BOTH
Cypress.Commands.add('program', (select) => {
    cy.get('.d-flex > [href="/client/2807/programs/"]').click();
});

//BOTH COMPANY - PROGRAM DETAILS
Cypress.Commands.add('programDetails', (select) => {
    cy.get('.d-flex > [href="/client/2807/programs/"]').click();
    cy.get(':nth-child(2) > .row > .program > .title-program > a').click();
    cy.get('.nav > :nth-child(2) > .nav-link').click();
});

//BOTH COMPANY - USERS
Cypress.Commands.add('usersBothCompany', (select) => {
    cy.get('.d-flex > [href="/client/2807/users/"]').click();
});

//BOTH COMPANY - ORDERS
Cypress.Commands.add('orders', (select) => {
    cy.get('[href="/client/2807/orders/akore/"]').click();
});

// MOTUS CPD 
Cypress.Commands.add('usersMotusCPD', (select) => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="MOTUS CPD"] > .pr-3').click();
    cy.get('[href="/client/2811/users/"]').click();
});

// MYRWR 
Cypress.Commands.add('usersMyRWR', (select) => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="MYRWR"] > .pr-3').click();
    cy.get('.d-flex > [href="/client/2809/users/"]').click();
});


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
