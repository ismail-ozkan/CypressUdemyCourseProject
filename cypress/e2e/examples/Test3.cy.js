/// <reference types="Cypress" />

describe('Third Test Suite', () => {

    it('Test Case1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        //cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
       // cy.get('input[type="checkbox"]').check(['option2', 'option3']);

        cy.get('input[type="checkbox"]').each((option) => {
            if (option.attr('value') != 'option1') {
                return;
            }
            cy.wrap(option).check();
        })




    })
})