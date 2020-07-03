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
    cy.get('#username').type(user);
    cy.get('#password').type('1');
    cy.get('#login.button').click();
});

// Zion — CPD User — zion — 1 
Cypress.Commands.add('newOrder', () => {
    cy.get('.d-flex > [href="/client/2807/orders/1158594/"]').click();
    cy.get('.actions-bar > .modal-orders > #dropdownMenuButton').click();
    cy.get('.type-order-card > .btn').click();
});

// CPD MOTUS SETTINGS
Cypress.Commands.add('settings', () => {
    cy.get('.d-flex > [href="/client/2822/settings/general/"]').click();
});

// MYCOMPANY PROGRAMS
Cypress.Commands.add('programs', () => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('.dropdown-menu').contains('MyCompany').click();
    cy.get('[href="/client/2806/programs/"]');
});

//ADMINISTRATION
Cypress.Commands.add('administration', () => {
    cy.get('.admin-toggle-button > .d-flex > .fal').click();
});

//BOTH PROGRAMS
Cypress.Commands.add('program', () => {
    cy.get('.d-flex > [href="/client/2807/programs/"]').click();
});

//BOTH - SETTINGS
Cypress.Commands.add('csettings', () => {
    cy.get('.d-flex > [href="/client/2822/settings/general/"]').click();
});

//BOTH COMPANY - PROGRAM DETAILS
Cypress.Commands.add('programDetails', () => {
    cy.get('.d-flex > [href="/client/2807/programs/"]').click();
    cy.get(':nth-child(2) > .row > .program > .title-program > a').click();
    cy.get('.nav > :nth-child(2) > .nav-link').click();
});

//CPD MOTUS - USERS
Cypress.Commands.add('users', () => {
    cy.get('.d-flex > [href="/client/2822/users/"]').click();
});

//CPD MOTUS - ORDERS
Cypress.Commands.add('orders', () => {
    cy.get('.d-flex > [href="/client/2822/orders/akore/"]').click();
});

//BOTH COMPANY - INVENTORY
Cypress.Commands.add('inventory', () => {
    cy.get('.d-flex > [href="/client/2807/inventory/devices/"]').click();
});

// MOTUS CPD USERS 
Cypress.Commands.add('usersMotusCPD', () => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="MOTUS CPD"] > .pr-3').click();
    cy.get('[href="/client/2811/users/"]').click();
});

// MYRWR USERS
Cypress.Commands.add('usersMyRWR', () => {
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
