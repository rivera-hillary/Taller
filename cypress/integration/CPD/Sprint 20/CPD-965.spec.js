/// <reference types="Cypress" />

describe('CPD-965', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('akore');
        cy.wait(1000);
        cy.url().should('include', '/dashboard/');
    });
    it('Filter on Line Reports',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(1)').contains('Active');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(2)').contains('Deactivated');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(3)').contains('Suspended');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(4)').contains('Forwarding Calls');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(5)').contains('Pending Act.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(6)').contains('Pending Deact.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(7)').contains('Pending Susp.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(8)').contains('Pending CF.');
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(1)').contains('Smartphone');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(2)').contains('Basic Phone');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(3)').contains('Tablet');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(4)').contains('Hotspot');
    });
    it('Filter on Costs Reports',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.col-12 > .dropdown-companies > .dropdown > .dropdown-toggle > .d-flex').click();
        cy.get('.dropdown-companies > .dropdown > .dropdown-menu > ul > :nth-child(1) > .pr-3').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(1)').contains('Active');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(2)').contains('Deactivated');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(3)').contains('Suspended');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(4)').contains('Forwarding Calls');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(5)').contains('Pending Act.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(6)').contains('Pending Deact.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(7)').contains('Pending Susp.');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(8)').contains('Pending CF.');
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(1)').contains('Smartphone');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(2)').contains('Basic Phone');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(3)').contains('Tablet');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(4)').contains('Hotspot');
    });
    it('Line Status: Active on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(1)').contains('Active').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Active');
    });
    it('Line Status: Deactivated on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(2)').contains('Deactivated').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Deactivated');
    });
    it('Line Status: Suspended on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(3)').contains('Suspended').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Suspended');
    });
    it('Line Status: Forwarding Calls on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(4)').contains('Forwarding Calls').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Forwarding Calls');
    });
    it('Line Status: Pending Act. on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(5)').contains('Pending Act.').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Pending Act.');
    });
    it('Line Status: Pending Deact. on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(6)').contains('Pending Deact.').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Pending Deact.');
    });
    it('Line Status: Pending Susp. on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(7)').contains('Pending Susp.').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Pending Susp.');
    });
    it('Line Status: Pending CF. on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(5) > .filter-title').contains('Line Status');
        cy.get(':nth-child(5) > .filter-list-options-container > :nth-child(8)').contains('Pending CF.').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Line Status: Pending CF.');
    });
    it('Device Type: Smartphone on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(1)').contains('Smartphone').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Device Type: Smartphone');
    });
    it('Device Type: Basic Phone on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(2)').contains('Basic Phone').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Device Type: Basic Phone');
    });
    it('Device Type: Tablet on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(3)').contains('Tablet').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Device Type: Tablet');
    });
    it('Device Type: Hotspot on Additional Reports Filter',() => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.little-reports > :nth-child(1) > .primary-lighter-color > u').click();
        cy.get('.filters > .dropdown > #dropdownMenuButton').click();
        cy.get(':nth-child(7) > .filter-title').contains('Device Type');
        cy.get(':nth-child(7) > .filter-list-options-container > :nth-child(4)').contains('Hotspot').click();
        cy.get('.button > .btn').click();
        cy.get('.badge').contains('Device Type: Hotspot');
    });
});