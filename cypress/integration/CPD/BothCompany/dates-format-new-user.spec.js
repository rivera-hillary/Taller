/// <reference types="Cypress" />

describe('BothCompany > Users > Add User', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login1();
        cy.wait(1000);
        cy.usersBothCompany();
    });
    it('Date on form',() => {
        cy.get('.actions-bar > .dropdown > #dropdownMenuButton').click();
        cy.get('[href="/client/2807/users/new/"]').click();
        // FORM
        cy.get('#user-CPDTerminationDate').type('06/06/2020');
        cy.get('#user-StartDate').type('06/10/2020');
        cy.get('#user-TerminationDate').type('11/11/2020');
    });
});