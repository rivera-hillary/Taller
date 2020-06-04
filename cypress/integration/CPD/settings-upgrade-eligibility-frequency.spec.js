/// <reference types="Cypress" />

describe('CPD - Upgrade Eligibility Frequency', () => {
    beforeEach(() => {
    cy.visit('/');
    cy.login();
    cy.settings();
    cy.wait(1000);
    cy.url().should('include','/settings');
    cy.get('.nav > :nth-child(2) > .nav-link').click();
    cy.get('.dropdown-toggle > .btn').click({force: true});
    cy.get('[data-name="ATANDT"]').click();
})
    it('It should be named "Upgrade Eligibility Frequency"', () => {
        cy.get(':nth-child(8) > .pl-0 > label').contains('Upgrade Eligibility Frequency');
    })
    it('Lets click', () => {
        cy.get('#ATAndT-2-card > :nth-child(8) > .pl-0 > .choices > .choices__inner').click();
    })
    it('Its initial state should be 0', () => {
        cy.get('#ATAndT-2-card > :nth-child(8) > .pl-0 > .choices > .choices__inner > .choices__list > .choices__item').contains('0');
    })
})
//cy.get('#ATAndT-2-card > :nth-child(8) > .pl-0 > .choices > .choices__inner').select('[data-value="60"]').should('have.value', '60');
//cy.get('#ATAndT-2-card > :nth-child(8) > .pl-0 > .choices > .choices__inner > .choices__list > .choices__item').click().find('[data-value="60"]').click();
//cy.get('[data-value="60"]').click({ multiple: true });
//cy.get('.pl-0 > .choices > .choices__inner > .choices__list > .choices__item');