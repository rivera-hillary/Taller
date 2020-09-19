/// <reference types="Cypress" />

describe('CPD - 861', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.company();
    });
    it('Deactivated Line',() => {
        cy.users();
        cy.get(':nth-child(1) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('em').click();
        cy.get('.blank-state > div > .btn').click();
        cy.get('.checkbox-entity-phone-line').click();
        cy.get('.entity-type-phone-line > .entity-selector > .form-group > .choices > .choices__inner').click();
        cy.get('[data-entity-class="entity-phone-line-0"]').eq(1).click({force: true});
        cy.get('.col-5 > .choices > .choices__inner').click().get('[data-value="a3fe8241-c5d3-4b3b-8c06-92fe010f0c70"]').click();
        cy.get('#Line-0').type('010-101-0101');
        cy.get('.action-container > .btn-primary').click();
        cy.get('.alert-danger').contains('Failed to updade user. The phone number (010-101-0101) already exists in this company.');
    });
    it('Search field',() => {
        cy.inventory();
        cy.url().should('include','inventory');
        cy.get('#searchDevicesInput').type('563-634-6363 {enter}');
        cy.get('[data-label="Associated To Line"]').contains('563-634-6363');
        cy.get('#searchDevicesInput').clear().type('5636346363 {enter}');
        cy.get('[data-label="Associated To Line"]').contains('563-634-6363');
    });
});