/// <reference types="Cypress" />

describe('CPD - Add "order on behalf of" to 3 dots on user', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();
        cy.usersMotusCPD();
        cy.wait(1000);
        cy.url().should('include','/users');
    });
    it('Add an order on user: mkr@email.com',() => {
        cy.get(':nth-child(2) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user1');
        cy.get('@user1').click({force: true});
        cy.get(':nth-child(2) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn1');
        cy.get('@orderOn1').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158644 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158644 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
        cy.get('.alert').contains('Please contact your administrator to enable your account to place an order');
    });
    it('Add an order on user: ma@email.com', () => {
        cy.get(':nth-child(3) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user2');
        cy.get('@user2').click({force: true});
        cy.get(':nth-child(3) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn2');
        cy.get('@orderOn2').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158645 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158645 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: js@email.com', () => {
        cy.get(':nth-child(4) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(4) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158646 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158646 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: rx@email.com', () => {
        cy.get(':nth-child(5) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(5) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158647 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158647 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: ja@email.com', () => {
        cy.get(':nth-child(6) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(6) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158648 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158648 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: js1@email.com', () => {
        cy.get(':nth-child(7) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(7) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158649 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158649 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: ba1@email.com', () => {
        cy.get(':nth-child(8) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(8) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158650 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158650 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: zz@email.com', () => {
        cy.get(':nth-child(9) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(9) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158651 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158651 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: ss1@email.com', () => {
        cy.get(':nth-child(10) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(10) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158652 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158652 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: aw@email.com', () => {
        cy.get(':nth-child(11) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(11) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158653 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158653 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: joea@email.com', () => {
        cy.get(':nth-child(12) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(12) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158654 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158654 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: bc@email.com', () => {
        cy.get(':nth-child(13) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(13) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158655 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158655 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
    it('Add an order on user: lola@email.com', () => {
        cy.get(':nth-child(14) > tr > :nth-child(7) > .ellipsis > .dropdown > #userListdropdownMenuButton').as('user');
        cy.get('@user').click({force: true});
        cy.get(':nth-child(14) > tr > :nth-child(7) > .ellipsis > .dropdown > .dropdown-menu > .order-behalf').as('orderOn');
        cy.get('@orderOn').click({force: true});
        // Modal
        cy.get('.place-order-to-user-1158656 > .modal-dialog > .modal-content').should('be.visible');
        cy.get('.place-order-to-user-1158656 > .modal-dialog > .modal-content > .modal-body > .order-options > :nth-child(1) > .type-order-card > .btn').as('orderNew');
        cy.get('@orderNew').click();
    });
});