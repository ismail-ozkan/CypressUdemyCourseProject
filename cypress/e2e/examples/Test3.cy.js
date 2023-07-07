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

        //29. Handling static dropdowns using select command with Cypress
        // There are two types dropdowns which have different features
        // Dynamic dropdowns, Static dropdowns(options is displayed when click it)
        //Static select dropdown  --> value or text or index(which starts from 1)
        cy.get('#dropdown-class-example').select('Option1');
        cy.wait(1000);
        cy.get('#dropdown-class-example').select('option2');
        cy.wait(1000);
        cy.get('select').select(3).should('have.value', 'option3');





    })
})