describe('Sixth Test Suite', () => {

    it('Test Case1', () => {
        //39. Handling Mouse hover popus using Cypress
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
        cy.contains('Reload').click({force:true});
        cy.url().should('not.include', 'top');

    })

})

/// <reference types="Cypress" />
