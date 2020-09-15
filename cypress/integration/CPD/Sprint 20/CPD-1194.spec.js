/// <reference types="Cypress" />

describe('Associations', () => {
    beforeEach(() => {
        cy.visit('/');
        // CPD User — cpduser — 1
        cy.login('akore');
        cy.wait(1000);
        cy.company();
        cy.users();
    });
    it('Order New Phone Line',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('.type-order-card > .btn').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('.shipping-area-address').click();
        cy.get('#new-line-order-PreferredAreaCode').type('02');
        cy.get('#new-line-order-Address').type('909-6956 Metus Road');
        cy.get('#new-line-order-City').type('San Jose');
        cy.get('#new-line-order-State').type('California');
        cy.get('#new-line-order-ZipCode').type('92340');
        cy.get('#BuildSelectedDeviceBtn').click();
        cy.get('#approveNewLineForm > .btn').click();
        cy.get('#swal2-content').contains('Have you placed this order with the carrier? If yes, please proceed.');
        cy.get('.swal2-cancel').contains('Cancel');
        cy.get('.swal2-confirm').contains('Yes');
    });
    it('Order Upgrade Device',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get(':nth-child(2) > .type-order-card > .btn').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('#upgrade-device-order-Address').type('373-8707 Molestie. Rd.');
        cy.get('#upgrade-device-order-City').type('Gary');
        cy.get('#upgrade-device-order-State').type('IN');
        cy.get('#upgrade-device-order-ZipCode').type('42228');
        cy.get('#UpgradeDeviceFormOrderBtn').click();
        cy.get('.form-group > .mt-2').type('I need a new device');
        cy.get('.swal2-confirm').click();
        cy.get('#approveUpgradeDeviceForm > .btn').click();
        cy.get('#swal2-content').contains('Have you placed this order with the carrier? If yes, please proceed.');
        cy.get('.swal2-cancel').contains('Cancel');
        cy.get('.swal2-confirm').contains('Yes');
    });
    it('Order Move Personal Line To Company Plan',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('.mt-3 > .order-type-link').click();
        cy.get('#wireless-transfer-order-PhoneNumber').type('273-829-3646');
        cy.get('.ive-notified-carrier > .selection-box').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('#wireless-transfer-order-Address').type('Ap #820-7176 Sem Rd.');
        cy.get('#wireless-transfer-order-City').type('Portland');
        cy.get('#wireless-transfer-order-State').type('OR');
        cy.get('#wireless-transfer-order-ZipCode').type('69109');
        cy.get('#WirelessTransferOrderFormBtn').click();
        cy.get('#approveWirelessTransferForm > .btn').click();
        cy.get('#swal2-content').contains('Have you placed this order with the carrier? If yes, please proceed.');
        cy.get('.swal2-cancel').contains('Cancel');
        cy.get('.swal2-confirm').contains('Yes');
    });
    it('Order Move Personal Line To Company Plan',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get('.mt-2 > .order-type-link').click();
        cy.get('.cursor-pointer > .select-device-btn').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('#personal-to-corporate-line-order-ExistingMobileNumber').type('273-829-3647');
        cy.get('#personal-to-corporate-line-order-ExistingCarrier').type('AT&T');
        cy.get('#personal-to-corporate-line-order-ExistingBillingAddress').type('566-8962 Porta Avenue');
        cy.get('#personal-to-corporate-line-order-ExistingAccountNumber').type('01');
        cy.get('#personal-to-corporate-line-order-ExistingPinOrPasscode').type('1111');
        cy.get('#personal-to-corporate-line-order-UserSSN').type('1111');
        cy.get('#personal-to-corporate-line-order-Address').type('193-6987 Euismod St.');
        cy.get('#personal-to-corporate-line-order-City').type('San Diego');
        cy.get('#personal-to-corporate-line-order-State').type('CA');
        cy.get('#personal-to-corporate-line-order-Zipcode').type('91876');
        cy.get('#PersonalCorporateLinePortOrderFormBtn').click();
        cy.get('#approvePersonalCorporateLinePortForm > .btn').click();
        cy.get('#swal2-content').contains('Have you placed this order with the carrier? If yes, please proceed.');
        cy.get('.swal2-cancel').contains('Cancel');
        cy.get('.swal2-confirm').contains('Yes');
    });
    it('Order New Accessory',() => {
        cy.get(':nth-child(3) > :nth-child(1) > .primary-lighter-color').click();
        cy.get('.place-order-btn').click();
        cy.get(':nth-child(5) > .order-type-link').click();
        cy.get('.wireless-accessories > :nth-child(1)').click();
        cy.get('#accessory-order-Address').type('Ap #800-7758 Dictum Avenue');
        cy.get('#accessory-order-City').type('Clarksville');
        cy.get('#accessory-order-State').type('Tennessee');
        cy.get('#accessory-order-ZipCode').type('10733');
        cy.get('.btn-primary').click();
        cy.get('#approveAccesoryForm > .btn').click();
        cy.get('#swal2-content').contains('Have you placed this order with the carrier? If yes, please proceed.');
        cy.get('.swal2-cancel').contains('Cancel');
        cy.get('.swal2-confirm').contains('Yes');
    });
});