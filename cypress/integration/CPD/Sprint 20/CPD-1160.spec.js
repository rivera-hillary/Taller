/// <reference types="Cypress" />

describe('Associations', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.companyr();
        cy.usersr();
    });
    it('Order New Phone Line (Approve Order)',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get(':nth-child(1) > .type-order-card > .btn').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('.shipping-area-address').click();
        cy.get('#new-line-order-PreferredAreaCode').type('02');
        cy.get('#new-line-order-Address').type('909-6956 Metus Road');
        cy.get('#new-line-order-City').type('San Jose');
        cy.get('#new-line-order-State').type('California');
        cy.get('#new-line-order-ZipCode').type('92340');
        cy.get('#BuildSelectedDeviceBtn').click();
        cy.get('.form-group > .mt-2').type('Because I need a new line');
        cy.get('.swal2-confirm').click();
        cy.get('.background-success-color').click();
        cy.get('.swal2-header').contains('Approve Order?');
        cy.get('#swal2-content > :nth-child(1)').contains('Are you sure you want to approve this order for John Smith? This action can not be undone.');
        cy.get('.swal2-cancel').contains('No, Cancel');
        cy.get('.swal2-confirm').contains('Yes, Approve Order');
    });
    it('Order Upgrade Device (Approve Order)',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('.order-type-link').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('#corporate-to-corporate-line-order-Address').type('909-6956 Metus Road');
        cy.get('#corporate-to-corporate-line-order-City').type('San Jose');
        cy.get('#corporate-to-corporate-line-order-State').type('California');
        cy.get('#corporate-to-corporate-line-order-ZipCode').type('92340');
        cy.get('#BuildSelectedDeviceBtn').click();
        cy.get('.background-success-color').click();
        cy.get('.swal2-header').contains('Approve Order?');
        cy.get('#swal2-content > :nth-child(1)').contains('Are you sure you want to approve this order for John Smith? This action can not be undone.');
        cy.get('.swal2-cancel').contains('No, Cancel');
        cy.get('.swal2-confirm').contains('Yes, Approve Order');
    });
});