/// <reference types="Cypress" />

describe('BothCompany > Orders', () => {
    const firstDate = Cypress.moment().subtract(8, 'days').format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.orders();
    });
    it('Date on order: NL-00000008',() => {
        cy.get('td').eq(4).wait(5000).should('contain', firstDate);  
    });
    it('Date on order: NL-00000008 - New Line',() => {
        cy.get('td').eq(0).click();
        cy.get(':nth-child(2) > .order-details-values > :nth-child(2)').wait(5000).should('contain', firstDate);  
    });
});