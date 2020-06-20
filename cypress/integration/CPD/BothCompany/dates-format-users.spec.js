/// <reference types="Cypress" />

describe('BothCompany > User Details', () => {
    const firstDate = Cypress.moment().subtract(14, 'days').format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        cy.login1();
        cy.wait(1000);
        cy.usersBothCompany();
    });
    it('Date on order: NL-00000008',() => {
        cy.get('td').eq(112).click();
        cy.get(':nth-child(2) > .pl-4 > :nth-child(3)').wait(5000).should('contain', firstDate);  
    });
});