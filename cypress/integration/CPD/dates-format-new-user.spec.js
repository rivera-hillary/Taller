/// <reference types="Cypress" />

describe('BothCompany > Users > Add User', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.usersBothCompany();
    });
    it('Date on form',() => {
        cy.get('[href="/client/2807/users/new/"]').click();
        // FORMULARIO 
        cy.get('#user-CPDTerminationDate').type('2020-06-04');
        cy.get('#user-StartDate').type('2020-06-10');
        cy.get('#user-TerminationDate').type('2020-11-11');
    });
});