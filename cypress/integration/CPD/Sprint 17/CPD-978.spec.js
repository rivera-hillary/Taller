/// <reference types="Cypress" />

describe('CPD-978', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
    });
    it('IMEI',() => {
        cy.get('.d-flex > [href="/client/3980/settings/general/"]').click();
        cy.get(':nth-child(5) > .flex-wrap > .mr-0').should('have.class','checked');
        cy.inventory();
        cy.get('thead > tr > :nth-child(2)').contains('IMEI');
        cy.get(':nth-child(1) > [data-label="Device Model"] > .primary-lighter-color').click();
        cy.get(':nth-child(2) > .align-items-start > .keys > :nth-child(1)').contains('IMEI');
    });
});