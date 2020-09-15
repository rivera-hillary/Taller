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

import 'cypress-file-upload';

Cypress.Commands.add('login', (user) => {
    cy.get('#username').type(user);
    cy.get('#password').type('1');
    cy.get('#login.button').click().wait(500);
});

// CPD User — zion — 1 
Cypress.Commands.add('newOrder', () => {
    cy.get('.d-flex > [href="/client/3980/orders/1216414/"]').click();
    cy.get('.modal-orders > #dropdownMenuButton').click();
    cy.get(':nth-child(1) > .type-order-card > .btn').click();
});

// CPD MOTUS SETTINGS
Cypress.Commands.add('settings', () => {
    cy.get('.d-flex > [href="/client/3980/settings/general/"]').click();
});


//ADMINISTRATION
Cypress.Commands.add('administration', () => {
    cy.get('.admin-toggle-button > .d-flex > .fal').click();
});

//CPD MOTUS PROGRAMS
Cypress.Commands.add('program', () => {
    cy.get('.d-flex > [href="/client/3980/programs/"]').click();
});

//SETTINGS
Cypress.Commands.add('csettings', () => {
    cy.get('.d-flex > [href="/client/3980/settings/general/"]').click();
});

//BOTH COMPANY - PROGRAM DETAILS
Cypress.Commands.add('programDetails', () => {
    cy.get('.d-flex > [href="/client/2807/programs/"]').click();
    cy.get(':nth-child(2) > .row > .program > .title-program > a').click();
    cy.get('.nav > :nth-child(2) > .nav-link').click();
});

//CPD MOTUS - USERS
Cypress.Commands.add('users', () => {
    cy.get('.d-flex > [href="/client/3980/users/"]').click();
});

//CPD MOTUS - HOME
Cypress.Commands.add('home', () => {
    cy.get('.d-flex > [href="/client/3980/dashboard/"]').click();
});
// QAR CPD - HOME
Cypress.Commands.add('homer', () => {
    cy.get('.d-flex > [href="/client/8329/dashboard/"]').click();
});
// QAR CPD - HOME
Cypress.Commands.add('homej', () => {
    cy.get('.d-flex > [href="/client/7183/dashboard/"]').click();
});

// QA CPD - ORDERS
Cypress.Commands.add('orders', () => {
    cy.get('.d-flex > [href="/client/3980/orders/akore/"]').click();
});

//INVENTORY
Cypress.Commands.add('inventory', () => {
    cy.get('.d-flex > [href="/client/3980/inventory/phone_lines/"]').click();
});
Cypress.Commands.add('inventoryr', () => {
    cy.get('.d-flex > [href="/client/8329/inventory/phone_lines/"]').click();
});

// COMPANIES
// QA CPD
Cypress.Commands.add('company', () => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="QA CPD"]').click().wait(500);
});
// QA R
Cypress.Commands.add('companyr', () => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="QA R"]').click().wait(500);
});
// USERS QA R
Cypress.Commands.add('usersr', () => {
    cy.get('.d-flex > [href="/client/8329/users/"]').click();
});

// J&Js Second Dance
Cypress.Commands.add('companyj', () => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('[data-name="J&JS SECOND DANCE"]').click().wait(500);
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
