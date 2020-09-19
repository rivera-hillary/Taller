/// <reference types="Cypress" />

describe('CPD-1136', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.url().should('include', '/reports/')
    });
    it('Make phone line clickable on Total Allocated Cost',() => {
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.col-12 > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
        cy.get('.dropdown-companies > .dropdown > .dropdown-menu > ul > :nth-child(1) > .pr-3').click();
        cy.get(':nth-child(1) > .column2-freeze > .font-14').should('have.class', 'primary-lighter-color').and('have.attr', 'href').and('include', '/details/');
    });
});