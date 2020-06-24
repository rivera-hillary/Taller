/// <reference types="Cypress" />

describe('CPD - 802', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('zion');
        cy.wait(1000);
    });
    it('Preferred Area Code Address Format',() => {
        cy.get('.d-flex > [href="/client/2807/orders/1158594/"]').click();
        cy.url().should('include','/orders');
        cy.get('.actions-bar > .modal-orders > #dropdownMenuButton').click();
        cy.get('.type-order-card > .btn').click();
        cy.get(':nth-child(2) > .ml-2').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('.close > span').wait(500).click();
        cy.get('.shipping-area-address').click();
        cy.get('#new-line-order-AreaCodeAddressLineOne').should('not.be.visible');
        cy.get('#new-line-order-AreaCodeAddressLineTwo').should('not.be.visible');
        cy.get('#new-line-order-AreaZipCode').should('not.be.visible');
        cy.get('#new-line-order-AreaCity').should('not.be.visible');
        cy.get('#new-line-order-AreaState').should('not.be.visible');
        cy.get('.area-code-information > .d-flex > .pl-2 > .form-group > .choices > .choices__inner').should('not.be.visible');
        cy.get('.order-addresses.mb-4 > :nth-child(2) > .justify-content-between > :nth-child(1)').as('provice');
        cy.get('@provice').click();
        cy.get('.area-code-information > :nth-child(1) > label').contains('Area Code Address Line 1').should('be.visible');
        cy.get('.area-code-information > :nth-child(2) > label').contains('Area Code Address Line 2').should('be.visible');
        cy.get('.area-code-information > .d-flex > .pr-2 > .form-group > label').contains('Postal Code').should('be.visible');
        cy.get('.area-code-information > .d-flex > :nth-child(2) > .form-group > label').contains('City').should('be.visible');
        cy.get('.area-code-information > .d-flex > :nth-child(3) > .form-group > label').contains('State/Province/Territory').should('be.visible');
        cy.get('.area-code-information > .d-flex > .pl-2 > .form-group > label').contains('Country').should('be.visible');

    });
});