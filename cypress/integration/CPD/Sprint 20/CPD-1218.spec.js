/// <reference types="Cypress" />

describe('CPD-1218', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.administration();
    });/*
    it('Create a device',() => {
        cy.get('nav > [href="/administration/devices/"]').click();
        cy.get('.btn-group > .btn').click();
        cy.get('[href="/administration/devices/new/cpd/"]').click();
        cy.get('.choices__inner').click();
        cy.get('.choices__inner > .choices__list > .choices__item').get('[data-value="smartphone"]').click();
        cy.get(':nth-child(3) > .form-group > #device-model-Manufacturer').type('SKU-104');
        cy.get(':nth-child(4) > .form-group > #device-model-Manufacturer').type('Apple');
        cy.get('.pr-2 > .form-group > #device-model-Make').type('Iphone')
        cy.get('.pl-2 > .form-group > #device-model-Make').type('(XR)');
        cy.get('#device-model-Storage-0').type('64');
        cy.get('#device-model-Color-0').type('White');
        cy.fixture('xr-red.jpeg').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
               fileContent: fileContent.toString(),
               fileName: 'xr-red.jpeg',
               mimeType: 'image/png'
            });
        });
        cy.get('.btn-primary').click();
    });*/
    it('Allow special characters',() => {
        cy.get('nav > [href="/administration/devices/"]').click();
        cy.get('#searchProgramsInput').type('iPhone XR{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-primary').click();
        cy.get(':nth-child(5) > .form-group > #device-model-Manufacturer').clear().type('Apple()');
        cy.get('.pr-2 > .form-group > #device-model-Make').clear().type('iPhone()')
        cy.get('.pl-2 > .form-group > #device-model-Make').clear().type('(XR)');
        cy.get('.btn-primary').click();
    });
    it('Allow special characters',() => {
        cy.get('nav > [href="/administration/devices/"]').click();
        cy.get('#searchProgramsInput').type('iPhone() (XR){enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-primary').click();
        cy.get(':nth-child(5) > .form-group > #device-model-Manufacturer').clear().type('Apple/Iphone');
        cy.get('.pr-2 > .form-group > #device-model-Make').clear().type('iPhone/')
        cy.get('.pl-2 > .form-group > #device-model-Make').clear().type('XR');
        cy.get('.btn-primary').click();
    });
    it('Allow special characters',() => {
        cy.get('nav > [href="/administration/devices/"]').click();
        cy.get('#searchProgramsInput').type('iPhone/ XR{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-primary').click();
        cy.get(':nth-child(5) > .form-group > #device-model-Manufacturer').clear().type('!"·$%&/()=?');
        cy.get('.pr-2 > .form-group > #device-model-Make').clear().type('!"·$%&/()=? ')
        cy.get('.pl-2 > .form-group > #device-model-Make').clear().type('!"·$%&/()=?');
        cy.get('.btn-primary').click();
    });
    it('Allow special characters',() => {
        cy.get('nav > [href="/administration/devices/"]').click();
        cy.get('#searchProgramsInput').type('!"·$%&/()=?{enter}');
        cy.get('.primary-lighter-color').click();
        cy.get('.btn-primary').click();
        cy.get(':nth-child(5) > .form-group > #device-model-Manufacturer').clear().type('Apple');
        cy.get('.pr-2 > .form-group > #device-model-Make').clear().type('iPhone')
        cy.get('.pl-2 > .form-group > #device-model-Make').clear().type('XR');
        cy.get('.btn-primary').click();
    });
});