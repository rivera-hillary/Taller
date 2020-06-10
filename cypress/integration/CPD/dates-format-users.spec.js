/// <reference types="Cypress" />

describe('BothCompany > User Details', () => {
    const firstDate = Cypress.moment().subtract(7, 'days').format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.usersBothCompany();
    });
    it('Date on order: NL-00000008',() => {
        cy.get('td').eq(98).click();
        cy.get(':nth-child(2) > .pl-4 > :nth-child(3)').wait(5000).should('contain', firstDate);  
    });
});