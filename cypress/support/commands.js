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
    })
    Cypress.Commands.add('settings', (select) => {
    cy.get('.dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
    cy.get('.dropdown-menu').contains('MyCompany').click();
    cy.get('[href="/client/2806/settings/general/"]').click();
    cy.get('.nav > :nth-child(2) > .nav-link').click();
    })
    
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
