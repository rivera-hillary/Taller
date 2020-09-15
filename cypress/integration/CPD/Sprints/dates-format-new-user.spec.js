/// <reference types="Cypress" />

describe('BothCompany > Users > Add User', () => {
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.users();
    });
    it('Date on form',() => {
        cy.get(':nth-child(2) > #dropdownMenuButton').click();
        cy.get('[href="/client/3980/users/new/"]').click();
        // FORM
        cy.get('#user-CPDTerminationDate').type('06/06/2020');
    });
});