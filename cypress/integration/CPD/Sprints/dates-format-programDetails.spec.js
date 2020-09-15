/// <reference types="Cypress" />

describe('BothCompany > Programs > Program Details', () => {
    const firstDate = Cypress.moment().subtract(14, 'days').format('MM/DD/YYYY');
    const secondDate = Cypress.moment().subtract(13, 'days').format('MM/DD/YYYY');
    const thirdDate = Cypress.moment().subtract(12, 'days').format('MM/DD/YYYY');
    beforeEach(() => {
        cy.visit('/');
        // Otis — M3 SUPER ADMIN
        cy.login('akore');
        cy.wait(1000);
        cy.programDetails();
    });
    it('Date on user: 1158604',() => {
        cy.get('td').eq(4).wait(5000).should('contain', firstDate);  
    });
    it('Date on user: 1158608',() => {
        cy.get('td').eq(10).wait(5000).should('contain',firstDate);  
    });
    it('Date on user: 1158609',() => {
        cy.get('td').eq(16).wait(5000).should('contain',firstDate);  
    });
    it('Date on user: 1158612',() => {
        cy.get('td').eq(22).wait(5000).should('contain',secondDate);
    });
    it('Date on user: 1158617',() => {
        cy.get('td').eq(28).wait(5000).should('contain',thirdDate);  
    });
    it('Date on user: 1158618',() => {
        cy.get('td').eq(34).wait(5000).should('contain',thirdDate); 
    });
    it('Date on user: 1158620',() => {
        cy.get('td').eq(40).wait(5000).should('contain',thirdDate);  
    });
});
/*
    it('BothCompany > Users',() => {
        cy.programDetails();
        const todaysDate = Cypress.moment().format('MM/DD/YYYY');
        cy.get(':nth-child(1) > :nth-child(2) > .primary-color').click();
        cy.get('span').eq(19).wait(5000).should('contain', todaysDate);
        //cy.get(':nth-child(2) > .pl-4 > :nth-child(3)').should('contain','Order shipped on: ' + todaysDate);
        
       //cy.get('span').eq(19).type('06032020').should('have.value','06 03 2020');
    });
    it('BothCompany > Orders',() => {
        const aDate = Cypress.moment().format('MM/DD/YYYY');
        cy.orders();
        cy.get('td').eq(4).wait(5000).should('contain',aDate);
    });*/