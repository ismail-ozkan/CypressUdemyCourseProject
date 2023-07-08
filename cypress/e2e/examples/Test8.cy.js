/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'
describe('Eighth Test Suite', () => {

    it('Frame Test', () => {
        // 41. Handling Frames with Cypress using real time example
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        //cy.wait(4000)
        cy.iframe().find('.bg-pattern-1 h1').should('have.length',2);
    })

})


