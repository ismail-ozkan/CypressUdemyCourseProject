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

        // Dynamic dropdowns
        cy.get('#autocomplete').type('turk');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'Turkey') {
                cy.wrap($el).click();
            }
        })

        cy.get('#autocomplete').should('have.value', 'Turkey');

        // 31. Element Displayed Example
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.wait(1000);
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radio buttons
        cy.get('input[value="radio1"]').check().should('be.checked');
        cy.get('input[value="radio2"]').check().should('be.checked');
        cy.get('input[value="radio1"]').should('not.be.checked');
        cy.get('input[value="radio3"]').check().should('be.checked');
        cy.get('input[value="radio2"]').should('not.be.checked');



    })
})