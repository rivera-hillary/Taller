/// <reference types="Cypress" />

describe('CPD - 928', () => {
    beforeEach(() => {
        cy.visit('/');
        
    });
    it('Contains the alert message on CPD Motus / SUPPORT ADMIN',() => {
        // Daniel — ADMIN
        cy.login('cpdsupport');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        // CPD USER
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD ADMIN
        cy.get('form > .search-control > .form-control').type('Juan{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD MANAGER
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // SUPPORT ADMIN
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
    });
    it('Contains the alert message on CPD Motus / M3 SUPER ADMIN',() => {
        //Inez — ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        // CPD USER
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD ADMIN
        cy.get('form > .search-control > .form-control').type('Juan{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD MANAGER
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // SUPPORT ADMIN
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
    });
    it('Contains the alert message on CPD Motus / ADMIN',() => {
        // Juan — ADMIN
        cy.login('cpdadmin');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');

        // CPD USER
        cy.get('form > .search-control > .form-control').type('Gilberto{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD ADMIN
        cy.get('form > .search-control > .form-control').type('Juan{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // CPD MANAGER
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // SUPPORT ADMIN
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
    });
    it('Contains the alert message on CPD Motus / MANAGER',() => {
        cy.visit('/');
        // Alexis — MANAGER
        cy.login('cpdmanager');
        cy.wait(1000);
        cy.users();
        cy.url().should('include','/users');
        // MANAGER
        cy.get('form > .search-control > .form-control').type('Alexis{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
    });
    it('Contains the alert message on CPD & RWR Motus / M3 SUPER ADMIN',() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.userscpdrwr();
        cy.url().should('include','/users');
        // RWR ADMIN
        cy.get('form > .search-control > .form-control').type('Adrienne{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
        cy.get('.no-admin-navbar > .d-flex > .active').click();
        // RWR USER
        cy.get('form > .search-control > .form-control').type('Xantha{enter}');
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('.alert').should('be.visible').contains('Any changes made manually will be overwritten by the WUIF upload if those changes are not also changed on WUIF file');
    });
});