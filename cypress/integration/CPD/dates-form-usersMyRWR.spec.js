/// <reference types="Cypress" />

describe('BothCompany > Users', () => {
    const fourthDate = Cypress.moment().subtract(7, 'days').format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.usersMyRWR();
    });
    it('Date on order: NL-00000008',() => {
        cy.get(':nth-child(2) > tr > :nth-child(1) > .primary-lighter-color').click();
        cy.get(':nth-child(2) > .pl-4 > :nth-child(3)').wait(5000).should('contain', fourthDate);  
    });
});