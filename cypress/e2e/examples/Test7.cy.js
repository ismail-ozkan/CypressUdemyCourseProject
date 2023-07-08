/// <reference types="Cypress" />
describe('Seventh Test Suite', () => {

    it('Test Case1', () => {
        //40. Handling Child windows using Cypress
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab')// -> this is now a cypress element we need a jquery element
            .then($el => {
                const newUrl = $el.prop('href');
                cy.visit(newUrl);
                cy.wait(3000)
                cy.origin(newUrl,() => {
                    cy.get('div.navbar-collapse a[href*="about"]')
                });

            })


    })

})


