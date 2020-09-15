/// <reference types="Cypress" />

describe('CPD - 861', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        //cy.usersBothCompany();
        //cy.url().should('include','/users');
        
    });
    it('Upgrade Eligibility Status',() => {
        cy.get('.pl-3 > .mr-2').click();
        cy.get('form > .search-control > .form-control').type('mhenriquez@motus.com{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-options-main-button').click();
        cy.get('#user-ManagerEmail').type('hola@email.com');
        cy.get('[data-reference="0"] > .associations-wrapper > .entity-type-phone-line > .entity-selector > .form-group > .choices > .choices__inner').click().get('#choices--user-UsersDevicesPhoneLines0PhoneLineID-item-choice-1').wait(500).click();
        cy.get('[data-reference="0"] > .associations-wrapper > .entity-type-device > .entity-selector > .form-group > .choices > .choices__inner').click();
    });
});
/*
    it('New Line',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.actions-bar > .btn').click();
        cy.get('#phone-line-LineNumber').type('0180001213');
        cy.get('.btn-primary').click();
    });
    it('Message from an existing line',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('.actions-bar > .btn').click();
        cy.get('#phone-line-LineNumber').type('0180001212');
        cy.get('.btn-primary').click();
        cy.get('.invalid-feedback').contains('The phone number (018-000-1212) already exists in our system.');
    });
    it('New Device',() => {
        cy.get('.actions-bar > .btn').click();
        cy.get('#device-IMEI').type('123456789011112');
        cy.get('.btn-primary').click();
    });
    it('Message from an existing device',() => {
        cy.get('.actions-bar > .btn').click();
        cy.get('#device-IMEI').type('123456789011111');
        cy.get('.btn-primary').click();
        cy.get('.invalid-feedback').contains('The IMEI 123456789011111 already exists in our system.');
    });
    it('Search a phone line with guion',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('#searchDevicesInput').type('555-555-5555{enter}');
        cy.get('.primary-lighter-color').contains('555-555-5555');
    });
    it('Search a phone line without guion',() => {
        cy.get('.nav > :nth-child(2) > .nav-link').click();
        cy.get('#searchDevicesInput').type('5555555555{enter}');
        cy.get('.primary-lighter-color').contains('555-555-5555');
    });  */