/// <reference types="Cypress" />

describe('BothCompany > Orders', () => {
    const todaysDate = Cypress.moment().format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.wait(1000);
        cy.orders();
    });
    it('Date on order: NL-00000008',() => {
        cy.get('td').eq(4).wait(5000).should('contain', todaysDate);  
    });
    it('Date on order: NL-00000008 - New Line',() => {
        cy.get('td').eq(0).click();
        cy.get(':nth-child(2) > .order-details-values > :nth-child(2)').wait(5000).should('contain', todaysDate);  
    });
});